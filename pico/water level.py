import machine
import utime
import _thread
import network
from pico_i2c_lcd import I2cLcd
from machine import I2C
import urequests as requests
import ujson

min=10310
max=11957

pump = machine.Pin(15, machine.Pin.OUT)
pump.off()
analog_value = machine.ADC(28)
filtered_data = analog_value.read_u16()

#_thread.start_new_thread(second_thread, ())

i2c = I2C(id=0,scl=machine.Pin(1),sda=machine.Pin(0),freq=100000)
lcd = I2cLcd(i2c, 0x27, 2, 16)

# connect to wifi
lcd.move_to(4,0)
lcd.putstr('Welcome')
lcd.move_to(0,1)
lcd.putstr('Wifi Connecting')

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("Nikallode24g","nikallode")
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

while True:
    reading = analog_value.read_u16()     
    filtered_data = (0.99*filtered_data)+(0.01*reading)
    #print("ADC: ",reading)
    
    if(wait_time>100):
        
        water_percentage = (filtered_data-min)/(max-min)*100
        # print data on lcd
        lcd.clear()
        lcd.move_to(0,0)
        lcd.putstr('Water Level:'+str(round(water_percentage, 1)))
#         lcd.move_to(0,1)
#         lcd.putstr(str((filtered_data-min)/(max-min)*100)+"%")
        
        #pump logic
        if(water_percentage>=40):
            pump.off()
            #lcd.putstr("pump off")
        if(water_percentage<20):
            pump.on()
            #lcd.putstr("pump off")
        
        lcd.move_to(0,1)
        lcd.putstr("pump: "+str(pump.value()))
        # send network request
        try:
#             requests.post("https://ntfy.sh/water_level",
#                                 data=str((filtered_data-min)/(max-min)*100),
#                                 headers={
#                                     "Title": "water level: "+str((filtered_data-min)/(max-min)*100)+"%",
#                                     "Priority": "5",
#                                     "Tags": "rotating_light",
#                                     })

            post_data = ujson.dumps({"slno":"1234", "lastLevel":water_percentage, "pumpState":pump.value()})
            res=requests.post("https://dull-erin-donkey-garb.cyclic.app/water_level/1234",
                                data=post_data,
                                headers={
                                    'content-type': 'application/json',
                                    })
            
            print(res.text)
            print("Level detected, notification sent")
            utime.sleep(8)
        except:
            print("error in post request")
            utime.sleep(5)
            
        wait_time=0
    else:
        wait_time=wait_time+1
        
    print("Filtered: ",filtered_data)
    print("Percentage: ",(filtered_data-min)/(max-min)*100)
    utime.sleep(0.1)
