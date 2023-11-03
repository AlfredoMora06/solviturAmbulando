import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { useDispatch } from "react-redux"

import { lightBlack, lightGray } from "../theme"
import { useMediaQuery, useTheme } from "@mui/material"
//@ts-ignore
import ResumePdf from "../assets/Alfredo_Morales_Resume.pdf"
import { updateLanguage } from "../store/features/profileSlice"

const pages = [
  { title: "About Me", link: "../0/about" },
  { title: "Resume", link: "../0/resume" },
  { title: "Projects", link: "../0/projects" },
  { title: "Photography", link: "../0/photography"},
]

const pagesMobile = [
  { title: "Home", link: "../0/home"},
  { title: "About Me", link: "../0/about" },
  { title: "Resume", link: "../0/resume" },
  { title: "Projects", link: "../0/projects" },
  { title: "Photography", link: "../0/photography"},
]

type NavbarProps = {
  dark: boolean
}

export default function Navbar (
  { dark }: NavbarProps
): JSX.Element {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElNavLan, setAnchorElNavLan] = React.useState(null)

  const location = useLocation()  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const bottomBorder = dark ? lightGray : lightBlack
  const showLanguage = true

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenNavMenuLan = (event: any) => {
    setAnchorElNavLan(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseNavMenuLan = () => {
    setAnchorElNavLan(null)
  }

  const handleCloseNavMenuRedirect = (link: string) => {
    setAnchorElNav(null)
    navigate(link)
  }

  const handleCloseNavMenuLanRefresh = (language: string) => {
    dispatch(updateLanguage(language))

  }

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/0/home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: dark ? lightGray : "black",
              textDecoration: "none",
            }}
          >
            Alfredo Morales
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              style={{color: dark ? lightGray : lightBlack}}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" }}}
            >
              { pagesMobile.map((page, index) => {
                return isMobile && page.title === "Resume"
                  ? <MenuItem key={index}>  
                    <a href={ResumePdf} download="AlfredoResume" target='_blank' style={{textDecoration: "none", color: "inherit"}} rel="noreferrer">
                      <Typography textAlign="center">{page.title}</Typography>
                    </a>
                  </MenuItem>
                  : <MenuItem key={index} onClick={() => {handleCloseNavMenuRedirect(page.link)}}>  
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                }
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 2, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => {
              const samePathname = location.pathname === page.link.slice(2)
              return (
                <div 
                  key={index} 
                  style={{ 
                    borderBottom: samePathname ? `solid ${bottomBorder}` : ``, 
                    marginBottom: 2, 
                    marginTop: 2 
                  }}
                >
                  <Button
                    variant="text"
                    onClick={() => navigate(page.link)}
                    sx={{
                      color: dark ? lightGray : lightBlack,
                      display: "block",
                      fontSize: 16,
                    }}
                  >
                    {page.title}
                  </Button>
                </div>
              )
            })}
          </Box>

          { !showLanguage ? <Box>
            <Button
              variant="text"
              onClick={handleOpenNavMenuLan}
              sx={{
                color: dark ? lightGray : lightBlack,
                display: "block",
                fontSize: 16,
              }}
            >
              Language
            </Button>
            <Menu
              anchorEl={anchorElNavLan}
              anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left"}}
              open={Boolean(anchorElNavLan)}
              onClose={handleCloseNavMenuLan}
            >
              <MenuItem onClick={() => {handleCloseNavMenuLanRefresh("en")}}>  
                <Typography textAlign="center">English</Typography>
              </MenuItem>
              <MenuItem onClick={() => {handleCloseNavMenuLanRefresh("es")}}>  
                <Typography textAlign="center">Spanish</Typography>
              </MenuItem>
            </Menu>
          </Box> : <></>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}
