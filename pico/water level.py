import machine
import utime
import _thread
import network
import urequests as requests

min=10198
max=11650

analog_value = machine.ADC(28)
filtered_data = analog_value.read_u16()

#_thread.start_new_thread(second_thread, ())

wlan = network.WLAN(network.STA_IF)
wlan.active(True)
wlan.connect("Hello","hello123")
utime.sleep(3)

print(wlan.isconnected())

wait_time=0

while True:
    reading = analog_value.read_u16()     
    filtered_data = (0.999*filtered_data)+(0.001*reading)
    #print("ADC: ",reading)
    
    if(wait_time>100):
        try:
            requests.post("https://ntfy.sh/water_level",
                                data=str((filtered_data-min)/(max-min)*100),
                                headers={
                                    "Title": "water level: "+str((filtered_data-min)/(max-min)*100)+"%",
                                    "Priority": "5",
                                    "Tags": "rotating_light",
                                    })
            print("Movement detected, notification sent")
        except:
            print("error in post request")
            utime.sleep(5)
            
        wait_time=0
    else:
        wait_time=wait_time+1
        
    print("Filtered: ",filtered_data)
    print("Percentage: ",(filtered_data-min)/(max-min)*100)
    utime.sleep(0.02)
