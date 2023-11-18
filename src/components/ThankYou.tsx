import { useTranslation } from "react-i18next"
import Grid from "@mui/material/Grid"

// @ts-ignore
import { Fade, Typography } from "@mui/material"


export default function ThankYou(): JSX.Element {
  const {t} = useTranslation("common")

  return (
    <Fade in={true} timeout={2000}>
      <Grid container spacing={2} mt={1} paddingX={2} justifyContent={"space-between"}>
        <Grid item xs={12} md={7} mb={2} container>
          <Typography fontSize={22}>
            {t("Home.ThankYou.firstSentence")}
          </Typography>
          <br/> <br/>
          <Typography fontSize={22}>
            {t("Home.ThankYou.secondSentence")}
          </Typography>
        </Grid>
        <Grid item xs={12} md={5} mb={2}>
          <div className="image-block-wrapper" data-animation-role="image">
            <div style={{ position: "relative", paddingBottom: "94.20289611816406%", overflow: "hidden" }}>
              <noscript>
                <img src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif" alt="newsletter.gif" />
              </noscript>
              <img
                data-src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
                data-image="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
                style={{ width: "100%", position: "absolute"}}
                alt="newsletter.gif"
                src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif?format=300w"
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </Fade>
  )
}
