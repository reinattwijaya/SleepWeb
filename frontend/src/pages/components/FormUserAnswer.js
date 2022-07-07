import {
  TextField,
  InputAdornment,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import axios from "axios";

export default function FormUserAnswer({
  formData,
  setFormData,
  step,
  setStep,
  setInsomniaResult,
  setOSAResult,
  setCOMISAResult,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step + 1);
    const BMI =
      Math.round(
        (formData.weight / (formData.height * formData.height)) * 1000000
      ) / 100;
    console.log(BMI);
    const form_data = {
      name: formData.name,
      sex: formData.sex,
      age: formData.age,
      BMI: BMI,
      PSG_C6: formData.PSG_C6,
      ISI1a: formData.ISI1a,
      ISI1b: formData.ISI1b,
      ISI1c: formData.ISI1c,
    };
    let baseUrl = "http://127.0.0.1:8000/predict/";
    axios.post(baseUrl + "insomnia/", form_data).then((res) => {
      console.log(res);
      console.log(res.data);
      setInsomniaResult(
        Math.round(res.data["insomnia_probability"][1] * 10000) / 100
      );
    });
    axios.post(baseUrl + "osa/", form_data).then((res) => {
      console.log(res);
      console.log(res.data);
      setOSAResult(Math.round(res.data["osa_probability"][1] * 10000) / 100);
    });
    axios.post(baseUrl + "comisa/", form_data).then((res) => {
      console.log(res);
      console.log(res.data);
      setCOMISAResult(
        Math.round(res.data["comisa_probability"][1] * 10000) / 100
      );
    });

    axios.post(baseUrl + "upload/", form_data).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="font-control">
          During the past month, how often have you taken medicine to help you
          sleep (prescribed or over the counter)
        </label>
        <center>
          <FormControl required>
            <RadioGroup
              row
              name="PSG_C6"
              value={formData.PSG_C6}
              style={{ marginTop: "20px", marginBottom: "30px" }}
              onChange={(e) => {
                setFormData({ ...formData, PSG_C6: e.target.value });
              }}
            >
              <FormControlLabel
                value="0"
                control={<Radio required={true} />}
                label="Not during the past month"
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="Less than once a week"
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="Once or twice a week"
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="Three or more times a week"
              />
            </RadioGroup>
          </FormControl>
        </center>
        <label className="font-control">
          Please rate the <i>current</i> <b>(last 2 weeks)</b> severity of your
          difficulty falling asleep
        </label>
        <center>
          <FormControl required>
            <RadioGroup
              row
              name="ISI1a"
              value={formData.ISI1a}
              style={{ marginTop: "20px", marginBottom: "30px" }}
              onChange={(e) => {
                setFormData({ ...formData, ISI1a: e.target.value });
              }}
            >
              <FormControlLabel
                value="0"
                control={<Radio required={true} />}
                label="None"
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="Mild"
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="Moderate"
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="Severe"
              />
            </RadioGroup>
          </FormControl>
        </center>
        <label className="font-control">
          Please rate the <i>current</i> <b>(last 2 weeks)</b> of your
          difficulty staying asleep
        </label>
        <center>
          <FormControl>
            <RadioGroup
              row
              name="ISI1b"
              value={formData.ISI1b}
              style={{ marginTop: "20px", marginBottom: "30px" }}
              onChange={(e) => {
                setFormData({ ...formData, ISI1b: e.target.value });
              }}
            >
              <FormControlLabel
                value="0"
                control={<Radio required={true} />}
                label="None"
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="Mild"
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="Moderate"
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="Severe"
              />
            </RadioGroup>
          </FormControl>
        </center>
        <label className="font-control">
          Please rate the <i>current</i> <b>(last 2 weeks)</b> of your problems
          waking up too early
        </label>
        <center>
          <FormControl required>
            <RadioGroup
              row
              name="ISI1c"
              value={formData.ISI1c}
              style={{ marginTop: "20px", marginBottom: "30px" }}
              onChange={(e) => {
                setFormData({ ...formData, ISI1c: e.target.value });
              }}
            >
              <FormControlLabel
                value="0"
                control={<Radio required={true} />}
                label="None"
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="Mild"
              />
              <FormControlLabel
                value="2"
                control={<Radio required={true} />}
                label="Moderate"
              />
              <FormControlLabel
                value="3"
                control={<Radio required={true} />}
                label="Severe"
              />
            </RadioGroup>
          </FormControl>
        </center>
        <Button
          type="button"
          variant="outlined"
          style={{ width: "150px", marginBottom: "100px" }}
          onClick={() => {
            setStep(step - 1);
          }}
        >
          Prev
        </Button>
        <Button
          style={{ marginLeft: "20px", width: "150px", marginBottom: "100px" }}
          type="submit"
          variant="outlined"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
