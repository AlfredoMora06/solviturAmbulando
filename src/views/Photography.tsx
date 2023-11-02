import { Box, Grid, Typography, Container, useMediaQuery, useTheme } from "@mui/material"
import { honeyDew, lightBlack, lightGray } from "../theme"

import Navbar from "../components/Navbar"
import PhotoTabs from "../components/sections/PhotoTabs"
import Footer from "../components/sections/Footer"


export default function Photography():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 70,
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
                    Photography
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography 
                    variant="h6" 
                    style={{ fontWeight: 500, color: lightGray, paddingTop: 10 }}
                    textAlign={isMobile ? "center" : "left"}
                  >
                    Memories frozen in time, some tell stories, some solo me gustan...
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <PhotoTabs />
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
