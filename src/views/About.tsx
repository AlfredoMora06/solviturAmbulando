import React from "react"
import Box from "@mui/material/Box"
import { Container, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"

import Navbar from "../components/Navbar"
import { lightBlack, lightGray } from "../theme"
//@ts-ignore
import WorkCard from "../components/WorkCard"

export default function About():JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundColor: lightBlack,
        }}
      >
        <Navbar dark={true} />
        <Container sx={{ paddingY: 10 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} paddingBottom={10}>
              <Grid item xs={12} md={6} container alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography
                    variant="h1"
                    style={{ fontSize: 65, fontWeight: 700, color: lightGray }}
                  >
                    Una vida sin explorar no merece ser vivida!
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} container justifyContent={"center"}>
                <img src={""} alt="LinkedInPic" />
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} container alignItems={"center"}>
                <Grid item xs={12}>
                  <Typography sx={{ color: lightGray }}>
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
                  <Typography sx={{ color: lightGray }}>
                    In 2021, I began my internship with <b>TracFlo</b> a
                    construction-tech company looking to revolutinize one of the
                    least digitized spaces in the world. After 6 months of
                    working with them and being part of their incredible
                    journey, we decided to make the transition into full-time.I
                    began working with TracFlo as a Software Engineer in the
                    beginning of 2022.
                  </Typography>

                  <br />

                  <Typography sx={{ color: lightGray }}>
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
              {/** TODO -- Card here listing my work over the past couple of years. */}
              <Grid item xs={12} md={6} container justifyContent={"center"}>
                <WorkCard />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  )
}
