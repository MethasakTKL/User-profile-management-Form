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

interface RessultFormProps {
  index: number;
  data: FormData;
  onDelete: () => void;
}

export default function ResultForm({
  index,
  data,
  onDelete,
}: RessultFormProps) {
  return (
    <Box sx={{ minWidth: "400px", paddingBottom: 1 }}>
      <Paper sx={{ margin: 2, padding: 2 }}>
        <Grid container spacing={2}>
          <Grid size={11}>
            <Typography sx={{ fontWeight: "bold", fontSize: 22 }}>
              USER {index + 1}
            </Typography>
          </Grid>
          <Grid size={1}>
            <IconButton onClick={onDelete}>
              <DeleteOutline />
            </IconButton>
          </Grid>
          <Grid size={6}>
            <Typography>
              Name:{" "}
              {data.name || data.lastName
                ? `${data.name || ""}${data.name && data.lastName ? " " : ""}${
                    data.lastName || ""
                  }`
                : "-"}
              {/* Name + " " + lastname   -> " " -> must have {name} + {lastname}               */}
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Email: {data.email || "-"}</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Gender: {data.gender || "-"}</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Hobby: {data.hobbies.join(", ") || "-"}</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Status: {data.status || "-"}</Typography>
          </Grid>
          <Grid size={6}>
            <Typography>Note: {data.note || "-"}</Typography>
          </Grid>
          <Grid size={12}>
            <FormControlLabel
              disabled
              control={<Checkbox checked={data.confirmPDPA} />}
              label="ConfirmPDPA"
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
