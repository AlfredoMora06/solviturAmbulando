import React from "react"
import Box from "@mui/material/Box"
import { Fade, Theme, Typography, Container, useTheme, useMediaQuery } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

//@ts-ignore
import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import { honeyDew, lightBlack, lightGray } from "../theme"
import { projects } from "../utils/ProjectsInfo"
import { getProfile } from "../store/features/profileSlice"


const useStyles = makeStyles<Theme>((theme) => ({
  button: {
    overflow: "hidden",
    "&:hover": {
      "& img": {
        outline: `3px solid ${lightGray}`,
        opacity: 0.3,
        transform: "scale(1.10)"
      },
      "& $middle": {
        opacity: 1
      }
    },
  },
  middle: {
    opacity: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
}))


export default function Projects():JSX.Element {
  const classes = useStyles()
  const navigate = useNavigate()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const profile = useSelector(getProfile)
  const {i18n, t} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  return (
    <>
      <div style={{ backgroundColor: lightGray, paddingBottom: 80 }}>
        <Navbar dark={false} />
        <Container sx={{ paddingTop: 15, paddingBottom: 15 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography 
                  variant="h1" 
                  style={{ 
                    fontSize: isMobile ? 55 : 65, 
                    fontWeight: 700,
                    textAlign: isMobile ? "center" : "left"
                  }}
                >
                  {t("Projects.title")}
                </Typography>
              </Grid>
              <Grid item container xs={12} md={9} sx={{ paddingTop: 5 }}>
                <Typography variant="h5" style={{ textAlign: isMobile ? "center" : "left" }}>
                  {t("Projects.subtitle")}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingTop: 50,
          paddingBottom: 80,
        }}
      >
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
              {projects.map((project) => {
                const {image, params, title} = project
                return (
                  <Fade in={true} timeout={1800} key={title}>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      container
                      justifyContent={"center"}
                      style={{ paddingTop: 40 }}
                    >
                      <Button 
                        variant="text" 
                        className={classes.button}
                        onClick={() => {
                          navigate(`/0/projects/${params}`, {state: project})
                          window.scrollTo(0, 0)
                        }}
                      >
                        <img loading="lazy" src={image} width="100%" alt="folder" height="100%" style={{transition: "transform .2s"}}/>
                        <div className={classes.middle}>
                          <Typography variant="h5" style={{color: lightGray, fontWeight: 700}}>
                            {title}
                          </Typography>
                        </div>
                      </Button>
                    </Grid>
                  </Fade>
                )
              })}
            </Grid>
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 80,
          borderTop: `1px solid ${honeyDew}`,
        }}
      >
        <Footer />
      </div>
    </>
  )
}
