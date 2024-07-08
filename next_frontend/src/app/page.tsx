"use client"

import { useEffect, useState } from "react";
import WaterMeter from "../components/waterMeter";
import LastOnline from "../components/LastOnline";
import Navbar from "@/components/Navbar";
import { Button } from "@nextui-org/react";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import IdInput from "@/components/IdInput";


export default function Home() {

  let deviceID = 1234
  let url = `/water_level/${deviceID}`
  // let url = `https://www.google.com`
  const [waterLevel, setWaterLevel] = useState(0)
  const [lastOnline, setLastOnline] = useState("Never Online")
  const [pumpState, setPumpState] = useState(false)


  // useEffect(() => {

  //   fetch(url, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Allow-Origin': '*',
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log(data)
  //       setPumpState(data?.pumpState)
  //       setWaterLevel(data?.lastLevel)
  //       setLastOnline(data?.lastOnline)
  //       // console.log(parseFloat(waterLevel.toFixed(2)))
  //     })
  //     .catch(error => console.error('Error:', error));


  //   const timeoutId = setInterval(() => {
  //     // console.log("Hello, World!");

  //     fetch(url, {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         console.log(data)
  //         setPumpState(data?.pumpState)
  //         setWaterLevel(data?.lastLevel)
  //         // console.log(parseFloat(waterLevel.toFixed(2)))
  //       })
  //       .catch(error => console.error('Error:', error));
  //     // const data= getWaterLevel(1234)
  //     // console.log("water level "+data)
  //     // setWaterLevel(data)

  //   }, 100000);

  //   return () => {
  //     console.log("return use effect")
  //     // clearInterval(timeoutId);
  //   }
  // }, [setWaterLevel, setPumpState]);

  return (
    <main className="items-center justify-between">
      <Navbar />
      <div>

        <IdInput/>

        {/* <WaterMeter waterLevel={waterLevel || 0} />
        <LastOnline lastOnline={lastOnline} /> */}

        <div className="text-center m-5">
          <LoginLink>
            <Button className='w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</Button>
          </LoginLink>
        </div>

        <div className="text-center m-5">
          <RegisterLink>
            <Button className='w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up</Button>
          </RegisterLink>
        </div>

      </div>

    </main>
  );
}
