import React from "react";

import {
  Box,
  Typography,
  TextField,
  Stack,
  MenuItem,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function RespondentOption({
  index,
  respondentOption,
  handleChange,
  createNewRespondentOption,
  deleteRespondentOption,
}) {
  return (
    <Stack
      sx={{
        border: "2px solid #556cd6",
        padding: 3,
        borderStyle: "dashed",
        borderRadius: 2,
      }}
      spacing={2}
    >
      <Box
        display="flex"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <Typography gutterBottom variant="subtitle1" component="p">
          Responden Options
        </Typography>
        <Box>
          <IconButton
            aria-label="delete"
            color="error"
            onClick={() => deleteRespondentOption(respondentOption.id)}
          >
            <RemoveIcon />
          </IconButton>
          <IconButton
            aria-label="delete"
            color="primary"
            onClick={createNewRespondentOption}
          >
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <TextField
        id="optionsRule"
        label="Options Rule"
        name="optionsRule"
        value={respondentOption.optionsRule}
        onChange={(e) => handleChange(index, e)}
        select
      >
        <MenuItem value="May Select">May Select</MenuItem>
        <MenuItem value="Must Select">Must Select</MenuItem>
      </TextField>

      <TextField
        id="input-answer"
        label="Options Answer"
        variant="outlined"
        name="optionsAnswer"
        value={respondentOption.optionsAnswer}
        onChange={(e) => handleChange(index, e)}
        fullWidth
      />
    </Stack>
  );
}

export default RespondentOption;
