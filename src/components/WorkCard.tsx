import React from "react"
import { Button, CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Card from "@mui/material/Card"
import WorkIcon from "@mui/icons-material/Work"
import SchoolIcon from '@mui/icons-material/School'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"

import { darkOrange, honeyDew, lightBlack, lightGray } from "../theme"
import WorkItemMobile from "./WorkItemMobile"
import { EducationExperiences, VolunteerExperiences, WorkExperiences } from "../utils/WorkInfo"
import { getProfile } from "../store/features/profileSlice"
//@ts-ignore
import ResumePdf from "../assets/Alfredo_Morales_Resume.pdf"


const imageStyle = {
  width: "45px",
  height: "45px",
  border: `3px solid ${honeyDew}`,
  borderRadius: "500px",
  filter: `drop-shadow(5px 5px rgba(159, 184, 173, 0.3))`
}


export default function WorkCard():JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const profile = useSelector(getProfile)

  const {i18n, t} = useTranslation("common")

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  return (
    <Card 
      sx={{ 
        backgroundColor: lightBlack, 
        width: 450, 
        border: "0.4px solid rgba(230, 232, 230, 0.4)", 
        filter: `drop-shadow(0px 5px rgba(230, 232, 230, 0.1))` 
      }}>
      <CardContent>
        <Grid container>
          <Grid item container xs={12} paddingTop={1.5}>
            <Grid item container xs={6} alignContent={"center"}>
              <WorkIcon sx={{ color: lightGray, paddingRight: 3 }} />
              <Typography color={lightGray}>{t("About.WorkCard.workTitle")}</Typography>
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end" alignContent={"center"}>
              <Grid item paddingRight={2}>
                <Button
                  onClick={() => {
                    window.open(
                      ResumePdf,
                      "_blank"
                    )
                  }} 
                  sx={{ color: "white", cursor: "pointer", paddingTop: 0.8, "&:hover": {color: darkOrange}}}
                  size="small"
                >
                  <Typography textAlign="center" fontSize={15}>{t("Navbar.resume")}</Typography>
                </Button>
              </Grid>
              <Grid item container xs={1} alignContent="center">
                <LinkedInIcon
                  fontSize="medium"
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/alfredogmorales/",
                      "_blank"
                    )
                  }
                  sx={{ color: "white", cursor: "pointer", "&:hover": {color: darkOrange} }}
                />
              </Grid>
            </Grid>
          </Grid>
          {WorkExperiences(t).map((work) => {
            const {workTitle, position, date, image} = work
            return isMobile ?
              <WorkItemMobile work={work} key={`${workTitle}-${position}`} />
            : (
              <Grid item container xs={12} paddingTop={3} key={`${workTitle}-${position}`}>
                <Grid item container xs={2}>
                  {image != null ? <img loading="lazy" style={imageStyle} src={image} alt="work"/> : <></>}
                </Grid>
                <Grid item container xs={10} paddingLeft={isMobile ? 2: 0}>
                  <Grid item xs={12}>
                    <Typography color={lightGray}>{workTitle}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color={honeyDew}>{position}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color={honeyDew} textAlign="end">{date}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
          <Grid item container  paddingTop={5} justifyContent="center">
            <Grid item xs={8}>
              <hr style={{ border: "0.4px solid #E6E8E6", opacity: 0.4 }} />
            </Grid>
          </Grid>

          <Grid item container xs={12} paddingTop={2}>
            <SchoolIcon sx={{ color: lightGray, paddingRight: 3 }} />
            <Typography color={lightGray}>{t("About.WorkCard.educationTitle")}</Typography>
          </Grid>
          {EducationExperiences(t).map((work) => {
            const {workTitle, position, date, image} = work
            return isMobile ?
              <WorkItemMobile work={work} key={`${workTitle}-${position}`} />
            : (
              <Grid item container xs={12} paddingTop={3} key={`${workTitle}-${position}`}>
                <Grid item container xs={2}>
                  <img style={imageStyle} src={image} alt="education"/>
                </Grid>
                <Grid item container xs={10}>
                  <Grid item xs={12}>
                    <Typography color={lightGray}>{workTitle}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color={honeyDew}>{position}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color={honeyDew} textAlign="end">{date}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}

          <Grid item container  paddingTop={5} justifyContent="center">
            <Grid item xs={8}>
              <hr style={{ border: "0.4px solid #E6E8E6", opacity: 0.4 }} />
            </Grid>
          </Grid>

          <Grid item container xs={12} paddingTop={2}>
            <VolunteerActivismIcon sx={{ color: lightGray, paddingRight: 3 }} />
            <Typography color={lightGray}>{t("About.WorkCard.volunteerTitle")}</Typography>
          </Grid>

          {VolunteerExperiences(t).map((work) => {
            const {workTitle, position, date, image} = work
            return isMobile ?
              <WorkItemMobile work={work} key={`${workTitle}-${position}`} />
            : (
              <Grid item container xs={12} paddingTop={3} key={`${workTitle}-${position}`}>
                <Grid item container xs={2}>
                  <img style={imageStyle} src={image} alt="volunteer"/>
                </Grid>
                <Grid item container xs={10}>
                  <Grid item xs={12}>
                    <Typography color={lightGray}>{workTitle}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color={honeyDew}>{position}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography color={honeyDew} textAlign="end">{date}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            )
          })}

        </Grid>
      </CardContent>
    </Card>
  )
}
