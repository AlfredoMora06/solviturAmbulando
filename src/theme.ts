import { unstable_createMuiStrictModeTheme as createTheme } from "@mui/material"

// Color Pallete
export const lightGray = "#E6E8E6"
export const darkGray = "#CED0CE"
export const honeyDew = "#9FB8AD"
export const armyGreen = "#475841"
export const lightBlack = "#24242c"
export const darkOrange = "#E05437"

const theme = createTheme({
  palette: {
    secondary: {
      main: darkOrange
    }
  },
  typography: {
    fontFamily: 'IBM Plex Sans'
  }
})
  
export default theme