import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import styled from "styled-components";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/config/rootReducer";
import { setModalOpen } from "../store/DashboardSlice";

const Div = styled.div``;

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
  const handleClose = () => {
    dispatch(setModalOpen(false));
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {searchResLocation.map((location, index) => {
              return (
                <div key={index}>
                  {location.Type}: {location.LocalizedName} Country:{" "}
                  {location.Country.LocalizedName}
                </div>
              );
            })}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
