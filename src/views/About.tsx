import React from "react"
import Box from "@mui/material/Box"
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid"
import Fade from '@mui/material/Fade'
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import Navbar from "../components/Navbar"
import { honeyDew, lightBlack, lightGray } from "../theme"
//@ts-ignore
import ChildhoodPic from "../assets/ChildhoodPic.jpg"
import WorkCard from "../components/WorkCard"
import Footer from "../components/sections/Footer"
import { getProfile } from "../store/features/profileSlice"


export default function About():JSX.Element {
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
      <div
        style={{
          backgroundColor: lightBlack,
        }}
      >
        <Navbar dark={true} />
        <Container sx={{ paddingY: 8 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} paddingBottom={10}>
              <Grid item xs={12} md={6} container alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    style={{ 
                      fontSize: isMobile ? 55 : 65, 
                      fontWeight: 700, 
                      color: lightGray,
                      textAlign: isMobile ? "center" : "left"
                    }}
                  >
                    Una vida sin explorar no merece ser vivida!
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
              
              <Fade in={true} timeout={1000}>
                <Grid item container xs={12} md={4} justifyContent="center">
                  <img 
                    loading="lazy"
                    src={ChildhoodPic} 
                    alt="family" 
                    style={{
                      width: "100%",
                      border: `2px solid ${honeyDew}`,
                      borderRadius: "40px",
                      opacity: 0.75
                    }}
                  />
                </Grid>
              </Fade>

              <Grid item xs={1}></Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} container alignItems="flex-start" paddingBottom={isMobile ? 5 : 0}>
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: lightGray }}>
                    {t("About.firstParagraph")}
                  </Typography>
                  <br />
                  <Typography variant="h6" sx={{ color: lightGray }}>
                    {t("About.secondParagraph")}
                  </Typography>

                  <br />

                  <Typography variant="h6" sx={{ color: lightGray }}>
                    {t("About.thirdParagraph")}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} container justifyContent={"center"}>
                <WorkCard />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 80,
          borderTop: `1px solid ${honeyDew}`
        }}
      >
        <Footer />
      </div>
    </>
  )
}
