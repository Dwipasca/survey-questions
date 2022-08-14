import React from "react";

import {
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

import { Draggable } from "react-beautiful-dnd";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

//slice
import { questionDelete } from "../../store/questionSlice";

// component
import ModalConfirmDelete from "./ModalConfirmDelete";

// icons
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";

function Question({ question, index }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsOpen((prev) => !prev);
  };

  const deleteQuestion = (question) => {
    dispatch(questionDelete(question));
  };

  return (
    <>
      <Draggable draggableId={question.id} index={index}>
        {(provided) => (
          <Card
            sx={{
              marginTop: "20px",
              transition: ".2s",
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 0 5px black",
              },
            }}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <CardContent>
              <Typography gutterBottom variant="h7" component="div">
                {question.question}
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                to={`/edit-question/${question.id}`}
                style={{ textDecoration: "none", marginRight: 10 }}
              >
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<EditIcon />}
                  size="small"
                >
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteForeverIcon />}
                size="small"
                onClick={handleOpenModal}
              >
                Delete
              </Button>
            </CardActions>
          </Card>
        )}
      </Draggable>

      {isOpen && (
        <ModalConfirmDelete
          isOpen={isOpen}
          handleOpenModal={handleOpenModal}
          question={question}
          deleteQuestion={deleteQuestion}
        />
      )}
    </>
  );
}

export default Question;
