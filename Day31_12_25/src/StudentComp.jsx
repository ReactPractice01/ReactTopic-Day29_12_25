import React from 'react'

function StudentComp({student}) {
    
  return (
    
    <div>
           <h3>Students :</h3>
                    {student.map((studen,index) =>
                    (<ul key={index}>
                        <li><h4>Name : {studen.name}</h4></li>
                        <li><h5>Age : {studen.age}</h5></li>
                        <li><h5>Email : {studen.email}</h5></li>
                    </ul>
                    ))
                    }

    </div>
  )
}

export default StudentComp