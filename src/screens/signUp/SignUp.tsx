import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styled from "styled-components";

import {
  updateUserFormCreate,
  signUpRequest,
  setRegisterComplete,
} from "./store/SignUpSlice";
import { RootState } from "../../store/config/rootReducer";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import useAuthEffect from "../../hooks/useAuthEffect";

const theme = createTheme();

const ErrorMessage = styled.div`
  color: red;
`;

export default function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { registerComplete, errorMessage } = useSelector(
    (state: RootState) => state.signup
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(signUpRequest());
  };

  React.useEffect(() => {
    if (registerComplete) {
      history.push("/login");
      dispatch(setRegisterComplete(false));
    }
  }, [registerComplete]);

  useAuthEffect(() => {
    history.replace("/dashboard");
  }, []);

  return (
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => {
                    dispatch(
                      updateUserFormCreate({
                        key: "email",
                        value: event.target.value,
                      })
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event) => {
                    dispatch(
                      updateUserFormCreate({
                        key: "password",
                        value: event.target.value,
                      })
                    );
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => {
                    history.push("/login");
                  }}
                >
                  Already have an account? Log in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </Container>
    </ThemeProvider>
  );
}
