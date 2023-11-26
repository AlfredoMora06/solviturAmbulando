import React from "react"
import Box from "@mui/material/Box"
import { Button, Container, Fade, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import GitHubIcon from '@mui/icons-material/GitHub'
import LanguageIcon from '@mui/icons-material/Language'
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { darkOrange, lightGray } from "../../theme"
import { getProfile } from "../../store/features/profileSlice"


type ProjectNameSloganProps = {
  projectTitle: string,
  projectParams: string,
  githubLink: string,
  demoLink: string | null,
  isMobile: boolean,
}

export default function ProjectNameSlogan(
  {projectTitle, projectParams, githubLink, demoLink, isMobile}: ProjectNameSloganProps
):JSX.Element {
  const {i18n, t} = useTranslation("common")
  const profile = useSelector(getProfile)

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 8 }}>
        <Grid container spacing={2}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container>
              <Grid item container xs={12} md={6} justifyContent={isMobile ? "center" : "flex-start"} paddingBottom={isMobile ? 2 : 0}>
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
                  {t("Projects.SingleProject.code")}
                </Button>
                { demoLink != null
                  ? <Button
                    variant="text"
                    onClick={()=>window.open(`${demoLink}`,'_blank', 'rel=noopener noreferrer')}    
                    startIcon={<LanguageIcon/>}
                    style={{color: darkOrange}}
                    size="large"
                  >
                    {t("Projects.SingleProject.demo")}
                  </Button>
                  : <></>
                }
              </Grid>
            </Grid>
          </Fade>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container>
              <Typography fontSize={22} style={{color: lightGray}} paddingTop={isMobile ? 0 : 5}>
                {t(`Projects.SingleProject.${projectParams}Desc`)}
              </Typography>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </Container>
  );
}
