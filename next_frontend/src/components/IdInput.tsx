import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { useRouter } from 'next/navigation';

const IdInput = () => {

    const [slno, setSlno] = useState('0')

    const router = useRouter()

    return (
        <div className='text-center m-4 mt-10'>
            Enter your Device Id
            <br />
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
                        label="Device Id"
                        id="filled-hidden-label-small"
                        defaultValue="12345"
                        variant="filled"
                        onChange={(e)=>{setSlno(e.target.value);}}
                    />

<div className='text-center m-2'>
            <Button onClick={()=>{router.push(`/device/${slno}`)}} className='w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                Go
            </Button>
        </div>

                </Stack>

            </div>
        </div>
    )
}

export default IdInput
