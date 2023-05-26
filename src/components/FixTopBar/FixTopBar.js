import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const FixTopBar = () => {
  return (
    <AppBar position="sticky" elevation="0" sx={{ backgroundColor: "green" }}>
      <Toolbar>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Typography
            variant="body1"
            component="div"
            sx={{ color: "white", marginRight: "20px" }}
          >
            Save $1000s on car repairs
          </Typography>
          <Button
            disableElevation
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid black",
              fontSize: "12px"
            }}
          >
            Get Fixd 67% off
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default FixTopBar;
