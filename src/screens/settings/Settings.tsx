import PrivateLayout from "../../layout/PrivateLayout";
import { useState } from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Container,
  CssBaseline,
  Box,
  createTheme,
  Avatar,
  Typography,
} from "@mui/material";
import styled from "styled-components";

const theme = createTheme();
const H2 = styled.h2``;

const Settings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = () => {};
  return (
    <PrivateLayout>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Update your details
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="First Name"
                autoFocus
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="lastName"
                label="First Name"
                id="lastName"
                autoComplete="First Name"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
            </Box>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>+</Avatar>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit update
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </PrivateLayout>
  );
};

export default Settings;
