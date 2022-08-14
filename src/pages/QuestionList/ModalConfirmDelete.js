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

function ModalConfirmDelete({
  isOpen,
  handleOpenModal,
  question,
  deleteQuestion,
}) {
  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleOpenModal}
      aria-describedby="Modal Confirm Delete Question"
      fullWidth
    >
      <DialogTitle
        sx={{
          color: "error.main",
        }}
      >{`Confirm Delete`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="Text Confirm Delete Question">
          Are you sure want to delete this <strong>{question.question}</strong>?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleOpenModal}>Cancel</Button>
        <Button
          onClick={() => deleteQuestion(question)}
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
