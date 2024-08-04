"use client"
import Save from '@/components/buttons/Save'
import LastOnline from '@/components/LastOnline'
import Navbar from '@/components/Navbar'
import OffButton from '@/components/pump/OffButtom'
import OnButton from '@/components/pump/OnButtom'
import PumpState from '@/components/pump/pumpState'
import WaterMeter from '@/components/waterMeter'
import { getWaterlevel } from '@/service/getData/getData'
import { Grid, Slider } from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
    params: { deviceId: number }
}

interface Data {
    lastLevel: number;
    lastOnline: string;
}

function valuetext(value: number) {
    return `${value}%`;
}

const marks = [
    {
        value: 0,
        label: '0%',
    },
    {
        value: 20,
        label: '20%',
    },
    {
        value: 80,
        label: '80%',
    },
    {
        value: 100,
        label: '100%',
    },
];

const Device = ({ params }: Props) => {

    const [waterLevel, setWaterLevel] = useState(0)
    const [lastOnline, setLastOnline] = useState("Never Online")
    const [pumpState, setPumpState] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            let data: any
            data = await getWaterlevel(params?.deviceId)
            // console.log("data: ",data)
            setWaterLevel(data?.lastLevel)
            setPumpState(data?.pumpState)
            if(typeof(data?.lastOnline) === "number"){
                setLastOnline(`${new Date().toString()}`.substring(0,15))
            }else{
                setLastOnline(data?.lastOnline)
            }
        }

        fetchData()
        setInterval(() => {
            fetchData()
        }, 5000)
    }, [])

    return (
        <div className=' bg-slate-500' style={{height:"100vh"}}>
            <Navbar />


            <Grid container spacing={2}>


                <Grid item xs={9}>

                    <WaterMeter waterLevel={waterLevel || 0} />
                    <PumpState state={pumpState} />
                    <LastOnline lastOnline={lastOnline} />
                    <OnButton />
                    <OffButton />

                    <Save deviceId={12345} />

                </Grid>


                <Grid item xs={3}>
                    <div className='mt-5' style={{ height: "90%" }}>
                        <Slider
                            getAriaLabel={() => 'Temperature'}
                            orientation="vertical"
                            getAriaValueText={valuetext}
                            defaultValue={[20, 80]}
                            valueLabelDisplay="auto"
                            marks={marks}
                        />
                    </div>
                </Grid>


            </Grid>

        </div>
    )
}

export default Device