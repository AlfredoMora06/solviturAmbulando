import React from "react"
import makeStyles from "@mui/styles/makeStyles"
import MuiTextField from "@mui/material/TextField"
import { lightBlack } from "../theme"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormHelperText-root": {
      position: "absolute",
      bottom: "-20px",
    },
    '& label.Mui-focused': {
      color: lightBlack,
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: lightBlack,
      },
    },

  },
}))

export default function Text(props) {
  const classes = useStyles()
  return <MuiTextField 
    className={classes.root} 
    variant="outlined" 
    fullWidth={props.fullWidth ?? true} 
    {...props}     
  />
}
