import React, {useState} from "react"
import Select from 'react-select'

export default function Predict(){
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [BMI, setBMI] = useState(0)
    const [sex, setSex] = useState('')

    const handleSubmit = (e) =>{
        alert('Submitted: ' + name + ', ' + age + ', ' + weight + ', ' + BMI + ', ' + sex.value)
    }

    return(
        <>
        <h1>Predict</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Name: </label>
            <input type="text" value={name} required onChange={(e) => {setName(e.target.value)}}/><br/>

            <label>Age: </label>
            <input type="number" value={age} required onChange={(e) => {setAge(e.target.value)}}/><br/>

            <label>Weight: </label>
            <input type="number" step="0.01" value={weight} required onChange={(e) => {setWeight(e.target.value)}}/><br/>

            <label>BMI: </label>
            <input type="number" step="0.01" value={BMI} required onChange={(e) => {setBMI(e.target.value)}}/><br/>

            <label>Sex: </label>
            <Select value={sex} onChange={(e) => {setSex(e)}}
            options={[{value: 'male', label:'Male'}, {value:'female', label:'Female'}]} /><br/>
            <input type="submit" value="Submit"/>
        </form>
        </>
    )
}