import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ paddingTop: 20, paddingBottom: 10 }}>
          <Grid item xs={12} md={6} container>
            <Typography
              textAlign="center"
              variant="h3"
              sx={{ color: "#E15538" }}
            >
              Let's Connect!
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} container justifyContent="space-evenly">
            <Grid item>
              <LinkedInIcon
                fontSize="large"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alfredogmorales/",
                    "_blank"
                  )
                }
                sx={{ color: "#E15538", cursor: "pointer" }}
              />
            </Grid>
            <Grid item>
              <TwitterIcon
                fontSize="large"
                onClick={() =>
                  window.open("https://twitter.com/Miles_Morales98", "_blank")
                }
                sx={{ color: "#E15538", cursor: "pointer" }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
