import { randomInt } from 'crypto'
import { useEffect, useState } from 'react'

const GroundWater = (props: { level: number }) => {

    return (
        <div className='text-center m-6'>
            The water requirment should be {props.level} liters
        </div>
    )
}

export default GroundWater
