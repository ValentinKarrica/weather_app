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
import { UserAuth, UserDetail } from "../../model";

import { setUserDetail, userDetailPostRequest } from "./store/SettingsSlice";
import { storage } from "../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { RootState } from "../../store/config/rootReducer";

//Redux
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setUserAuth } from "../../store/auth/AuthSlice";
import { constants } from "buffer";

const theme = createTheme();

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

//Upload image to the storage
function upload(file: File, userAuth: UserAuth) {
  try {
    const imageRef = ref(storage, `image/${userAuth.localId}`);
    const snapShot = uploadBytes(imageRef, file);
    const imageUrl: any = getDownloadURL(imageRef);
    return imageUrl;
  } catch {
    console.log("ERROR IN UPLOADING AND DOWNLOADING URL IMAGE");
  }
}

const Settings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage]: any = useState("");

  const { userAuth } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (image === "") {
      return;
    }
    upload(image, userAuth)
      .then((data: any) => {
        const userDetail: UserDetail = {
          firstName: firstName,
          lastName: lastName,
          url: data,
        };
        dispatch(setUserDetail(userDetail));
      })
      .then(() => {
        dispatch(userDetailPostRequest());
      });
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
                label="Last Name"
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
};;;;;;;;

export default Settings;
