import Box from "@mui/material/Box"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid"


export default function AlfredoHere():JSX.Element {
  return (
    <Box m="auto" maxWidth={1250} width="100%">
      <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} container direction="row">
            <Grid item xs={12}>
              <Typography fontSize={22}>
                My name is Alfredo and I’m a <b>fullstack software engineer</b>{" "}
                who likes <b>frontend</b> and working with <b>product teams</b>.
                I love understanding how things work and being able to explain
                them, and my growth mindset means that I enjoy curating a
                productive and collaborative work environment. I'm always happy
                to chat about software engineering opportunities or DEI
                strategies.
              </Typography>
            </Grid>

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
            <Grid item xs={12}>
              <hr style={{ border: "1px solid #E05437" }} />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
