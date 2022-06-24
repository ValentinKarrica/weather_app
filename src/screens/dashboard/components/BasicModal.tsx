import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Modal } from "@mui/material";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/config/rootReducer";
import { setModalOpen, setUserLocation } from "../store/DashboardSlice";
import { UserLocation } from "../../../model";

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
`;

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const dispatch = useDispatch();
  const { searchResLocation, modalOpen } = useSelector(
    (state: RootState) => state.dashboard
  );
  const handleClose = (location: UserLocation) => {
    dispatch(setModalOpen(false));
    dispatch(setUserLocation(location));
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => {
          dispatch(setModalOpen(false));
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "5px",
            }}
            id="modal-modal-description"
          >
            Select your Location
          </Typography>
          <Div>
            {searchResLocation.map((location, index) => {
              return (
                <Button
                  onClick={() => {
                    handleClose(location);
                  }}
                  variant="outlined"
                  sx={{ textTransform: "initial", marginTop: "5px" }}
                  key={index}
                >
                  {`${location.LocalizedName}  ${location.Country.LocalizedName}`}
                </Button>
              );
            })}
          </Div>
        </Box>
      </Modal>
    </div>
  );
}
