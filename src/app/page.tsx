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
      <Grid container spacing={2} paddingTop={10} size={{ xs: 12, md: 7, lg: 8 }}>
        <Grid size={{ xs: 12, md: 6}}>
          <ProfileForm />
        </Grid>
        <Grid size={{ xs: 12, md: 6}}>
          <ResultForm />
        </Grid>
      </Grid>
    </Box>
  );
}
