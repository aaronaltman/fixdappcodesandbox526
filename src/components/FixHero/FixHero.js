import React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { green } from "@mui/material/colors";

const FixHero = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: "40px", pb: "40px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image
              src="/public/phones-app-transparent-large.webp"
              alt="Hero"
              width={972}
              height={874}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom sx={{ textAlign: "left" }}>
              YOUR POCKET CAR EXPERT
            </Typography>
            <Typography variant="h3" gutterBottom sx={{ textAlign: "left" }}>
              Save money on vehicle repairs &<br /> car mechanic bills
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ textAlign: "left" }}>
              The FIXD sensor and free app tells you why your check engine light
              is on to help you save time and money
            </Typography>
            <Button
              variant="contained"
              disableElevation
              style={{
                display: "flex",
                backgroundColor: green[500],
                marginTop: "20px"
              }}
            >
              Get Fixd 67% off
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FixHero;
