import React, { useMemo, useState } from "react"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { makeStyles } from "@mui/styles"
import emailjs from '@emailjs/browser'
import { useSnackbar } from 'notistack'
import { Fade } from "@mui/material"

import { darkOrange, lightGray } from "../theme"
import { getProfile } from "../store/features/profileSlice"
import ContactMeForm from "./ContactMeForm"
//@ts-ignore
import Dialog from "./Dialog"
import ThankYou from "./ThankYou"


const useStyles = makeStyles(() => ({
  img: {
    "&:hover": {
      cursor: "pointer",
      opacity: 0.50
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
  const [thankYou, setThankYou] = useState<boolean>(false)
  const {i18n, t} = useTranslation("common")
  const {enqueueSnackbar} = useSnackbar()
  const [showTooltip, setShowTooltip] = React.useState(false)

  const showTooltipBasedOnEverything = useMemo(() => {
    return dialog ? false : showTooltip
  }, [dialog, showTooltip])

  const handleOpenClose = () => {
    setShowTooltip(!showTooltip)
  }

  setInterval(handleOpenClose, 3000)

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])


  const sendEmail = async (values: any, tName: string): Promise<void> => {
    await emailjs.send(
      `${process.env.REACT_APP_EMAIL_JS_SERVICE_ID}`, 
      `${process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID}`, 
      values, 
      `${process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY}`
    )
    .then((result) => {
      if(result.status === 200){
        enqueueSnackbar(t(`${tName}.sendSuccess`), {variant: "success"})
        setThankYou(true)
      } else {
        enqueueSnackbar(t(`${tName}.sendFail`), {variant: "error"})
      }
    }, () => {
      enqueueSnackbar(t(`${tName}.sendFail`), {variant: "error"})
    })
  }

  return (
    <>
      <LightTooltip placement='top' title={t("Home.clickMe")} TransitionComponent={Fade} TransitionProps={{ timeout: 600 }} open={showTooltipBasedOnEverything}>
        <div className="image-block-wrapper" data-animation-role="image">
          <div style={{ position: "relative", paddingBottom: "94.20289611816406%", overflow: "hidden" }}>
            <noscript>
              <img src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif" alt="newsletter.gif" />
            </noscript>
            <img
              onClick={() => setDialog(true)}
              className={classes.img}
              data-src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
              data-image="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif"
              style={{ top: "-3.07692%", width: "100%", position: "absolute" }}
              alt="newsletter.gif"
              src="https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/1612066701942-JDFXGEJ8GSR9PRBHPNZD/newsletter.gif?format=300w"
            />
          </div>
        </div>
      </LightTooltip>
      <Dialog
        open={dialog}
        onClose={() => setDialog(false)}
        title={thankYou ? t(`Home.ThankYou.title`) : t(`Home.ContactMeForm.title`)}
        maxWidth={thankYou ? 'xs' : 'md'}
      >
        { thankYou
          ? <>
            <ThankYou />
          </>
          : <ContactMeForm 
            onClose={() => setDialog(false)}
            sendEmail={sendEmail}
          />
        }
      </Dialog>
    </>
  )
}
