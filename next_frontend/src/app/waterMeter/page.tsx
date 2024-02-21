"use client"
import { CircularProgress } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const WaterMeter = (props:{waterLevel:number}) => {

    // let deviceID = 1234
    // let url = `/water_level/${deviceID}`
    // // let url = `https://www.google.com`
    // const [waterLevel, setWaterLevel] = useState(0)


    // useEffect(() => {

    //     fetch(url, {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setWaterLevel(data?.lastLevel)
    //             console.log(parseFloat(waterLevel.toFixed(2)))
    //         })
    //         .catch(error => console.error('Error:', error));


    //     const timeoutId = setInterval(() => {
    //         console.log("Hello, World!");

    //         fetch(url, {
    //             method: 'GET',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Access-Control-Allow-Origin': '*',
    //             }
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data)
    //                 setWaterLevel(data?.lastLevel)
    //                 console.log(parseFloat(waterLevel.toFixed(2)))
    //             })
    //             .catch(error => console.error('Error:', error));
    //         // const data= getWaterLevel(1234)
    //         // console.log("water level "+data)
    //         // setWaterLevel(data)

    //     }, 20000);

    //     return () => {
    //         console.log("return use effect")
    //         // clearInterval(timeoutId);
    //     }
    // }, [setWaterLevel]);


    return (
        <div>
            <CircularProgress
                classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/10",
                    value: "text-3xl font-semibold text-white",
                }}
                label="Water Level"
                size="lg"
                value={parseFloat(props.waterLevel.toFixed(2))}
                color="success"
                // formatOptions={{ style: "unit", unit: "%" }}
                showValueLabel={true}
            />
        </div>
    )
}

export default WaterMeter
