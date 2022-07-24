import React, { useState, useEffect } from "react";

import {
  Container,
  Box,
  Divider,
  TextField,
  Button,
  Stack,
  Typography,
} from "@mui/material";

import { useParams, useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";

// slice
import { questionUpdate } from "../../store/questionSlice";

// components
import PageHeader from "../../components/PageHeader";
import ListRespondentOption from "./ListRespondentOption";

function QuestionEdit() {
  const dispatch = useDispatch();
  let { id } = useParams();
  let navigate = useNavigate();
  const questions = useSelector((state) => state.questions);

  const currentQuestionFromStore = questions.find(
    (question) => question.id === id
  );

  const [title, setTitle] = useState("");
  const [respondentOptions, setRespondentOptions] = useState([]);

  useEffect(() => {
    if (currentQuestionFromStore) {
      setTitle(currentQuestionFromStore.question);
      const cloneRespondentOptions = structuredClone(
        currentQuestionFromStore.respondentOptions
      );
      // JSON.parse(JSON.stringify(currentQuestionFromStore.respondentOptions))
      setRespondentOptions(cloneRespondentOptions);
    }
  }, [currentQuestionFromStore]);

  const handleChangeTitle = (e) => {
    e.preventDefault();

    setTitle(e.target.value);
  };

  const handleChangeRespondentOption = (index, e) => {
    const newArr = [...respondentOptions];
    newArr[index][e.target.name] = e.target.value;

    setRespondentOptions(newArr);
  };

  const createNewRespondentOption = () => {
    const newRespondentOption = {
      id: nanoid(),
      optionsRule: "May Select",
      optionsAnswer: "",
    };

    setRespondentOptions([...respondentOptions, newRespondentOption]);
  };

  const deleteRespondentOption = (id) => {
    const newArr = respondentOptions.filter((respon) => respon.id !== id);

    setRespondentOptions(newArr);
  };

  const compareBetween2Objects = (currentQuestion, newQuestion) => {
    return JSON.stringify(currentQuestion) === JSON.stringify(newQuestion);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newQuestion = {
      id: currentQuestionFromStore.id,
      question: title,
      respondentOptions,
    };

    const checkIf2ObjectsAreTheSame = compareBetween2Objects(
      currentQuestionFromStore,
      newQuestion
    );

    if (!checkIf2ObjectsAreTheSame) {
      dispatch(questionUpdate(newQuestion));

      navigate("/", { replace: true });
    }
  };

  return (
    <>
      {currentQuestionFromStore ? (
        <Container maxWidth="sm">
          <Box
            sx={{
              width: "full",
              minHeight: "100vh",
              py: 4,
            }}
          >
            <PageHeader title="Edit Question" />
            <Divider />
            <form onSubmit={handleSubmitForm}>
              <Stack spacing={3} sx={{ marginTop: 3 }}>
                <TextField
                  id="edit-question"
                  label="Question"
                  name="edit-question"
                  variant="outlined"
                  value={title}
                  onChange={(e) => handleChangeTitle(e)}
                  fullWidth
                />

                <ListRespondentOption
                  listRespondent={respondentOptions}
                  handleChange={handleChangeRespondentOption}
                  createNewRespondentOption={createNewRespondentOption}
                  deleteRespondentOption={deleteRespondentOption}
                />

                <Button
                  id="btn-submit"
                  name="btn-submit"
                  type="submit"
                  variant="contained"
                >
                  Save Changes
                </Button>
              </Stack>
            </form>
          </Box>
        </Container>
      ) : (
        <Container
          maxWidth="sm"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <Typography variant="h4" component="h4" align="center">
            Question with id <strong> "{id}"</strong> is not exist
          </Typography>
        </Container>
      )}
    </>
  );
}

export default QuestionEdit;
