import machine
import utime
import _thread
import network
from pico_i2c_lcd import I2cLcd
from machine import I2C
import urequests as requests

min=10198
max=11650

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
wlan.connect("Hello","hello123")
utime.sleep(3)

try:
    lcd.clear()
    lcd.move_to(0,1)
    lcd.putstr(str(wlan.isconnected()))
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
        # print data on lcd
        lcd.clear()
        lcd.move_to(0,0)
        lcd.putstr('Water Level:')
        lcd.move_to(0,1)
        lcd.putstr(str((filtered_data-min)/(max-min)*100)+"%")
        
        # send network request
        try:
            requests.post("https://ntfy.sh/water_level",
                                data=str((filtered_data-min)/(max-min)*100),
                                headers={
                                    "Title": "water level: "+str((filtered_data-min)/(max-min)*100)+"%",
                                    "Priority": "5",
                                    "Tags": "rotating_light",
                                    })
            print("Level detected, notification sent")
        except:
            print("error in post request")
            #utime.sleep(2)
            
        wait_time=0
    else:
        wait_time=wait_time+1
        
    print("Filtered: ",filtered_data)
    print("Percentage: ",(filtered_data-min)/(max-min)*100)
    utime.sleep(0.1)

