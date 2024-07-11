import IdInput from '@/components/IdInput'
import React from 'react'

const DeviceHome = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <h1 className=''>
                Please go to and scan the QR on your device
                <br />
                OR
                <br />
                <IdInput/>
            </h1>
        </div>
    )
}

export default DeviceHome
