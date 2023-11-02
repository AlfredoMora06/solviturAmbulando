import Box from "@mui/material/Box"
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid"
import Fade from '@mui/material/Fade'

import Navbar from "../components/Navbar"
import { honeyDew, lightBlack, lightGray } from "../theme"
//@ts-ignore
import ChildhoodPic from "../assets/ChildhoodPic.jpg"
import WorkCard from "../components/WorkCard"
import Footer from "../components/sections/Footer"


export default function About():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

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
              <Grid item xs={12} md={6} container alignItems="flex-start">
                <Grid item xs={12}>
                  <Typography variant="h6" sx={{ color: lightGray }}>
                    The son of Mexican immigrants, I grew up in Astoria, NY
                    until 2010. After that, I moved to Mexico with my family
                    where I spent the next 6 years living in Oaxaca - going to
                    school and experiencing everyday life there. At the age of
                    16 in 2015 - I decided to make the jump and achieve the
                    American Dream and move to NYC. I finished high school there
                    and in 2021 - midst pandemic - I graduated from{" "}
                    <b>Hunter College</b> with a B.S. in Computer Science.
                  </Typography>
                  <br />
                  <Typography variant="h6" sx={{ color: lightGray }}>
                    In 2021, I began my internship with <b>TracFlo</b> a
                    construction-tech company looking to revolutinize one of the
                    least digitized spaces in the world. After 6 months of
                    working with them and being part of their incredible
                    journey, we decided to make the transition into full-time.I
                    began working with TracFlo as a Software Engineer in the
                    beginning of 2022.
                  </Typography>

                  <br />

                  <Typography variant="h6" sx={{ color: lightGray }}>
                    My dream is to better my software engineering skills a bit
                    each day and being a Mexican immigrant myself, help out my
                    community in the U.S and in Mexico - by adding my knowledger
                    into developing curriculums. In my spare time, you can find
                    me playing soccer, running or most recently (weightlifting).
                    I also enjoy hiking, going to a good comedy club, or
                    exploring the foodie recommendations of NYC. Lastly, I've
                    recently been enjoying Fifa 22 and reading self-help books.
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
