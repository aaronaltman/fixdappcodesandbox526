import React from "react";
import { Typography, Box, Divider } from "@mui/material";
import { green } from "@mui/material/colors";

const FixIntro = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh" // adjust this as per your needs
      }}
    >
      <Typography variant="h2" align="center">
        Row 1 Content
      </Typography>
      <Typography variant="h4" align="center">
        Row 2 Content
      </Typography>
      <Typography variant="h6" align="center">
        Row 3 Content
      </Typography>
      <Divider
        sx={{
          width: "50%",
          bgcolor: green[500],
          my: 2,
          alignSelf: "center"
        }}
      />
      <Typography variant="body1" align="center">
        Row 4 Content
      </Typography>
    </Box>
  );
};

export default FixIntro;
