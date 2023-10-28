import React from "react"
import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"

//@ts-ignore
import Container from "../Container"
import { lightGray } from "../../theme"

export default function Footer(): JSX.Element {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ paddingTop: 10 }}>
          <Grid item xs={12} md={4} container>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: lightGray,
                textDecoration: "none",
              }}
            >
              Alfredo Morales
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: lightGray,
                textDecoration: "none",
              }}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container justifyContent="space-evenly">
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
  )
}
