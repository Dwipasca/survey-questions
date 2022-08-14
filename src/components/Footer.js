import React from "react";

import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        padding: 2,
      }}
    >
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}

export default Footer;
