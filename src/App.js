import "./styles.css";
import React from "react";
import Container from "@mui/material/Container";
import FixTopBar from "/src/components/FixTopBar/FixTopBar.js";
import FixHero from "/src/components/FixHero/FixHero.js";
import FixIntro from "/src/components/FixIntro/FixIntro.js";

export default function App() {
  return (
    <div className="App">
      <FixTopBar />
      <Container maxWidth="lg">
        <FixHero />
        <FixIntro />
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </Container>
    </div>
  );
}
