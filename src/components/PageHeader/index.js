import React from "react";

import { Box, Typography, Button } from "@mui/material";

import { Link } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function PageHeader({ title }) {
  return (
    <Box
      display="flex"
      sx={{
        justifyContent: "space-between",
        mb: 1,
      }}
    >
      <Typography gutterBottom variant="h6" component="div">
        {title}
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
  );
}

export default PageHeader;
