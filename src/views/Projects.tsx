import Box from "@mui/material/Box"
import { Fade, Theme, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import Grid from "@mui/material/Grid"
import { makeStyles } from "@mui/styles"
import { useNavigate } from "react-router-dom"

//@ts-ignore
import Container from "../components/Container"
//@ts-ignore
import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import { honeyDew, lightBlack, lightGray } from "../theme"
import { projects } from "../utils/ProjectsInfo"


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
                  <Fade in={true} timeout={1800}>
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
