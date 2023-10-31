import React from "react";
import Box from "@mui/material/Box";
import { Container, Fab, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import TracFloLogo from "../../assets/TracFlo-light.png";
import { honeyDew } from "../../theme.ts";

export default function WorkSchoolPodcast() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          justifyContent={"space-between"}
          sx={{ paddingTop: 15, paddingBottom: 15 }}
        >
          <Grid item xs={12} md={5} container justifyContent={"center"}>
            <Grid
              item
              container
              justifyContent={"center"}
              sx={{ paddingTop: 10, paddingBottom: 10 }}
            >
              <img style={{ width: "85%" }} src={TracFloLogo} alt="TracFlo" />
            </Grid>
            <Typography sx={{ color: "#fefaec", fontSize: "2rem" }}>
              Work
            </Typography>
            <Typography sx={{ color: "#fefaec", fontWeight: 400 }}>
              I am currently a Software Engineer at TracFlo - helping
              revolutionize the world of construction financials.
            </Typography>
            <Fab
              onClick={() => window.open("https://tracfloapp.com", "_blank")}
              sx={{
                backgroundColor: "#fefaec",
                color: honeyDew,
                fontWeight: 700,
              }}
              variant="extended"
            >
              TracFlo
            </Fab>
          </Grid>
          <Grid item xs={12} md={5} container justifyContent={"center"}>
            <Grid
              item
              container
              justifyContent={"center"}
              sx={{ paddingTop: 10, paddingBottom: 14 }}
            >
              <img
                style={{ width: "100%" }}
                src="https://hunter.cuny.edu/assets/hunter-logo.svg"
                alt="Hunter"
              />
            </Grid>
            <Typography sx={{ color: "#fefaec", fontSize: "2rem" }}>
              School
            </Typography>
            <Typography sx={{ color: "#fefaec", fontWeight: 400 }}>
              My very first course on how to build healthy habits for life is
              enrolling on Slow Growth Academy.
            </Typography>
            <Fab
              onClick={() => window.open("https://hunter.cuny.edu/", "_blank")}
              sx={{
                backgroundColor: "#fefaec",
                color: honeyDew,
                fontWeight: 700,
              }}
              variant="extended"
            >
              Hunter College
            </Fab>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
