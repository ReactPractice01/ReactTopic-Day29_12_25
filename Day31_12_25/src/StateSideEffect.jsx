import React, { useEffect, useState } from 'react'

function StateSideEffect() {

    const [count, setCount]= useState(0);
    const [duoble, setDuoble]= useState(0);

    function onceCall(){
        console.log("Called Once");
    }

    function everyCall(){
        console.log("Called Every Time");
    }


    useEffect(()=>{
        onceCall();
    },[]);

    useEffect(()=>{
        everyCall();
    },[duoble]);
  return (
    <div>
        <h1>UseEffect Hook</h1>
        <button onClick={()=>(setCount(count+1))}>Count {count}</button>
        <button onClick={()=>(setDuoble(duoble+2))}>Duoble {duoble}</button>
    </div>
  )
}

export default StateSideEffect