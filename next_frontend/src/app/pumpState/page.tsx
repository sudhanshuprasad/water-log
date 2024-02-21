import React from 'react'

const PumpState = (props:{state:boolean}) => {
    // console.log(props.state)
  return (
    <div className='text-center'>
      pump is {props.state?"on":"off"}
    </div>
  )
}

export default PumpState
