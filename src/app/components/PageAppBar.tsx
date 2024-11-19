import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function PageAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" >
        <Toolbar>
         <Typography variant='h5' sx={{flexGrow:1,textAlign:'center'}}>
            User Profile Management
         </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
