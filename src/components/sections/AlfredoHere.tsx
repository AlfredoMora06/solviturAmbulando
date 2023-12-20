import React from "react"
import Box from "@mui/material/Box"
import { Fade, Slide, Typography, Container, useMediaQuery, useTheme } from "@mui/material"
import Grid from "@mui/material/Grid"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import {Cloudinary} from "@cloudinary/url-gen"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { auto as qualityAuto} from "@cloudinary/url-gen/qualifiers/quality"
import { quality } from "@cloudinary/url-gen/actions/delivery"

import { lightBlack } from "../../theme"
import { getProfile } from "../../store/features/profileSlice"
import ContactMe from "../ContactMe"


const imageStyle = {
  width: "100%",
  border: `0.5px solid ${lightBlack}`,
  borderRadius: "4px",
  opacity: 0.9
}


export default function AlfredoHere():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const profile = useSelector(getProfile)
  const cld = new Cloudinary({cloud: {cloudName: process.env.REACT_APP_CLOUDINARY}})

  const {i18n, t} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  const SunsetTezo = cld.image('fredo_mora/if2b7bxyesgscqfninta')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()
  const Abril = cld.image('fredo_mora/ciwlml5d8aqltqtxhdno')
    .quality(qualityAuto())
    .delivery(format(auto()))
    .toURL()
  const SelfBrick = cld.image('fredo_mora/bnkp44sgd0ylosfsn9sc')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()
  const BaliPose = cld.image('fredo_mora/ctonn8ujhudssrwkz1so')
    .delivery(quality(qualityAuto()))
    .delivery(format(auto()))
    .toURL()


  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 8 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} container>
            <Grid item xs={12}>
              <Typography fontSize={22}>
                {t("Home.firstParagraph")}
              </Typography>
              <br/>
              <Typography fontSize={22}>
                {t("Home.secondParagraph")}
              </Typography>
            </Grid>
            <Grid item container justifyContent="space-between">
              <Grid item xs={3} paddingTop={10}>
                <ContactMe />
              </Grid>
  
              <Grid item xs={3} paddingTop={10}>
                <div 
                  id="yui_3_17_2_1_1698535159757_294"
                  style={{
                    position: "relative",
                    paddingBottom: "94.20289611816406%",
                    overflow: "hidden",
                  }}
                >    
                  <img 
                    data-stretch="false" 
                    data-src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif" 
                    data-image="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif" 
                    data-image-dimensions="1936x1377" 
                    data-image-focal-point="0.5,0.5" 
                    alt="end-of-road.gif" 
                    data-load="false" 
                    src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif" 
                    style={{
                      width: "100%",
                      height: "106.154%",
                      position: "absolute",
                    }}
                    loading="lazy" 
                    decoding="async" 
                    data-loader="sqs"
                  />  
                </div>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <hr style={{ border: "1px solid #E05437" }} />
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} container>
            <Grid item container paddingBottom={1}>
              <Fade in={true} timeout={1000}>
                <Grid 
                  item 
                  container 
                  xs={12} 
                  md={7} 
                  alignContent="flex-end" 
                  paddingRight={1} 
                  paddingBottom={isMobile ? 3 : 0}
                  paddingTop={isMobile ? 10 : 0}
                >
                  <img
                    src={SunsetTezo}
                    alt="tezo"
                    style={imageStyle}
                    placeholder="blur"
                  />
                </Grid>
              </Fade>
              <Grid item container xs={12} md={5} alignContent="flex-end" paddingBottom={isMobile ? 3 : 0}>
                <Slide direction="down" in={true} unmountOnExit timeout={1000}>
                  <img
                    src={SelfBrick}
                    alt="brickwall"
                    style={imageStyle}
                    placeholder="blur"
                  />
                </Slide>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12} md={5} paddingBottom={isMobile ? 4 : 0}>
                <Slide direction="up" in={true} unmountOnExit timeout={1000}>
                  <img
                    src={BaliPose}
                    alt="bali"
                    style={imageStyle}
                    placeholder="blur"
                  />
                </Slide>
              </Grid>
              <Fade in={true} timeout={1000}>
                <Grid item xs={12} md={7} paddingLeft={1} paddingBottom={isMobile ? 4 : 0}>
                  <img
                    src={Abril}
                    alt="abril"
                    style={imageStyle}
                    placeholder="blur"
                  />
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
