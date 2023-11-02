import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from "@mui/icons-material/LinkedIn"

//@ts-ignore
import Container from "../Container"
import { honeyDew, lightGray } from "../../theme"

const textStyle = {
  mr: 2,
  display: "flex",
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: lightGray,
  textDecoration: "none",
}

export default function Footer(): JSX.Element {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ paddingTop: 8 }}>
          <Grid item xs={12} md={4} container>
            <Typography variant="h6" noWrap sx={textStyle}>
              Alfredo Morales
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} container>
            <Grid item container>
              <Typography variant="h6" noWrap sx={textStyle}>
                Contact
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  fontFamily: "monospace",
                  fontWeight: 700,
                  color: honeyDew,
                  textDecoration: "none",
                }}
              >
                agmmendez123@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} container>
            <Grid item container>
              <Typography variant="h6" noWrap component="a" sx={textStyle}>
                Social
              </Typography>
            </Grid>
            <Grid item container paddingTop={2}>
              <Grid item>
                <GitHubIcon
                  fontSize="large"
                  onClick={() =>
                    window.open(
                      "https://vsco.co/fredomorales/gallery",
                      "_blank"
                    )
                  }
                  sx={{ color: honeyDew, cursor: "pointer", paddingRight: 5 }}
                />
              </Grid>
              <Grid item>
                <LinkedInIcon
                  fontSize="large"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/alfredogmorales/",
                      "_blank"
                    )
                  }
                  sx={{ color: honeyDew, cursor: "pointer", paddingRight: 5 }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
