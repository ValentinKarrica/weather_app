import {
  TextField,
  ListItemIcon,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Button,
} from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import ScreenSearchDesktopSharpIcon from "@mui/icons-material/ScreenSearchDesktopSharp";

import styled from "styled-components";
import { useState } from "react";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px -14px 10px 10px;
`;
const FirstNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid black;
`;
const SecondNav = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  flex: 1;
  margin: initial;
`;
const MyButton = styled.button``;

const MainDash = () => {
  const [selectValue, setSelectValue] = useState("Today");
  const location = "";

  const selectHandler = (event: any) => {
    console.log(event.target.value);
    setSelectValue(event.target.value);
  };
  return (
    <MainContainer>
      <FirstNav>
        <Title>ValeWeather</Title>
        {location ? (
          location
        ) : (
          <ListItemIcon sx={{ flex: 1 }}>
            <AddLocationAltIcon />
            Add Location
          </ListItemIcon>
        )}
        <Box
          component="form"
          onSubmit={() => {}}
          noValidate
          sx={{ display: "flex", flex: 1.5 }}
        >
          <TextField sx={{ flex: 1 }} label="Type Location"></TextField>
          <Button
            type="submit"
            sx={{ border: "1px solid ", marginLeft: "3px" }}
          >
            Search
          </Button>
        </Box>
      </FirstNav>
      <SecondNav>
        <ToggleButtonGroup
          value={selectValue}
          exclusive
          onChange={selectHandler}
          aria-label="text alignment"
          sx={{ flex: 1 }}
        >
          <ToggleButton sx={{ flex: 1 }} value="Today">
            Today
          </ToggleButton>
          <ToggleButton sx={{ flex: 1 }} value="Hourly">
            Hourly
          </ToggleButton>
          <ToggleButton sx={{ flex: 1 }} value="Daily">
            Daily
          </ToggleButton>
          <ToggleButton sx={{ flex: 1 }} value="Monthly">
            Monthly
          </ToggleButton>
        </ToggleButtonGroup>
      </SecondNav>
    </MainContainer>
  );
};

export default MainDash;
