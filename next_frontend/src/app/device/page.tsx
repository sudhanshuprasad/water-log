import IdInput from '@/components/IdInput'
import Navbar from '@/components/Navbar'
import React from 'react'

const DeviceHome = () => {
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center h-screen'>
                <h1 className=''>
                    Please go to and scan the QR on your device
                    <br />
                    OR
                    <br />
                    <IdInput />
                </h1>
            </div>
        </>

    )
}

export default DeviceHome
