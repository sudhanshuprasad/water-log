import IdInput from '@/components/IdInput'
import Navbar from '@/components/Navbar'
import React from 'react'

const DeviceHome = () => {
    return (
        <>
            <Navbar />
            <div className='flex items-center justify-center h-screen'>
                <h1 className='justify-center items-center'>
                    Please go to and scan the QR on your device
                    <br />
                    <div className='items-center'>OR</div>
                    <br />
                    <IdInput />
                </h1>
            </div>
        </>

    )
}

export default DeviceHome
