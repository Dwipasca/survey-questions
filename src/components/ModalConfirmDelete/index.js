import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function ModalConfirmDelete({ isOpen, handleOpenModal }) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleOpenModal}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle
        sx={{
          color: "error.main",
        }}
      >{`Confirm Delete`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure want to delete this{" "}
          <strong>Academic Libraries Survey</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpenModal}>Cancel</Button>
        <Button
          onClick={handleOpenModal}
          variant="contained"
          color="error"
          size="small"
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ModalConfirmDelete;
