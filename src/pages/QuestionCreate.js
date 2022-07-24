import React, { useState } from "react";

import {
  Container,
  Box,
  Divider,
  TextField,
  Button,
  Stack,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { questionAdded } from "../store/questionSlice";

// components
import PageHeader from "../components/PageHeader";
import ListRespondentOption from "../components/ListRespondentOption";

function QuestionCreate() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [respondentOptions, setRespondentOptions] = useState([
    {
      id: nanoid(),
      optionsRule: "May Select",
      optionsAnswer: "",
    },
  ]);

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

  const submitForm = (e) => {
    e.preventDefault();

    if (title) {
      const newQuestion = {
        id: nanoid(),
        question: title,
        respondentOptions,
      };

      dispatch(questionAdded(newQuestion));

      navigate("/", { replace: true });
    }
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
        <PageHeader title="Create Question" />
        <Divider />
        <form onSubmit={submitForm}>
          <Stack spacing={3} sx={{ marginTop: 3 }}>
            <TextField
              id="input-question"
              label="Question"
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
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
}

export default QuestionCreate;
