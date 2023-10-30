import React from "react"
import Box from "@mui/material/Box"
import { Theme, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"

//@ts-ignore
import Container from "../components/Container"
//@ts-ignore
import RecipeFinder from "../assets/Recipe_Finder.png"
//@ts-ignore
import CunyHub from "../assets/CUNY_HUB.png"
//@ts-ignore
import CunyYak from "../assets/cuny_yak.jpg"
//@ts-ignore
import creativo from "../assets/creativo.png"
//@ts-ignore
import GreenPrint from "../assets/python.png"
//@ts-ignore
import Navbar from "../components/Navbar"
//@ts-ignore
import Earworm from "../assets/Earworm.png"
import Footer from "../components/sections/Footer"
import { honeyDew, lightBlack, lightGray } from "../theme"


const projects = [
  {
    title: "Earworm",
    params: "earworm",
    image: Earworm,
    description:
      "A music visualization and exploration tool based on Billboard’s Year-End charts from 1970-2020. Provides an overview of the albums on every chart year as well as data visualization to offer insights on the way music trends develop over time.",
    code: "https://github.com/AlfredoMora06/earworm_",
    demo: "https://earwrm.io/",
  },
  {
    title: "CUNY Hub",
    params:"cuny-hub",
    image: CunyHub,
    description:
      "A hub for CUNY School information and relations between CUNY schools. Attending NYC high schools we noticed there isn’t somewhere we can find info on CUNY schools all in one place. It’s hard to find what you’re looking for if you don’t know where to look.",
    code: "https://github.com/nursimadonuk/CUNY_HUB_Project",
    demo: "https://cunyhub.shinyapps.io/CUNY_HUB_Project/",
  },
  {
    title: "Recipe Finder",
    params: "recipe-finder",
    image: RecipeFinder,
    description:
      "You don't know what to cook? RecipeFinder finds it for you! Recipe Finder allows you to search recipes based on the ingredients you have to your disposal. By registering with us, you can save recipes you like for future reference, and also order recipes from our store of recipes.",
    code: "https://github.com/AlfredoMora06/RecipeFinder",
  },
  {
    title: "CUNY Yak",
    params: "cuny-yak",
    image: CunyYak,
    description:
      "For people who need someone to talk to in a local radius. A social media based app to satisfy the theme of helping with the transitioning from work to the home. The application has the user post thoughts like a discussion post.",
    code: "https://github.com/AlfredoMora06/Grafic",
  },
  {
    title: "Green Print",
    params: "green-print",
    image: GreenPrint,
    description:
      "What's your green print in the world? An under-construction web application built with Flask that traces individual carbon emissions (CO2 levels) for household products and vehicles, and returns their carbon footprint.",
    code: "https://github.com/AlfredoMora06/GreenPrint-Project",
  },

  {
    title: "Creativo",
    params: "creativo",
    image: creativo,
    description:
      "A website that shows photos of NYC and a blog of responses towards Media articles of our current lives.",
    code: "https://github.com/AlfredoMora06/creative",
  },
]

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
  return (
    <>
      <div style={{ backgroundColor: lightGray, paddingBottom: 80 }}>
        <Navbar dark={false} />
        <Container sx={{ paddingTop: 15, paddingBottom: 15 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container>
              <Grid item xs={12} md={9}>
                <Typography variant="h1" style={{ fontSize: 65, fontWeight: 700}}>
                  These Are My Projects!
                </Typography>
              </Grid>
              <Grid item container xs={12} md={9} sx={{ paddingTop: 5 }}>
                <Typography variant="h5">
                  A collection of programming work I've done. Enjoy!
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
                      <img src={image} width="100%" alt="folder" height="340" style={{transition: "transform .2s"}}/>
                      <div className={classes.middle}>
                        <Typography variant="h5" style={{color: lightGray, fontWeight: 700}}>
                          {title}
                        </Typography>
                      </div>
                    </Button>
                  </Grid>
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
