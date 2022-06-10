import styled from "styled-components";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import useAuthEffect from "../../hooks/useAuthEffect";

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 700px;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.5)
    ),
    url("/blueSky.png");
  background-repeat: no-repeat;
  background-size: cover;
`;
const Content = styled.h1`
  position: relative;
`;

const LandingPage = () => {
  const history = useHistory();

  useAuthEffect(() => {
    history.push("/dashboard");
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Weather App
          </Typography>

          <Button
            color="inherit"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>

          <Button
            color="inherit"
            onClick={() => {
              history.push("/signup");
            }}
          >
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Content>Welcome on board!</Content>
      </Container>
    </Box>
  );
};

export default LandingPage;
