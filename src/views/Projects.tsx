import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"

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
import { lightBlack, lightGray } from "../theme"

const projects = [
  {
    title: "Earworm",
    image: Earworm,
    description:
      "A music visualization and exploration tool based on Billboard’s Year-End charts from 1970-2020. Provides an overview of the albums on every chart year as well as data visualization to offer insights on the way music trends develop over time.",
    code: "https://github.com/AlfredoMora06/earworm_",
    demo: "https://earwrm.io/",
  },
  {
    title: "CUNYHub",
    image: CunyHub,
    description:
      "A hub for CUNY School information and relations between CUNY schools. Attending NYC high schools we noticed there isn’t somewhere we can find info on CUNY schools all in one place. It’s hard to find what you’re looking for if you don’t know where to look.",
    code: "https://github.com/nursimadonuk/CUNY_HUB_Project",
    demo: "https://cunyhub.shinyapps.io/CUNY_HUB_Project/",
  },
  {
    title: "Recipe Finder",
    image: RecipeFinder,
    description:
      "You don't know what to cook? RecipeFinder finds it for you! Recipe Finder allows you to search recipes based on the ingredients you have to your disposal. By registering with us, you can save recipes you like for future reference, and also order recipes from our store of recipes.",
    code: "https://github.com/AlfredoMora06/RecipeFinder",
  },
  {
    title: "CUNY Yak",
    image: CunyYak,
    description:
      "For people who need someone to talk to in a local radius. A social media based app to satisfy the theme of helping with the transitioning from work to the home. The application has the user post thoughts like a discussion post.",
    code: "https://github.com/AlfredoMora06/Grafic",
  },
  {
    title: "Green Print",
    image: GreenPrint,
    description:
      "What's your green print in the world? An under-construction web application built with Flask that traces individual carbon emissions (CO2 levels) for household products and vehicles, and returns their carbon footprint.",
    code: "https://github.com/AlfredoMora06/GreenPrint-Project",
  },

  {
    title: "Creativo",
    image: creativo,
    description:
      "A website that shows photos of NYC and a blog of responses towards Media articles of our current lives.",
    code: "https://github.com/AlfredoMora06/creative",
  },
]

const sx = {
  hover: {
    "&:hover": {
      color: "#3751FF",
      border: "1px solid #3751FF",
    }
  }
}

export default function Projects():JSX.Element {
  // backgroundColor: "#24242c"
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
                const {image} = project
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    justifyContent={"center"}
                    style={{ paddingTop: 40 }}
                  >
                    <Button variant="text" sx={{ display: "flex", flexDirection: "column"}}>
                      <img src={image} width="100%" alt="folder" className={"hover"}/>
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
        }}
      >
        <Footer />
      </div>
    </>
  )
}
