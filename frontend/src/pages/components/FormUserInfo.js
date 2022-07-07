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

export default function FormUserInfo({ formData, setFormData, step, setStep }) {
  const goNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          goNext(e);
        }}
      >
        <label className="font-control">Name: </label>
        <center>
          <TextField
            required
            fullWidth
            label="Required"
            variant="outlined"
            style={{ width: "300px", marginTop: "20px", marginBottom: "30px" }}
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
            }}
          />
        </center>
        <label className="font-control">Age: </label>
        <center>
          <TextField
            required
            type="number"
            label="Required"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">years</InputAdornment>
              ),
            }}
            style={{ width: "150px", marginTop: "20px", marginBottom: "30px" }}
            value={formData.age}
            onChange={(e) => {
              setFormData({ ...formData, age: e.target.value });
            }}
          />
        </center>
        <label className="font-control">Height: </label>
        <center>
          <TextField
            required
            type="number"
            label="Required"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">cm</InputAdornment>
              ),
            }}
            style={{ width: "150px", marginTop: "20px", marginBottom: "30px" }}
            step="0.01"
            value={formData.height}
            onChange={(e) => {
              setFormData({ ...formData, height: e.target.value });
            }}
          />
        </center>
        <label className="font-control">Weight: </label>
        <center>
          <TextField
            required
            type="number"
            label="Required"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">kg</InputAdornment>
              ),
            }}
            style={{ width: "150px", marginTop: "20px", marginBottom: "30px" }}
            step="0.01"
            value={formData.weight}
            onChange={(e) => {
              setFormData({ ...formData, weight: e.target.value });
            }}
          />
        </center>
        <label className="font-control">Sex: </label>
        <center>
          <FormControl>
            <RadioGroup
              row
              name="Gender"
              value={formData.sex}
              style={{ marginTop: "20px", marginBottom: "30px" }}
              onChange={(e) => {
                setFormData({ ...formData, sex: e.target.value });
              }}
            >
              <FormControlLabel
                value="0"
                control={<Radio required={true} />}
                label="Male"
              />
              <FormControlLabel
                value="1"
                control={<Radio required={true} />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </center>
        <Button
          type="submit"
          variant="outlined"
          style={{ width: "150px", marginBottom: "100px" }}
        >
          Next
        </Button>
      </form>
    </>
  );
}
