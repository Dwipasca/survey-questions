import * as React from "react";

import { Container, Typography, Box, Button } from "@mui/material";

export default function App() {
  return (
    <Container fixed>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App example
        </Typography>
        <Button variant="contained">Hello World</Button>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Box>
    </Container>
  );
}
