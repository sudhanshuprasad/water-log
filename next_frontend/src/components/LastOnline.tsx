import React from 'react'

const LastOnline = (props: { lastOnline: string }) => {
    return (
        <div className='text-center m-4'>
            The device was last online at 
            <br/>
            {props.lastOnline}
        </div>
    )
}

export default LastOnline
