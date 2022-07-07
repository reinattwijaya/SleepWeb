import React, { useState } from "react";
import "./static/predict.css";
import FormUserInfo from "./components/FormUserInfo";
import FormUserAnswer from "./components/FormUserAnswer";
import Result from "./components/Result";
// import Select from 'react-select'

export default function Predict() {
  const [formData, setFormData] = useState({
    name: "",
    sex: "",
    age: 0,
    height: 0,
    weight: 0,
    PSG_C6: 0,
    ISI1a: 0,
    ISI1b: 0,
    ISI1c: 0,
  });

  //steps
  const [step, setStep] = useState(0);

  //result
  const [insomniaResult, setInsomniaResult] = useState(0.0);
  const [OSAResult, setOSAResult] = useState(0.0);
  const [COMISAResult, setCOMISAResult] = useState(0.0);

  const PageDisplay = () => {
    if (step === 0) {
      return (
        <>
          <FormUserInfo
            formData={formData}
            setFormData={setFormData}
            step={step}
            setStep={setStep}
          />
        </>
      );
    } else if (step === 1) {
      return (
        <>
          <FormUserAnswer
            formData={formData}
            setFormData={setFormData}
            step={step}
            setStep={setStep}
            setInsomniaResult={setInsomniaResult}
            setOSAResult={setOSAResult}
            setCOMISAResult={setCOMISAResult}
          />
        </>
      );
    } else {
      return (
        <Result
          insomniaResult={insomniaResult}
          OSAResult={OSAResult}
          COMISAResult={COMISAResult}
        />
      );
    }
  };

  return (
    <>
      <center>
        {step === 2 ? <></> : <h1>Predict</h1>}
        {PageDisplay()}
      </center>
    </>
  );
}

//select option
/* <Select value={sex} onChange={(e) => {setSex(e)}}
options={[{value: 'male', label:'Male'}, {value:'female', label:'Female'}]} /><br/> */
