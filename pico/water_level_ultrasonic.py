from machine import Pin, ADC
import utime
import _thread
import network
from pico_i2c_lcd import I2cLcd
from machine import I2C
import urequests as requests
import ujson

i2c = I2C(id=1,scl=Pin(19),sda=Pin(18),freq=100000)
lcd = I2cLcd(i2c, 0x27, 2, 16)

min_point=20
max_point=200

#wifi credentials
ssid="Hello"
password="helloSudhanshu"

try:
    f=open('savedata.json', 'r')
    data=f.read()
    #print(ujson.loads(data)["min"])
    f.close()
    min_point=ujson.loads(data)["min"]
    max_point=ujson.loads(data)["max"]
    
            #f.write('Timestamp=kjbjgfk')
            #f.write('Temperature=random')
            #f.write('\n')
        
except:
    print("Error! Could not save")


pump = Pin(15, Pin.OUT)
#button1 = Pin(21, Pin.IN, Pin.PULL_UP)
#pump = machine.Pin(22, Pin.IN, Pin.PULL_UP)
pump.off()
pump_flag="none"
# pump_flag_reset=False
analog_value = ADC(28)
filtered_data = analog_value.read_u16()

button1 = Pin(21,Pin.IN,Pin.PULL_UP)
button2 = Pin(22,Pin.IN,Pin.PULL_UP)
button3 = Pin(26,Pin.IN,Pin.PULL_UP)
button4 = Pin(27,Pin.IN,Pin.PULL_UP)
button5 = Pin(28,Pin.IN,Pin.PULL_UP)

def on_button(button1):
    
    if(button5.value()):
        print("main fn")

        print("on button pressed")
        global pump_flag
        pump_flag="on"
        global pump
        pump.on()
#         lcd.move_to(0,1)
#         lcd.putstr('Pump: On    ')
    
    else:
        print("alt fn")
        global max_point
        max_point=filtered_data
        print("min"+str(min_point))
        print("max"+str(max_point))
        try:
            with open('savedata.json', 'w') as f:
                ujson.dump({
                    "min":min_point,
                    "max":max_point
                    },f)
                
        except:
            print("Error! Could not save")
        
        lcd.move_to(0,1)
        lcd.putstr('Saved Max Level')
        print("testing max calibration ponit")
        utime.sleep(1)


def off_button(button2):
    if(button5.value()):
        print("main fn")

        print("off button pressed")
        global pump_flag
        pump_flag="off"
        global pump
        pump.off()
#         try:
#             lcd.move_to(0,1)
#             lcd.putstr('Pump: Off   ')
#         except:
#             print('exception in off button')
        
    else:
        global min_point
        min_point=filtered_data
        print("min"+str(min_point))
        print("max"+str(max_point))
        
        try:
            with open('savedata.json', 'w') as f:
                ujson.dump({
                    "min":min_point,
                    "max":max_point
                    },f)
            
        except:
                print("Error! Could not save")
        
        lcd.move_to(0,1)
        lcd.putstr('Saved Min Level')
        print("testing min calibration ponit")
        utime.sleep(1)


def calibrate_min(button3):
#     try:
#         f=open('savedata.json', 'r')
#         data=f.read()
#         print(data)
#         f.close()
#             #f.write('Timestamp=kjbjgfk')
#             #f.write('Temperature=random')
#             #f.write('\n')
#         
#     except:
#             print("Error! Could not save")
    global min_point
    min_point=filtered_data
    print("min"+str(min_point))
    print("max"+str(max_point))
    
    try:
        with open('savedata.json', 'w') as f:
            ujson.dump({
                "min":min_point,
                "max":max_point
                },f)
            #f.write('Timestamp=kjbjgfk')
            #f.write('Temperature=random')
            #f.write('\n')
        
    except:
            print("Error! Could not save")
     
    print("testing min calibration ponit")
    
def calibrate_max(button4):
    global max_point
    max_point=filtered_data
    print("min"+str(min_point))
    print("max"+str(max_point))
    try:
        with open('savedata.json', 'w') as f:
            ujson.dump({
                "min":min_point,
                "max":max_point
                },f)
            
    except:
            print("Error! Could not save")
    print("testing max calibration ponit")


def connect_to_wifi():
    global ssid
    global password
    
    wlan = network.WLAN(network.STA_IF)
    while True:
        utime.sleep(10)

        if (not wlan.isconnected()):
            print("wifi is connecting")
            wlan.active(True)
            wlan.connect(ssid,password)
            print("wifi: "+str(wlan.isconnected()))
            utime.sleep(3)
        
        else:
            print("wifi is connected")

