import React, { useState } from 'react'

function ControlledCom() {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const [email,setEmail] = useState('');
  return (
    <div>
        <h1>Controlled Component</h1>
        <form action="">
            <input type="text" name="" id="" value={name} placeholder='Enter Name' onChange={(event)=>setName(event.target.value)} />
            <br /><br />
            <input type="password" name="" id="" value={password} placeholder='Enter Password' onChange={(event)=>setPassword(event.target.value)} />
            <br /><br />
            <input type="text" name="" id="" value={email} placeholder='Enter Email' onChange={(event)=>setEmail(event.target.value)} />
            <br /><br />
            <button>submit</button>
            <button onClick={()=>{
                setEmail('')
                setName('')
                setPassword('')
            }}>Clear</button>
            <h2>{name}</h2>
            <h2>{password}</h2>
            <h2>{email}</h2>
        </form>
    </div>
  )
}

export default ControlledCom