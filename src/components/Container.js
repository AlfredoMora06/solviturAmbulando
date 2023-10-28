import React from "react"
import Box from "@mui/material/Box"

export default function Container({ children, ...props }) {
  return (
    <Box m="auto" maxWidth={1250} width="100%" {...props}>
      {children}
    </Box>
  )
}
