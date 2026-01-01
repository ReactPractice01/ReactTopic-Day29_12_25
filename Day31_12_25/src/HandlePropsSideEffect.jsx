import React, { useState } from 'react'
import PropsCounter from './PropsCounter'

function HandlePropsSideEffect() {

    const [count,  setCount] = useState(0);
  return (
    <div>

        <PropsCounter count = {count}/>

        <button onClick={() =>{setCount(count+1)}}>Counter</button>
    </div>
  )
}

export default HandlePropsSideEffect