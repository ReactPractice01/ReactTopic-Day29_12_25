import React, { useEffect, useState } from 'react'

function Clock({bgColor='black'}) {

    const [time,setTime] = useState(0);

    useEffect(()=>{
        setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000);
    }),[];
  return (
    <div>
        <h3>Digital Clock in React Js</h3>
        <h1 style={{
          backgroundColor:bgColor,
          width:'10rem',
          padding:'1rem',
          color:'goldenrod',
          borderRadius:'1rem'
        }}>{time}</h1>
        <p>{bgColor}</p>
    </div>
  )
}

export default Clock