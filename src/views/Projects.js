import React from "react";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import RecipeFinder from "../assets/Recipe_Finder.png";
import CunyHub from "../assets/CUNY_HUB.png";
import CunyYak from "../assets/cuny_yak.jpg";
import creativo from "../assets/creativo.png";
import GreenPrint from "../assets/python.png";
import Navbar from "../components/Navbar";
import Earworm from "../assets/Earworm.png";

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
];

export default function Projects() {
  // backgroundColor: "#24242c"
  return (
    <>
      <div style={{ backgroundColor: "#24242c", paddingBottom: 80 }}>
        <Navbar dark={true} />
        <Container sx={{ paddingTop: 15, paddingBottom: 15 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={9}>
                <Typography
                  variant="h1"
                  style={{ fontSize: 65, fontWeight: 700, color: "white" }}
                >
                  These Are My Projects! ^^
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                md={9}
                sx={{ paddingTop: 10 }}
                container
                justifyContent="center"
              >
                <Typography variant="h5" style={{ color: "white" }}>
                  Projects mainly from my days as a student.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
      <div
        style={{
          backgroundColor: "#fefaec",
          paddingTop: 50,
          paddingBottom: 80,
        }}
      >
        <Container>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} justifyContent="center">
              {projects.map((project, index) => {
                return (
                  <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    justifyContent={"center"}
                    style={{ paddingTop: 40 }}
                  >
                    <Card sx={{ maxWidth: 400 }}>
                      <CardMedia
                        component="img"
                        height="180"
                        image={project.image}
                        alt="green iguana"
                      />
                      <CardContent>
                        <Grid container justifyContent={"center"}>
                          <Typography gutterBottom variant="h5" component="div">
                            {project.title}
                          </Typography>
                        </Grid>
                        <Typography variant="body2" color="text.secondary">
                          {project.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Grid container justifyContent="space-evenly">
                          {project.code ? (
                            <Button
                              size="small"
                              onClick={() => {
                                window.open(project.code, "_blank");
                              }}
                            >
                              Code
                            </Button>
                          ) : (
                            <></>
                          )}

                          {project.demo ? (
                            <Button
                              size="small"
                              onClick={() => {
                                window.open(project.demo, "_blank");
                              }}
                            >
                              Demo
                            </Button>
                          ) : (
                            <></>
                          )}
                        </Grid>
                      </CardActions>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </div>
    </>
  );
}
