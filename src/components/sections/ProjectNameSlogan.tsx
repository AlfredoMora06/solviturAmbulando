import Box from "@mui/material/Box"
import { Button, Container, Fade, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'

import { darkOrange, lightGray } from "../../theme"


type ProjectNameSloganProps = {
  projectTitle: string,
  projectDescription: string,
  githubLink: string,
  demoLink: string | null,
  isMobile: boolean,
}

export default function ProjectNameSlogan(
  {projectTitle, projectDescription, githubLink, demoLink, isMobile}: ProjectNameSloganProps
):JSX.Element {

  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 8 }}>
        <Grid container spacing={2}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container>
              <Grid item container xs={12} md={6} justifyContent={isMobile ? "center" : "flex-start"}>
                <Typography 
                  variant="h1" 
                  style={{ 
                    fontSize: isMobile ? 55 : 65, 
                    fontWeight: 700, 
                    color: lightGray,
                  }}
                >
                  {projectTitle}
                </Typography>
              </Grid>
              <Grid item container xs={12} md={6} justifyContent={isMobile ? "center" : "flex-end"}>
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
              <Typography fontSize={22} style={{color: lightGray}} paddingTop={isMobile ? 0 : 5}>
                {projectDescription}
              </Typography>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </Container>
  );
}
