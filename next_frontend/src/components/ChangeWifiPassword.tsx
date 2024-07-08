import { setWiFiPassword } from '@/service/changeWiFiPassword'
import { Button, Stack, TextField } from '@mui/material'
import React from 'react'

const ChangeWifiPassword = () => {

    const handleSubmit = () => {
        const data:any = setWiFiPassword(12345, "Hello", "sudhanshU")
        console.log("submited")
    }

    return (
        <>
            <div className='flex items-center justify-center mb-6'>

                <Stack
                    component="form"
                    sx={{
                        width: '25ch',
                    }}
                    spacing={2}
                    noValidate
                    autoComplete="off"
                >

                    <TextField
                        label="Wifi Name (SSID)"
                        id="filled-hidden-label-small"
                        defaultValue="My WiFi"
                        variant="filled"
                    />

                    <TextField
                        label="Wifi Password"
                        id="filled-hidden-label-normal"
                        defaultValue="Password"
                        variant="filled"
                        type='password'
                    />

                    <div className="text-center m-5">
                        <Button onClick={handleSubmit} className='w-40 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Update</Button>
                    </div>

                </Stack>

            </div>
        </>
    )
}

export default ChangeWifiPassword
