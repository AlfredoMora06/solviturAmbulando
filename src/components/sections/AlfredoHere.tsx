import Box from "@mui/material/Box"
import { Fade, Slide, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"

//@ts-ignore
import Container from "../Container"
//@ts-ignore
import SunsetTezo from "../../assets/SunsetTezo.jpg"
//@ts-ignore
import Abril from "../../assets/Abril.jpg"
//@ts-ignore
import SelfBrick from "../../assets/SelfBrick.jpg"
//@ts-ignore
import BaliPose from "../../assets/BaliPose.jpg"
import { lightBlack } from "../../theme"


const imageStyle = {
  width: "100%",
  border: `0.5px solid ${lightBlack}`,
  borderRadius: "4px",
  opacity: 0.9
}


export default function AlfredoHere():JSX.Element {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} container>
            <Grid item xs={12}>
              <Typography fontSize={22}>
                ¡Hola mi gente! Yo soy Alfredo, a <b>fullstack software engineer</b>{" "}
                who likes <b>frontend</b> and working with <b>product teams</b>.
                I am passionate about creating tools, learning new technologies, 
                and being able to take ideas from one area of ​​knowledge to extrapolate them 
                and apply them in another. 
              </Typography>
              <br/>
              <Typography fontSize={22}>
                I specialize on building blazing fast web applications with React, 
                Redux, NodeJS and Express.Js contributing across the stack with a frontend focus.
              </Typography>
            </Grid>
            <Grid item container justifyContent="space-between">
              <Grid item xs={3} paddingTop={10}>
                <div
                  className="image-block-wrapper"
                  data-animation-role="image"
                  id="yui_3_17_2_1_1654992298184_66"
                >
                  <div
                    className="sqs-image-shape-container-elementhas-aspect-ratio"
                    style={{
                      position: "relative",
                      paddingBottom: "94.20289611816406%",
                      overflow: "hidden",
                    }}
                    id="yui_3_17_2_1_1654992298184_65"
                  >
                    <noscript>
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
                        alt="newsletter.gif"
                      />
                    </noscript>
                    <img
                      className="thumb-image loaded"
                      data-src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
                      data-image="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
                      data-image-dimensions="1080x1080"
                      data-image-focal-point="0.5,0.5"
                      data-load="false"
                      data-image-id="60162f8ca094b02e33904cd5"
                      data-type="image"
                      style={{
                        left: "0%",
                        top: "-3.07692%",
                        width: "100%",
                        height: "106.154%",
                        position: "absolute",
                      }}
                      alt="newsletter.gif"
                      data-image-resolution="300w"
                      src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif?format=300w"
                    />
                  </div>
                </div>
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
                    // srcset="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=100w 100w, https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=300w 300w, https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=500w 500w, https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=750w 750w, https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=1000w 1000w, https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=1500w 1500w, https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612120505252-ZWZI596X7SLPJS78VL4E/end-of-road.gif?format=2500w 2500w" 
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
                <Grid item container xs={12} md={7} alignContent="flex-end" paddingRight={1}>
                  <img
                    src={SunsetTezo}
                    alt="tezo"
                    style={imageStyle}
                  />
                </Grid>
              </Fade>
              <Grid item container xs={12} md={5} alignContent="flex-end">
                <Grid item container bgcolor={"#E05437"}>
                </Grid>
                <Slide direction="down" in={true} unmountOnExit timeout={1000}>
                  <img
                    src={SelfBrick}
                    alt="brickwall"
                    style={imageStyle}
                  />
                </Slide>
              </Grid>
            </Grid>
            <Grid item container>
              <Grid item xs={12} md={5}>
                <Slide direction="up" in={true} unmountOnExit timeout={1000}>
                  <img
                    src={BaliPose}
                    alt="bali"
                    style={imageStyle}
                  />
                </Slide>
              </Grid>
              <Fade in={true} timeout={1000}>
                <Grid item xs={12} md={7} paddingLeft={1}>
                  <img
                    src={Abril}
                    alt="abril"
                    style={imageStyle}
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
