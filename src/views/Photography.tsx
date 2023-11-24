import React from "react"
import { Box, Grid, Typography, Container, useMediaQuery, useTheme } from "@mui/material"
import { useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { honeyDew, lightBlack, lightGray } from "../theme"
import Navbar from "../components/Navbar"
import PhotoTabs from "../components/sections/PhotoTabs"
import Footer from "../components/sections/Footer"
import { getProfile } from "../store/features/profileSlice"


export default function Photography():JSX.Element {
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
          paddingBottom: isMobile ? 0 : 70,
          minHeight: "100vh",
        }}
      >
        <Navbar dark={true} />
        <Container sx={{ paddingY: 8 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} paddingBottom={5}>
              <Grid item xs={12} md={7} container alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography 
                    variant="h1" 
                    style={{ fontSize: isMobile ? 55 : 65, fontWeight: 700, color: lightGray }}
                    textAlign={isMobile ? "center" : "left"}
                  >
                    {t("Photography.title")}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography 
                    variant="h6" 
                    style={{ fontWeight: 500, color: lightGray, paddingTop: 10 }}
                    textAlign={isMobile ? "center" : "left"}
                  >
                    {t("Photography.subtitle")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <PhotoTabs t={t}/>
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
