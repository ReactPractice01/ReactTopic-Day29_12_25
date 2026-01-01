import React, { useEffect } from 'react'

function PropsCounter({count}) {
const HandleCount = () => {
        console.log("hanleCounter called")
    }

    useEffect(()=>{
        HandleCount();
    },[])

    
  return (
    <div>
        <h1>PropsCounter Value : {count}</h1>
    </div>
  )
}

export default PropsCounter