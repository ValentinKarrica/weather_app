import {
  TextField,
  ListItemIcon,
  ToggleButton,
  ToggleButtonGroup,
  Box,
  Button,
} from "@mui/material";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MyLocationIcon from "@mui/icons-material/MyLocation";

import styled from "styled-components";
import { useState } from "react";
import { locationRequest, setSearchLocation } from "../store/DashboardSlice";
import { useDispatch } from "react-redux";
import BasicModal from "./BasicModal";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/config/rootReducer";

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
  margin: initial;
  margin-right: 1rem;
`;
const Div = styled.div`
  display: flex;
`;

const MainDash = () => {
  const { userLocation, searchLocation } = useSelector(
    (state: RootState) => state.dashboard
  );
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState("Today");
  const location = "";

  const selectHandler = (event: any) => {
    setSelectValue(event.target.value);
  };

  const onSearchHandler = (event: any) => {
    event.preventDefault();
    dispatch(locationRequest());
    dispatch(setSearchLocation(""));
  };

  return (
    <MainContainer>
      <FirstNav>
        <Title>ValeWeather</Title>
        {userLocation.Key ? (
          <ListItemIcon sx={{ flex: 1, color: "#1976d2" }}>
            <MyLocationIcon />
            {`${userLocation.LocalizedName} ${userLocation.Country.LocalizedName}`}
          </ListItemIcon>
        ) : (
          <ListItemIcon sx={{ flex: 1 }}>
            <AddLocationAltIcon />
            Add Location
          </ListItemIcon>
        )}
        <Box
          component="form"
          onSubmit={onSearchHandler}
          noValidate
          sx={{ display: "flex", flex: 1.5 }}
        >
          <TextField
            value={searchLocation}
            sx={{ flex: 1 }}
            label={
              <Div>
                <SearchSharpIcon /> Type Location
              </Div>
            }
            onChange={(event) => {
              dispatch(setSearchLocation(event.target.value));
            }}
          />
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
          <ToggleButton color="primary" sx={{ flex: 1 }} value="Today">
            Today
          </ToggleButton>
          <ToggleButton color="primary" sx={{ flex: 1 }} value="Hourly">
            Hourly
          </ToggleButton>
          <ToggleButton color="primary" sx={{ flex: 1 }} value="Daily">
            Daily
          </ToggleButton>
          <ToggleButton color="primary" sx={{ flex: 1 }} value="Monthly">
            Monthly
          </ToggleButton>
        </ToggleButtonGroup>
      </SecondNav>
      <BasicModal />
      {userLocation.Key && userLocation.LocalizedName}
    </MainContainer>
  );
};

export default MainDash;
