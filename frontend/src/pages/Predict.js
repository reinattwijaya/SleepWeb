import React, {useState} from "react"
import axios from 'axios'
// import Select from 'react-select'

export default function Predict(){
    const [name, setName] = useState('')
    const [sex, setSex] = useState('')
    const [age, setAge] = useState(0)
    const [BMI, setBMI] = useState(0)
    const [PSG_C6, setPSG_C6] = useState(0)
    const [ISI1a, setISI1a] = useState(0)
    const [ISI1b, setISI1b] = useState(0)
    const [ISI1c, setISI1c] = useState(0)

    //result
    const [insomniaResult, setInsomniaResult] = useState(0.0)
    const [OSAResult, setOSAResult] = useState(0.0)
    const [COMISAResult, setCOMISAResult] = useState(0.0)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const form_data = {
            name: name,
            sex: sex,
            age: age,
            BMI: BMI,
            PSG_C6: PSG_C6,
            ISI1a: ISI1a,
            ISI1b: ISI1b,
            ISI1c: ISI1c,
        }
        let baseUrl = 'http://127.0.0.1:8000/predict/'
        axios.post(baseUrl+'insomnia/', form_data)
            .then(res =>{
                console.log(res)
                console.log(res.data)
                setInsomniaResult(Math.round(res.data['insomnia_probability'][res.data['is_insomnia']]*10000)/100)
            })
        axios.post(baseUrl+'osa/', form_data)
            .then(res =>{
                console.log(res)
                console.log(res.data)
                setOSAResult(Math.round(res.data['osa_probability'][res.data['is_osa']]*10000)/100)
            })
        axios.post(baseUrl+'comisa/', form_data)
            .then(res =>{
                console.log(res)
                console.log(res.data)
                setCOMISAResult(Math.round(res.data['comisa_probability'][res.data['is_comisa']]*10000)/100)
            })
        
        // axios.post(baseUrl+'upload/', form_data)
        //     .then(res =>{
        //         console.log(res)
        //     })
        
    }

    return(
        <>
        <center>
        <h1>Predict</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label>Name: </label><br/>
            <input type="text" value={name} required onChange={(e) => {setName(e.target.value)}}/><br/>

            <label>Sex: </label><br/>
            <table>
                <tr>
                <td><input name="gender" type="radio" value="0" onChange={(e) => {setSex(0)}}/>Male</td>
                <td><input name="gender" type="radio" value="1" onChange={(e) => {setSex(1)}}/>Female</td>
                </tr>
            </table>

            <label>Age: </label><br/>
            <input type="number" value={age} required onChange={(e) => {setAge(e.target.value)}}/><br/>
           
            <label>BMI: </label><br/>
            <input type="number" step="0.01" value={BMI} required onChange={(e) => {setBMI(e.target.value)}}/><br/>

            <label>During the past month, how often have you taken medicine to help you sleep (prescribed or "over the counter")?: </label><br/>
            <table>
                <tr>
                <td><input name="PSG_C6" type="radio" value="0" onChange={(e) => {setPSG_C6(0)}}/>Not during the past month</td>
                <td><input name="PSG_C6" type="radio" value="1" onChange={(e) => {setPSG_C6(1)}}/>Less than once a week</td>
                <td><input name="PSG_C6" type="radio" value="2" onChange={(e) => {setPSG_C6(2)}}/>Once or twice a week</td>
                <td><input name="PSG_C6" type="radio" value="3" onChange={(e) => {setPSG_C6(3)}}/>Three or more times a week</td>
                </tr>
            </table>

            <label>Please rate the CURRENT (i.e. LAST 2 WEEKS) SEVERITY of your difficulty falling asleep: </label><br/>
            <table>
                <tr>
                <td><input name="ISI1a" type="radio" value="0" onChange={(e) => {setISI1a(0)}}/>None</td>
                <td><input name="ISI1a" type="radio" value="1" onChange={(e) => {setISI1a(1)}}/>Mild</td>
                <td><input name="ISI1a" type="radio" value="2" onChange={(e) => {setISI1a(2)}}/>Moderate</td>
                <td><input name="ISI1a" type="radio" value="3" onChange={(e) => {setISI1a(3)}}/>Severe</td>
                <td><input name="ISI1a" type="radio" value="4" onChange={(e) => {setISI1a(4)}}/>Very Severe</td>
                </tr>
            </table>

            <label>Please rate the CURRENT (i.e. LAST 2 WEEKS) SEVERITY of your difficulty staying asleep: </label><br/>
            <table>
                <tr>
                <td><input name="ISI1b" type="radio" value="0" onChange={(e) => {setISI1b(0)}}/>None</td>
                <td><input name="ISI1b" type="radio" value="1" onChange={(e) => {setISI1b(1)}}/>Mild</td>
                <td><input name="ISI1b" type="radio" value="2" onChange={(e) => {setISI1b(2)}}/>Moderate</td>
                <td><input name="ISI1b" type="radio" value="3" onChange={(e) => {setISI1b(3)}}/>Severe</td>
                <td><input name="ISI1b" type="radio" value="4" onChange={(e) => {setISI1b(4)}}/>Very Severe</td>
                </tr>
            </table>

            <label>Please rate the CURRENT (i.e. LAST 2 WEEKS) SEVERITY of your problems waking up too early: </label><br/>
            <table>
                <tr>
                <td><input name="ISI1c" type="radio" value="0" onChange={(e) => {setISI1c(0)}}/>None</td>
                <td><input name="ISI1c" type="radio" value="1" onChange={(e) => {setISI1c(1)}}/>Mild</td>
                <td><input name="ISI1c" type="radio" value="2" onChange={(e) => {setISI1c(2)}}/>Moderate</td>
                <td><input name="ISI1c" type="radio" value="3" onChange={(e) => {setISI1c(3)}}/>Severe</td>
                <td><input name="ISI1c" type="radio" value="4" onChange={(e) => {setISI1c(4)}}/>Very Severe</td>
                </tr>
            </table>

            <input type="submit" value="Submit"/>
        </form>
        <br/><br/>
        <lable>RESULT:</lable>
        <br/>
        <h1>Insomnia: {insomniaResult}%</h1><br/>
        <h1>OSA: {OSAResult}%</h1><br/>
        <h1>COMISA: {COMISAResult}%</h1><br/>
        </center>
        </>
    )
}

//select option
/* <Select value={sex} onChange={(e) => {setSex(e)}}
options={[{value: 'male', label:'Male'}, {value:'female', label:'Female'}]} /><br/> */