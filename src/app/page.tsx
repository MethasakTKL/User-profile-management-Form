import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
//Import Components
import PageAppBar from "./components/pageappbar";
import ProfileForm from "./components/profileform";
import ResultForm from "./components/resultform";

export default function Home() {
  return (
    <Box>
      <PageAppBar />
      <Grid container spacing={2} paddingTop={10}>
        <Grid size={5}>
          <ProfileForm />
        </Grid>
        <Grid size={7}>
          <ResultForm />
          <ResultForm />
          <ResultForm />

        </Grid>
      </Grid>
    </Box>
  );
}
