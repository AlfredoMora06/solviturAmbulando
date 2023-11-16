import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles"


import { darkOrange, lightGray } from "../theme"
import { getProfile } from "../store/features/profileSlice"
import ContactMeForm from "./ContactMeForm"
//@ts-ignore
import Dialog from "./Dialog"

const useStyles = makeStyles(() => ({
  img: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.60
    }
  },
}))


const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: darkOrange,
    color: lightGray,
  },
}))


export default function ContactMe():JSX.Element {
  const classes = useStyles()
  const profile = useSelector(getProfile)
  const [dialog, setDialog] = useState<boolean>(false)
  const {i18n, t} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])


  return (
    <>
      <LightTooltip placement='top' title={t("Home.clickMe")}>
        <div className="image-block-wrapper" data-animation-role="image">
          <div
            className="sqs-image-shape-container-elementhas-aspect-ratio"
            style={{ position: "relative", paddingBottom: "94.20289611816406%", overflow: "hidden" }}
          >
            <noscript>
              <img src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif" alt="newsletter.gif" />
            </noscript>
            <img
              onClick={() => setDialog(true)}
              className={classes.img}
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
      </LightTooltip>
      <Dialog
        open={dialog}
        onClose={() => setDialog(false)}
        title={t(`Home.ContactMeForm.title`)}
        maxWidth={'md'}
      >
        <ContactMeForm 
          onClose={() => setDialog(false)}
        />
      </Dialog>
    </>
  )
}
