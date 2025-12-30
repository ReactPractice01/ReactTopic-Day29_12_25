import React, { useState } from 'react'

function GetValueAndClearValue() {
  const [value,setValue] = useState();
  return (
    <div>
      <h1>Get Input field Value</h1>
      <input type="text" value={value} onChange={(event) =>  setValue(event.target.value)} placeholder='Enter value'/> 
      <button onClick={()=>{setValue('')}}>clear</button>
      <h2>{value}</h2>
    </div>
  )
}

export default GetValueAndClearValue;