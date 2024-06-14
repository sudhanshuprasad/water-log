"use client"
import { CircularProgress } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const WaterMeter = (props: any) => {

    return (
        <div className='text-center m-4 mb-5'>
            <CircularProgress
                classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/20",
                    value: "text-3xl font-semibold text-white",
                }}
                // label="Water Level"
                size="lg"
                value={parseFloat(props.waterLevel?.toFixed(2))}
                color="default"
                // formatOptions={{ style: "unit", unit: "%" }}
                showValueLabel={true}
            />
            <div>Water Level</div>

        </div>
    )
}

export default WaterMeter
