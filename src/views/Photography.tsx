import { Box, Grid, Typography } from "@mui/material"
import Navbar from "../components/Navbar"
import { honeyDew, lightBlack, lightGray } from "../theme"
//@ts-ignore
import Container from "../components/Container"
import PhotoTabs from "../components/sections/PhotoTabs"
import Footer from "../components/sections/Footer"


export default function Photography():JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 50,
          minHeight: "100vh",
        }}
      >
        <Navbar dark={true} />
        <Container sx={{ paddingY: 10 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} paddingBottom={5}>
              <Grid item xs={12} md={6} container alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography variant="h1" style={{ fontSize: 65, fontWeight: 700, color: lightGray }}>
                    Photography
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ fontWeight: 500, color: lightGray, paddingTop: 10 }}>
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
