import styled from "styled-components";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background-image: url("/blueSky.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.h1``;

const LandingPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">SingUp</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Content>Welcome on board!</Content>
      </Container>
    </Box>
  );
};

export default LandingPage;
