import React, { useState } from "react";

import {
  Container,
  Box,
  Typography,
  Divider,
  TextField,
  Button,
  Stack,
  MenuItem,
  IconButton,
} from "@mui/material";

import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function QuestionEdit() {
  const [groupOptions] = useState([
    {
      id: 1,
      rule: "May Select",
      answer: "",
    },
  ]);

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
            Edit Question
          </Typography>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIcon />}
              size="small"
            >
              Back
            </Button>
          </Link>
        </Box>
        <Divider />
        <Stack spacing={3} sx={{ marginTop: 3 }}>
          <TextField
            id="input-question"
            label="Question"
            variant="outlined"
            fullWidth
          />

          {groupOptions.map((groupOption) => (
            <Stack
              sx={{
                border: "2px solid #556cd6",
                padding: 3,
                borderStyle: "dashed",
                borderRadius: 2,
              }}
              spacing={2}
              key={groupOption.id}
            >
              <Box
                display="flex"
                sx={{
                  justifyContent: "space-between",
                }}
              >
                <Typography gutterBottom variant="subtitle1" component="p">
                  Group Options
                </Typography>
                <Box>
                  <IconButton aria-label="delete" color="error">
                    <RemoveIcon />
                  </IconButton>
                  <IconButton aria-label="delete" color="primary">
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
              <TextField
                id="select-rules"
                label="Options Rule"
                value="May Select"
                select
              >
                <MenuItem value="May Select">May Select</MenuItem>
                <MenuItem value="Must Select">Must Select</MenuItem>
              </TextField>

              <TextField
                id="input-answer"
                label="Answer"
                variant="outlined"
                fullWidth
              />
            </Stack>
          ))}
          <Button variant="contained">Save Changes</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default QuestionEdit;
