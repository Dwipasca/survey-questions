import React from "react";

import { Container, Typography, AppBar, Toolbar } from "@mui/material";

function Navbar() {
  return (
    <AppBar position="static">
      <Container fixed>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 400,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Survey Questions
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 400,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Survey Questions
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
