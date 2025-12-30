import React, { useState } from 'react'
import Clock from './Clock'

function HandleClock() {
    const [color,setColor] = useState('grey');
  return (
    <div>
        <Clock bgColor={color}/>

        <select name="" id="" defaultValue={'grey'} onChange={(e) =>setColor(e.target.value)}>
            <option value="black">Black</option>
            <option value="grey">Grey</option>
            <option value="green">Green</option>
        </select>
    </div>
  )
}

export default HandleClock