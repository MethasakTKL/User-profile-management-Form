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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function ProfileForm() {
  return (
    <Box sx={{minWidth: "400px"}}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Profile management
      </Typography>

      <Paper sx={{ margin: 3, padding: 2, }}>
        <Grid container spacing={2}>
          <Grid size={6}>
            <TextField fullWidth id="name" label="Name" variant="outlined" />
          </Grid>
          <Grid size={6}>
            <TextField
              fullWidth
              id="lastname"
              label="Lastname"
              variant="outlined"
            />
          </Grid>
          <Grid size={12}>
            <TextField fullWidth id="email" label="Email" variant="outlined" />{" "}
          </Grid>
          <Grid size={12}>
            <FormControlLabel control={<Checkbox />} label="ConfirmPDPA" />
          </Grid>

          <Grid size={6}>
            <FormControl>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row name="gender-radio-buttons-group">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
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
                  value="Game"
                  control={<Checkbox />}
                  label="Game"
                />
                <FormControlLabel
                  value="Music"
                  control={<Checkbox />}
                  label="Music"
                />
                <FormControlLabel
                  value="Craft"
                  control={<Checkbox />}
                  label="Craft"
                />
                <FormControlLabel
                  value="Reading"
                  control={<Checkbox />}
                  label="Reading"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <FormControl fullWidth>
              <InputLabel>Status</InputLabel>
              <Select label="Status">
                <MenuItem value={"Single"}>Single</MenuItem>
                <MenuItem value={"Married"}>Married</MenuItem>
                <MenuItem value={"Divorce"}>Divorce</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={12}>
            <TextField fullWidth id="note" label="Note" variant="outlined" />
          </Grid>
          <Grid container size={12} sx={{ justifyContent: "flex-end" }}>
            <Stack spacing={1} direction="row">
              <Button variant="contained">Reset</Button>
              <Button variant="contained">Submit</Button>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
