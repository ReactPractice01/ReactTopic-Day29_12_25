import React, { useState } from 'react'

function HandleRadioBtnAndDropdown() {
    const [gender,setGender] = useState();
    const [city,setCity] = useState();
    const handelGender = (event)=>{
        setGender(event.target.value);
    }
  return (
    <div>
        // Radio btn
        <h4>select Gender</h4>
        <input type="radio" value={"male"} name='gender' id='male' onChange={handelGender} checked={gender==='male'}/>
        <label htmlFor="male">Male</label>
        <input type="radio" value={"female"} name='gender' id='female' onChange={handelGender} checked={gender === 'female'} />
        <label htmlFor="female">Female</label>
        <h2>{gender}</h2>

        <br /><br />

        <select name="" id="" defaultValue="delhi" onChange={(e)=>setCity(e.target.value)} >
            <option value="noida">Noida</option>
            <option value="pune">Pune</option>
            <option value="delhi">Delhi</option>
            <option value="mumbai">Mumbai</option>
            <option value="patna">Patna</option>
        </select>

        <h3>City : {city}</h3>

    </div>
  )
}

export default HandleRadioBtnAndDropdown