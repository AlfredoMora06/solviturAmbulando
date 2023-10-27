import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";

import ResumePdf from "../assets/Alfredo_Morales_Resume.pdf";
//https://drive.google.com/file/d/10gNahEBY8MUAcAJ5HJ0Gt-oYmZf7v_JA/view?usp=sharing

export default function Resume() {
  return (
    <Grid>
      <Navbar />
      <embed src={ResumePdf} width="100%" style={{ height: "100vh" }} />
    </Grid>
  );
}
