import React from "react"
import { Grid } from "@mui/material"

//@ts-ignore
import ResumePdf from "../assets/Alfredo_Morales_Resume.pdf"
import Navbar from "../components/Navbar"
//https://drive.google.com/file/d/10gNahEBY8MUAcAJ5HJ0Gt-oYmZf7v_JA/view?usp=sharing

export default function Resume():JSX.Element {
  return (
    <Grid>
      <Navbar dark={false}/>
      <embed src={ResumePdf} width="100%" style={{ height: "100vh" }} />
    </Grid>
  )
}
