import React from "react"
import Box from "@mui/material/Box"
import { Container, Fade, Grow, ImageList, ImageListItem, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { lightGray } from "../../theme"
import { getProfile } from "../../store/features/profileSlice"


type ProjectBodyProps = {
  projectImage: string,
  projectTitle: string,
  photoArrayList: string[],
  isMobile: boolean,
  projectParams: string
}

export default function ProjectBody(
  {projectImage, projectTitle, photoArrayList, isMobile, projectParams}: ProjectBodyProps
):JSX.Element {
  const profile = useSelector(getProfile)
  const {i18n, t} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
        <Grid item container>
          <Grid item container xs={12} md={7}>
            <Grow in={true} timeout={1000}>
              <img
                loading="lazy" 
                src={projectImage}
                alt={projectTitle}
                style={{
                  width: "100%"
                }}
              />
            </Grow>
          </Grid>


          <Fade in={true} timeout={1000}>
            <Grid 
              item 
              container 
              xs={12} 
              md={5} 
              paddingLeft={isMobile ? 0 : 5} 
              paddingTop={isMobile ? 5 : 0}
              justifyContent={isMobile ? "center" : "flex-start"}
            >
              <Typography variant="h3" style={{fontWeight: 700, color: lightGray}}>
                {t("Projects.SingleProject.myRole")}
              </Typography>
  
              <Typography 
                variant="h6" 
                style={{fontWeight: 500, color: lightGray}}
                paddingTop={isMobile ? 5 : 0}
              >
                {t(`Projects.SingleProject.${projectParams}`)}
              </Typography>
            </Grid>
          </Fade>

          { photoArrayList.length > 2
            ? <ImageList variant="masonry" cols={3} gap={8}>
              {photoArrayList.map((photo) => {
                return (
                  <Fade in={true} timeout={800}>
                    <ImageListItem key={photo}>
                      <img
                        src={`${photo}?w=161&fit=crop&auto=format`}
                        alt={"missing"}
                        loading="lazy"
                      />
                    </ImageListItem>
                  </Fade>
                )
              })}
            </ImageList>
            : <></>
          }


          { photoArrayList[0] != null && photoArrayList.length === 2
            ? <Grid item container xs={12} md={6} paddingTop={5}>
              <Grow in={true} timeout={1000}>
                <img 
                  loading="lazy"
                  src={photoArrayList[0]}
                  alt={projectTitle}
                  style={{ width: "98%" }}
                />
              </Grow>
            </Grid>
            : <></>
          }

          { photoArrayList[1] != null && photoArrayList.length === 2
            ? <Grid item container xs={12} md={6} paddingTop={5}>
              <Grow in={true} timeout={1000}>
                <img 
                  loading="lazy"
                  src={photoArrayList[1]}
                  alt={projectTitle}
                  style={{ width: "100%" }}
                />
              </Grow>
            </Grid>
            : <></>
          }
        </Grid>
      </Box>
    </Container>
  )
}
