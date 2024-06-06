import { Button } from '@nextui-org/react'
import React from 'react'

const OffButton = () => {
    // console.log(props.state)
  return (
    <div className='text-center m-2'>
      <Button className='w-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
        OFF
      </Button>
    </div>
  )
}

export default OffButton
