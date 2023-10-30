import Box from "@mui/material/Box"
import { Fade, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"

//@ts-ignore
import Container from "../Container"
import { lightGray } from "../../theme"

type ProjectNameSloganProps = {
  projectTitle: string,
  projectDescription: string,
}


export default function ProjectNameSlogan(
  {projectTitle, projectDescription}: ProjectNameSloganProps
):JSX.Element {
  return (
    <Container>
      <Box sx={{ flexGrow: 1, paddingTop: 10 }}>
        <Grid container spacing={2}>
          <Fade in={true} timeout={1000}>
            <Grid item xs={12} container>
              <Typography
                variant="h1"
                style={{ fontSize: 65, fontWeight: 700, color: lightGray }}
              >
                {projectTitle}
              </Typography>
              <Typography fontSize={22} style={{color: lightGray}} paddingTop={5}>
                {projectDescription}
              </Typography>
            </Grid>
          </Fade>
        </Grid>
      </Box>
    </Container>
  );
}
