"use client"
import LastOnline from '@/components/LastOnline'
import Navbar from '@/components/Navbar'
import WaterMeter from '@/components/waterMeter'
import { getWaterlevel } from '@/service/getData/getData'
import React, { useEffect, useState } from 'react'

interface Props {
    params: { deviceId: number }
}

interface Data {
    lastLevel:number;
    lastOnline:string;
}

const Device = ({ params }: Props) => {

    const [waterLevel, setWaterLevel] = useState(0)
    const [lastOnline, setLastOnline] = useState("Never Online")
    const [pumpState, setPumpState] = useState(false)

    useEffect(()=>{
        const fetchData=async()=>{
            let data:any
            data = await getWaterlevel(params?.deviceId)
            // console.log("data: ",data)
            setWaterLevel(data?.lastLevel)
            setLastOnline(data?.lastOnline)
        }
        
        fetchData()
        setInterval(()=>{
            fetchData()
        },5000)
    },[])

    return (
        <div>
            <Navbar/>
            <WaterMeter waterLevel={waterLevel || 0} />
            <LastOnline lastOnline={lastOnline} />
        </div>
    )
}

export default Device