"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import WaterMeter from "../components/waterMeter";
import OnButton from "../components/pump/OnButtom";
import OffButton from "../components/pump/OffButtom";
import GroundWater from "../components/GroundWater";
import LastOnline from "../components/LastOnline";
import Navbar from "@/components/Navbar";
import PumpState from "@/components/pump/pumpState";


export default function Home() {

  let deviceID = 1234
  let url = `/water_level/${deviceID}`
  // let url = `https://www.google.com`
  const [waterLevel, setWaterLevel] = useState(0)
  const [lastOnline, setLastOnline] = useState("Never Online")
  const [pumpState, setPumpState] = useState(false)


  useEffect(() => {

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPumpState(data?.pumpState)
        setWaterLevel(data?.lastLevel)
        setLastOnline(data?.lastOnline)
        // console.log(parseFloat(waterLevel.toFixed(2)))
      })
      .catch(error => console.error('Error:', error));


    const timeoutId = setInterval(() => {
      // console.log("Hello, World!");

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setPumpState(data?.pumpState)
          setWaterLevel(data?.lastLevel)
          // console.log(parseFloat(waterLevel.toFixed(2)))
        })
        .catch(error => console.error('Error:', error));
      // const data= getWaterLevel(1234)
      // console.log("water level "+data)
      // setWaterLevel(data)

    }, 20000);

    return () => {
      console.log("return use effect")
      // clearInterval(timeoutId);
    }
  }, [setWaterLevel, setPumpState]);

  return (
    <main className="items-center justify-between">
      <Navbar />
      <div>
        <WaterMeter waterLevel={waterLevel || 0} />
        <LastOnline lastOnline={lastOnline} />

      </div>

    </main>
  );
}