#connect_to_wifi()

button1.irq(trigger= Pin.IRQ_FALLING, handler=on_button)
button2.irq(trigger= Pin.IRQ_FALLING, handler=off_button)
# button3.irq(trigger= Pin.IRQ_FALLING, handler=calibrate_min)
# button4.irq(trigger= Pin.IRQ_FALLING, handler=calibrate_max)
# button5.irq(trigger= Pin.IRQ_FALLING, handler=new_off)

#_thread.start_new_thread(connect_to_wifi, ())

trigger = Pin(17, Pin.OUT)
echo = Pin(16, Pin.IN)
def ultra():
    trigger.low()
    utime.sleep_us(2)
    trigger.high()
    utime.sleep_us(5)
    trigger.low()
    while echo.value() == 0:
        signaloff = utime.ticks_us()
    while echo.value() == 1:
        signalon = utime.ticks_us()
    timepassed = signalon - signaloff
    distance = (timepassed * 0.0343) / 2
#     print("The distance from object is ",distance,"cm")
    return distance


# connect to wifi
lcd.move_to(4,0)
lcd.putstr('Welcome')
lcd.move_to(0,1)
lcd.putstr('Wifi Connecting')

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
#wlan.connect("Nikallode24g","nikallode")
wlan.connect(ssid,password)
utime.sleep(3)

try:
    lcd.clear()
    lcd.move_to(0,1)
    lcd.putstr("wifi: "+str(wlan.isconnected()))
    print(wlan.isconnected())
except:
    lcd.clear()
    lcd.move_to(0,1)
    lcd.putstr('No PC')

wait_time=0
global water_percentage
water_percentage=0

filtered_data = 100
while True:
    
    #reading = analog_value.read_u16()
    reading = ultra()
    filtered_data = (0.95*filtered_data)+(0.05*reading)
    print("filtered ultrasonic data : ",filtered_data)
    print(pump_flag == str(pump.value()))
    if(not (pump_flag == str(pump.value()))):
        lcd.move_to(0,1)
        lcd.putstr('Pump: '+pump_flag+'    ')
    
    if(wait_time>100):
        water_percentage
        try:
            global water_percentage
            water_percentage = (filtered_data-min_point)/(max_point-min_point)*100
        except:
            print("divided by zero")
            lcd.clear()
            lcd.move_to(0,0)
            lcd.putstr('  Calibration  ')
            lcd.move_to(0,1)
            lcd.putstr('   Required   ')
            utime.sleep(5)
        
        # print data on lcd
        lcd.clear()
        lcd.move_to(0,0)
        lcd.putstr('Water Level:'+str(round(water_percentage , 1)))
#         lcd.move_to(0,1)
#         lcd.putstr(str((filtered_data-min)/(max-min)*100)+"%")
        print(pump_flag)
        
        print("min"+str(min_point))
        print("max"+str(max_point))
        
        #pump logic
        if(water_percentage>=95):
            pump.off()
            pump_flag="off"
            #lcd.putstr("pump off")
        if(water_percentage<20):
            pump.on()
            pump_flag="on"
            #lcd.putstr("pump off")
        
        lcd.move_to(0,1)
        lcd.putstr("Pump: "+str(pump_flag))
        # send network request
        try:
            print("wifi: "+str(wlan.isconnected()))

#             requests.post("https://ntfy.sh/water_level",
#                                 data=str((filtered_data-min)/(max-min)*100),
#                                 headers={
#                                     "Title": "water level: "+str((filtered_data-min)/(max-min)*100)+"%",
#                                     "Priority": "5",
#                                     "Tags": "rotating_light",
#                                     })
            if (not wlan.isconnected()):
                wlan.connect(ssid,password)
                print("connecting to wifi")
                utime.sleep(2)

            post_data = ujson.dumps({"slno":"1234", "lastLevel":water_percentage, "pumpState":pump.value()})
            res=requests.post("https://dull-erin-donkey-garb.cyclic.app/water_level/1234",
                                data=post_data,
                                headers={
                                    'content-type': 'application/json',
                                    })
            
            print(res.text)
            print("Level detected, notification sent")
            utime.sleep(5)
        except:
            print("error in post request")
            #wlan.connect("Hello","helloSudhanshu")
            utime.sleep(5)
            
        wait_time=0
#         print('time reset')
    else:
        wait_time=wait_time+1
#         print('wait_time+1')
    #print("Filtered: ",filtered_data)
    #print("Percentage: ",(filtered_data-min)/(max-min)*100)
    utime.sleep(0.1)
 
