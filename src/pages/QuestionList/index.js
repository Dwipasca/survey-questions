import React, { useContext } from "react";
import {
  Container,
  Box,
  Button,
  Fab,
  Typography,
  Divider,
} from "@mui/material";

import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Link } from "react-router-dom";

// icon
import AddIcon from "@mui/icons-material/Add";

// component
import Question from "./Question";

import { QuestionsContext } from "../../context/Questions";

function QuestionList() {
  const { listQuestion } = useContext(QuestionsContext);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const srcI = source.index;
    const desI = destination.index;
    listQuestion.splice(desI, 0, listQuestion.splice(srcI, 1)[0]);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          width: "full",
          minHeight: "100vh",
          py: 4,
        }}
      >
        <Box
          display="flex"
          sx={{
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography gutterBottom variant="h6" component="div">
            List Question
          </Typography>
          <Link to="/create-question" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                },
              }}
            >
              Create Question
            </Button>
          </Link>
        </Box>
        <Divider />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="listSurvey">
            {(provided) => (
              <Box {...provided.droppableProps} ref={provided.innerRef}>
                {listQuestion.map((question, idx) => {
                  return (
                    <Question
                      question={question}
                      key={question.id}
                      index={idx}
                    />
                  );
                })}
                {provided.placeholder}
              </Box>
            )}
          </Droppable>
        </DragDropContext>

        <Link to="/create-survey" style={{ textDecoration: "none" }}>
          <Fab
            color="primary"
            aria-label="mobile-btn-add"
            sx={{
              display: {
                xs: "block",
                sm: "none",
              },
              position: "fixed",
              bottom: 20,
              right: 26,
            }}
            size="large"
          >
            <AddIcon fontSize="large" sx={{ margin: "auto" }} />
          </Fab>
        </Link>
      </Box>
    </Container>
  );
}

export default QuestionList;
