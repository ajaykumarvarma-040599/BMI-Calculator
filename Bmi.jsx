import React, { useState } from 'react'
import './Bmi.css'

const Bmi = () => {
    const [weight,setWeight] = useState('')
    const [height,setHeight] = useState('')
    const[value,setValue] = useState('')
    const[body,setBody] = useState('')

    function calculate(){
        const meter = height/100;
        const bmi = weight/(meter*meter);
        setValue(bmi.toFixed(2))

        if(bmi<18.5){
            setBody("UnderWeight")

        }
        else if (bmi >= 18.5 && bmi<29.5){
            setBody("Healthy")

        }
        else{
            setBody("OverWeight")
        }


    }

    const reload = ()=>{
        setWeight('')
        setHeight('')
        setValue('')
        setBody('')
    }

    return (
        <div className='container'>
            <div className="header">
               <h1>BMI Calculator</h1>
            </div>
            <div className="box">
                <span>Weight(Kg)</span>
                <input type='number' placeholder='Enter your Body weight' value={weight} onChange={(e) => {setWeight(e.target.value) }} />
                <span>Height(cm)</span>
                <input type="number" placeholder=" Enter your height in cm" value={height} onChange={(e)=>{setHeight(e.target.value)}} />
                <button onClick={()=>{calculate()}}>Calculate</button>
                <button onClick={reload}>Reload</button>
            </div>
            <div className="bmi">
                <p>Your BMI is : {value}</p>
                <p>You are {body}</p>
            </div>

        </div>
    )
}

export default Bmi;