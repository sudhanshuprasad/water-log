import React from 'react'
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';

const Save = (props: { deviceId: number }) => {
    return (
        <div className='text-center m-2'>
            <Button className='w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                <SaveIcon />
            </Button>
        </div>
    )
}

export default Save
