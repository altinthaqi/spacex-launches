import * as React from "react";
import ViewButtons from "./ViewButtons";
import ModalComponent from "../UI/ModalComponent";

export default function Details({ title, details, rocketPath }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <ViewButtons handleOpen={handleOpen} rocketPath={rocketPath} />
      <ModalComponent
        title={title}
        details={details}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
}
