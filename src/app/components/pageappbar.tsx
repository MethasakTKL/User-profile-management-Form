import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function PageAppBar() {
  return (
    <Box >
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h5" sx={{ flexGlow: 1, textAlign: "center" }}>
            User profile management System
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
