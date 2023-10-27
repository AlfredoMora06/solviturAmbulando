import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import AlfredoTezo from "../../assets/Alfredo_Tezo.jpg";

export default function SolviturAmbulando() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ paddingTop: 20, paddingBottom: 10 }}>
          <Grid item xs={12} md={6}>
            <img
              alt="Alfredo Tezo"
              src={AlfredoTezo}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6} container>
            <Typography textAlign="center" variant="h2">
              Frontend Software Engineer
            </Typography>

            <Typography textAlign="end" variant="h6">
              I specialize on building blazing fast web applications with React,
              Redux, NodeJS and Express.Js contributing across the stack with a
              frontend focus.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
