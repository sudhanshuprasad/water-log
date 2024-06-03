"use client"
import { CircularProgress } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'

const WaterMeter = (props: any) => {

    return (
        <div>
            <CircularProgress
                classNames={{
                    svg: "w-36 h-36 drop-shadow-md",
                    indicator: "stroke-white",
                    track: "stroke-white/20",
                    value: "text-3xl font-semibold text-white",
                }}
                label="Water Level"
                size="lg"
                value={parseFloat(props.waterLevel.toFixed(2))}
                color="default"
                // formatOptions={{ style: "unit", unit: "%" }}
                showValueLabel={true}
            />
            <CircularProgress
                aria-label="Loading..."
                size="lg"
                value={parseFloat(props.waterLevel.toFixed(2))}
                color="warning"
                showValueLabel={true}
            />
        </div>
    )
}

export default WaterMeter
