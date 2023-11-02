import { Grid, Typography } from '@mui/material'

import { honeyDew, lightGray } from "../theme"
import { Experience } from '../types/Experience'

export type WorkItemMobileProps = {
  work: Experience
}

const imageStyle = {
  width: "45px",
  height: "45px",
  border: `2px solid ${honeyDew}`,
  borderRadius: "500px",
  filter: `drop-shadow(5px 5px rgba(159, 184, 173, 0.3))`
}

export default function WorkItemMobile(
  {work}: WorkItemMobileProps
):JSX.Element {
  const {workTitle, position, date, image} = work

  return (
  <Grid item container xs={12} paddingTop={3}>
    <Grid item container xs={2}>
      {image != null ? <img loading="lazy" style={imageStyle} src={image} alt="work"/> : <></>}
    </Grid>
    <Grid item container xs={10} paddingLeft={2}>
      <Grid item xs={12}>
        <Typography color={lightGray} fontWeight={700}>{workTitle}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color={honeyDew} fontWeight={700}>{position}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography color={honeyDew} sx={{opacity: 0.75}}>{date}</Typography>
      </Grid>
    </Grid>
  </Grid>
  )
}
