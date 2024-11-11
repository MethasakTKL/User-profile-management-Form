import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";

interface ProfileformProps {
  onSubmit: (data: FormData) => void;
}
interface FormData {
  name: string;
  lastName: string;
  email: string;
  gender: string;
  hobbies: string[];
  status: string;
  note: string;
  confirmPDPA: boolean;
}

export default function ProfileForm({ onSubmit }: ProfileformProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    lastName: "",
    email: "",
    gender: "",
    hobbies: [],
    status: "",
    note: "",
    confirmPDPA: false,
  });

  const handleReset = () => {
    setFormData({
      name: "",
      lastName: "",
      email: "",
      gender: "",
      hobbies: [],
      status: "",
      note: "",
      confirmPDPA: false,
    });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({
      ...prev,
      status: e.target.value as string,
    }));
  };

  const handleHobbyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      hobbies: checked
        ? [...prev.hobbies, value] // if checked
        : prev.hobbies.filter((hobby) => hobby !== value), // not checked
    }));
  };
  return (
    <Box sx={{ minWidth: "400px" }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Profile management
      </Typography>

      <Paper sx={{ margin: 2, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              id="lastname"
              name="lastName"
              label="Lastname"
              variant="outlined"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid size={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="confirmPDPA"
                  checked={formData.confirmPDPA}
                  onChange={handleInputChange}
                />
              }
              label="ConfirmPDPA"
            />
          </Grid>

          <Grid size={6}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
              >
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={6}>
            <FormControl>
              <FormLabel>Hobby</FormLabel>
              <RadioGroup row name="gender-radio-buttons-group">
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value="Game"
                      checked={formData.hobbies.includes("Game")}
                      onChange={handleHobbyChange}
                    />
                  }
                  label="Game"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value="Music"
                      checked={formData.hobbies.includes("Music")}
                      onChange={handleHobbyChange}
                    />
                  }
                  label="Music"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value="Craft"
                      checked={formData.hobbies.includes("Craft")}
                      onChange={handleHobbyChange}
                    />
                  }
                  label="Craft"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      name="hobbies"
                      value="Reading"
                      checked={formData.hobbies.includes("Reading")}
                      onChange={handleHobbyChange}
                    />
                  }
                  label="Reading"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select
                label="Status"
                value={formData.status}
                onChange={handleSelectChange}
              >
                <MenuItem value={"Single"}>Single</MenuItem>
                <MenuItem value={"Married"}>Married</MenuItem>
                <MenuItem value={"Divorce"}>Divorce</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <TextField
              fullWidth
              id="note"
              name="note"
              label="Note"
              variant="outlined"
              value={formData.note}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid container size={12} sx={{ justifyContent: "flex-end" }}>
            <Stack spacing={1} direction="row">
              <Button variant="contained" onClick={handleReset}>
                Reset
              </Button>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
