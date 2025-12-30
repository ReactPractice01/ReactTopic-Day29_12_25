import { useState } from "react";

function SkillsCheckbox(){
    const [skills,setSkills] = useState([]);

    function handleSkills(event){
        console.log(event.target.value,event.target.checked);
        if(event.target.checked === true){
             setSkills([...skills,event.target.value]);
        }
        else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
       
    }
    return (<div>
            <h1>Handle Chackboc in React js</h1>
            <h3>Select Your Skills</h3>

            <input onChange={handleSkills} type="checkbox" name="" id="js" value={'js'} />
            <label htmlFor="js">js</label>
               < br /><br />
            <input onChange={handleSkills} type="checkbox" name="" id="PhP" value={'PhP'}/>
            <label htmlFor="PhP">PhP</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" name="" id="java" value={'java'}/>
            <label htmlFor="java">java</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" name="" id="Python" value={'Python'}/>
            <label htmlFor="Python">Python</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" name="" id="c++" value={'c++'}/>
            <label htmlFor="c++">c++</label>
            <br /><br />
            <input onChange={handleSkills} type="checkbox" name="" id="sql" value={'sql'}/>
            <label htmlFor="sql">sql</label>
            <br /><br />

            
            <h2>Your Skills</h2>
            <h3>{skills.toString()}</h3>
    </div>)
}

export default SkillsCheckbox;