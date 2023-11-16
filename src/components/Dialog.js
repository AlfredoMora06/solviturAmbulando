import React from "react"
import PropTypes from "prop-types"
import MuiDialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

import Container from "./Container"
import { lightBlack, lightGray } from "../theme"


export default function Dialog({ children, onClose, open, title, maxWidth, ...props }) {
  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog"
      fullWidth
      maxWidth={maxWidth ?? "sm"}
      {...props}
    >
      <Container paddingY={5} style={{backgroundColor: lightGray}}>
        {title ? <DialogTitle sx={{ mt: 0, pb: 0, pt: 0, color: lightBlack, pl: 5 }}>{title}</DialogTitle> : <></>}
        <DialogContent>{children}</DialogContent>
      </Container>
    </MuiDialog>
  )
}

Dialog.propTypes = {
  actions: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
}
