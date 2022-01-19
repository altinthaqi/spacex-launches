import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  maxWidth: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function ModalText(props) {
  return (
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        {props.title}
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {props.details}
      </Typography>
    </Box>
  );
}

export default ModalText;
