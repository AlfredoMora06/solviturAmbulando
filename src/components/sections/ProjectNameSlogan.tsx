import Box from "@mui/material/Box"
import { Button, Fade, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'

//@ts-ignore
import Container from "../Container"
import { darkOrange, lightGray } from "../../theme"


type ProjectNameSloganProps = {
  projectTitle: string,
  projectDescription: string,
  githubLink: string,
  demoLink: string | null,
}

export default function ProjectNameSlogan(
  {projectTitle, projectDescription, githubLink, demoLink}: ProjectNameSloganProps
):JSX.Element {

  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
        <Grid container spacing={2}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container>
              <Grid item container xs={12} md={6}>
                <Typography variant="h1" style={{ fontSize: 65, fontWeight: 700, color: lightGray }}>
                  {projectTitle}
                </Typography>
              </Grid>
              <Grid item container xs={12} md={6} justifyContent="flex-end">
                <Button
                  variant="text"
                  onClick={()=>window.open(`${githubLink}`,'_blank', 'rel=noopener noreferrer')}    
                  startIcon={<GitHubIcon/>}
                  style={{color: darkOrange}}
                  size="large"
                >
                  Code
                </Button>
                { demoLink != null
                  ? <Button
                    variant="text"
                    onClick={()=>window.open(`${demoLink}`,'_blank', 'rel=noopener noreferrer')}    
                    startIcon={<LanguageIcon/>}
                    style={{color: darkOrange}}
                    size="large"
                  >
                    Demo
                  </Button>
                  : <></>
                }
              </Grid>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container>
              <Typography fontSize={22} style={{color: lightGray}} paddingTop={5}>
                {projectDescription}
              </Typography>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </Container>
  );
}
