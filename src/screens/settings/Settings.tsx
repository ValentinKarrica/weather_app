import PrivateLayout from "../../layout/PrivateLayout";
import { useState } from "react";
import {
  Button,
  TextField,
  ThemeProvider,
  Container,
  CssBaseline,
  Box,
  createTheme,
  Typography,
  IconButton,
} from "@mui/material";
import { AddCircleOutlined, Cancel } from "@mui/icons-material";
import styled from "styled-components";

import { setUserDetail, userDetailPostRequest } from "./store/SettingsSlice";

//Redux
import { useDispatch } from "react-redux";
import { RootState } from "../../store/config/rootReducer";

const theme = createTheme();

const H2 = styled.h2`
  color: rgb(154, 154, 154);
`;
const InputImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border: 1px solid #dadce0;
  border-radius: 5px;
  padding: 1rem;
`;
const InputImageWrapper = styled.div`
  display: flex;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
`;
const Label = styled.label``;

const InputImage = styled.input`
  display: none;
`;

const Settings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage]: any = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const userDetail = {
      firstName: firstName,
      lastName: lastName,
      url: URL.createObjectURL(image),
    };
    dispatch(setUserDetail(userDetail));
    dispatch(userDetailPostRequest());
  };
  const onImageChange = (e: any) => {
    setImage(e.target.files[0]);
  };

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
                style={{ marginBottom: "24px" }}
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
            <Typography component="h1" variant="h5">
              Update your image
            </Typography>
            <InputImageContainer>
              {image ? (
                <ImageWrapper>
                  <Box>
                    <IconButton
                      onClick={() => {
                        setImage(null);
                      }}
                    >
                      <Cancel color="error" />
                    </IconButton>
                  </Box>

                  <Image alt="not fount" src={URL.createObjectURL(image)} />
                </ImageWrapper>
              ) : (
                <InputImageWrapper>
                  <Label htmlFor="addImage">
                    <AddCircleOutlined
                      style={{ fontSize: "50px", color: "#9A9A9A" }}
                    />
                  </Label>
                  <InputImage
                    type="file"
                    id="addImage"
                    multiple
                    accept="image/*"
                    onChange={onImageChange}
                  />
                </InputImageWrapper>
              )}
            </InputImageContainer>
            <Button
              onClick={handleSubmit}
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
