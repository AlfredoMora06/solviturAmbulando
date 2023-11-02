import { CardContent, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"
import Card from "@mui/material/Card"
import WorkIcon from "@mui/icons-material/Work"
import SchoolIcon from '@mui/icons-material/School'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import LinkedInIcon from "@mui/icons-material/LinkedIn"

import { honeyDew, lightBlack, lightGray } from "../theme"
import WorkItemMobile from "./WorkItemMobile"
import { Experience } from "../types/Experience"


const workExperiences: Experience[] = [
  {
    workTitle: "TracFlo",
    image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1572990352373/tracflo_logo?e=1706140800&v=beta&t=lCBiJmbkLHfuLjbDBGPsCdf4vtRV_wH9PVjLBggxjKw",
    position: "Software Engineer II",
    date: "Sept 2023 - Present"
  },
  {
    workTitle: "TracFlo",
    image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1572990352373/tracflo_logo?e=1706140800&v=beta&t=lCBiJmbkLHfuLjbDBGPsCdf4vtRV_wH9PVjLBggxjKw",
    position: "Software Engineer I",
    date: "Jan 2022 - Aug 2023"
  },
  {
    workTitle: "TracFlo",
    image: "https://media.licdn.com/dms/image/C4D0BAQG6CfTiwKpeEA/company-logo_100_100/0/1572990352373/tracflo_logo?e=1706140800&v=beta&t=lCBiJmbkLHfuLjbDBGPsCdf4vtRV_wH9PVjLBggxjKw",
    position: "Software Engineer Intern",
    date: "Jun 2021 - Dec 2021"
  },
  {
    workTitle: "CUNY K16 Initiatives",
    image: "https://media.licdn.com/dms/image/C4E0BAQHohMw7_hiXvQ/company-logo_100_100/0/1663618846214/cuny_k16_initiatives_logo?e=1706745600&v=beta&t=YO6qiZZLjCc5DblAPlqH0C1z9679-VjNAknumMRBfSw",
    position: "Computer Science Tutor",
    date: "Sep 2019 - Jun 2021"
  }
]

const educationExperiences: Experience[] = [
  {
    workTitle: "InTheLab",
    image: "https://media.licdn.com/dms/image/C560BAQFYCKdqbmOSuw/company-logo_100_100/0/1655339856108/in_the_lab_pm_logo?e=1706745600&v=beta&t=Reuze65bJz1QegWag2LnJS_EFH4GPbS0R9HgP6-7JFA",
    position: "Product Management Course",
    date: "Sept 2023 - Present"
  },
  {
    workTitle: "CUNY Tech Prep",
    image: "https://media.licdn.com/dms/image/C4E0BAQE2heJzO0qrMA/company-logo_100_100/0/1657824337700/cuny_tech_prep_logo?e=1706140800&v=beta&t=P7c01jerQVsWepDY5AC-u6hst1jW1Ko8veXOdAlBgUk",
    position: "Apprenticeship",
    date: "Aug 2020 - May 2021"
  },
  {
    workTitle: "Hunter College",
    image: "https://media.licdn.com/dms/image/D4D0BAQFogWwnz8wJ7Q/company-logo_100_100/0/1690227914898/hunter_college_logo?e=1706745600&v=beta&t=_Ti9JEuiWehJqCEl9f3ieTiGME12Nh7SoPi6c3JPZ_k",
    position: "B.A. Computer Science",
    date: "Aug 2017 - May 2021"
  },
]

const volunteerExperiences: Experience[] = [
  {
    workTitle: "Microsoft TEALS",
    image: "https://media.licdn.com/dms/image/C560BAQFBJeuU0AdwYg/company-logo_100_100/0/1563393546690/tealsk12_logo?e=1706745600&v=beta&t=OtFhFec-oPDXlLMREAbgQ_v83VZlqoOFXkFJLxJAP6w",
    position: "Computer Lab Assistant",
    date: "May 2019 - Jun 2021"
  },
]

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
          <Grid item container xs={12} paddingTop={2}>
            <Grid item container xs={6}>
              <WorkIcon sx={{ color: lightGray, paddingRight: 3 }} />
              <Typography color={lightGray}>Work</Typography>
            </Grid>
            <Grid item container xs={6} justifyContent="flex-end">
              <LinkedInIcon
                fontSize="medium"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/alfredogmorales/",
                    "_blank"
                  )
                }
                sx={{ color: "white", cursor: "pointer" }}
              />
            </Grid>
          </Grid>
          {workExperiences.map((work) => {
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
            <Typography color={lightGray}>Education</Typography>
          </Grid>
          {educationExperiences.map((work) => {
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
            <Typography color={lightGray}>Volunteer</Typography>
          </Grid>

          {volunteerExperiences.map((work) => {
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
