import { Grid } from "@mui/material"

//@ts-ignore
import ResumePdf from "../assets/Alfredo_Morales_Resume.pdf"
import Navbar from "../components/Navbar"

export default function Resume():JSX.Element {
  return (
    <Grid>
      <Navbar dark={false}/>
      <embed src={ResumePdf} width="100%" style={{ height: "100vh" }}/>
    </Grid>
  )
}
