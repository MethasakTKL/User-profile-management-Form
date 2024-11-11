import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function ResultForm() {
  return (
    <Box sx={{ minWidth: "400px", paddingBottom: 1 }}>
      <Paper sx={{ margin: 1, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid size={11}>
            <Typography sx={{ fontWeight: "bold", fontSize: 22 }}>
              USER
            </Typography>
          </Grid>
          <Grid size={1}>
            <IconButton>
              <DeleteOutline />
            </IconButton>
          </Grid>
          <Grid size={6}>
            <Typography>Name: -</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Email: -</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Gender: -</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Hobby: -</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Status: -</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Note: -</Typography>
          </Grid>
          <Grid size={12}>
            <FormControlLabel
              disabled
              control={<Checkbox />}
              label="ConfirmPDPA"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
