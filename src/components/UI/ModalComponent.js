import React from "react";
import Modal from "@mui/material/Modal";
import ModalText from "./ModalText";

function ModalComponent(props) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalText title={props.title} details={props.details} />
    </Modal>
  );
}

export default ModalComponent;
