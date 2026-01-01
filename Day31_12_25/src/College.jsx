import React from 'react'
import StudentComp from './StudentComp'

function College({ college }) {
  
    return (
        <div style={{
            border: '1px solid grey',
            padding: '1rem',
            margin: '1rem',
            borderRadius: '0.25rem',
            backgroundColor: 'lightgray',


        }}>
            <h2>College Name : {college.name}</h2>
            <ul>
                <li><h4>City : {college.city}</h4></li>
                <li><h4>Website : {college.website}</h4></li>
                <li>
                 <StudentComp student = {college.student}/>
                </li>
            </ul>
        </div>
    )
}

export default College