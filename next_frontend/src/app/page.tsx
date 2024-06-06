"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { CircularProgress } from "@nextui-org/react";
import { clearInterval } from "timers";
import { getWaterLevel } from "@/service/api";
import WaterMeter from "../components/waterMeter";
import OnButton from "../components/pump/OnButtom";
import OffButton from "../components/pump/OffButtom";
import GroundWater from "../components/GroundWater";
import LastOnline from "../components/LastOnline";
import Navbar from "@/components/Navbar";


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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar/>
      <div>
        <WaterMeter waterLevel={waterLevel || 0} />
        {/* <PumpState state={pumpState}/> */}
        <LastOnline lastOnline={lastOnline} />
        <GroundWater level={50 + waterLevel / 50} />

        <OnButton />
        <OffButton />
        {/* <CircularProgress
      classNames={{
        svg: "w-36 h-36 drop-shadow-md",
        indicator: "stroke-white",
        track: "stroke-white/10",
        value: "text-3xl font-semibold text-white",
      }}
      label="Water Level"
      size="lg"
      value={parseFloat(waterLevel.toFixed(2))}
      color="success"
      // formatOptions={{ style: "unit", unit: "%" }}
      showValueLabel={true}
    /> */}
        {/* <Progress progress={waterLevel} background="#bbbbbb" subtitle="water level" /> */}
      </div>

      {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50 text-balance`}>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div> */}
    </main>
  );
}
