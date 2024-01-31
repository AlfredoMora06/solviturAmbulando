import * as React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
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
import { useDispatch, useSelector } from "react-redux"
import { useTranslation } from "react-i18next"

import { lightBlack, lightGray } from "../theme"
import { getProfile, updateLanguage } from "../store/features/profileSlice"


type NavbarProps = {
  dark: boolean
}

export default function Navbar (
  { dark }: NavbarProps
): JSX.Element {
  const profile = useSelector(getProfile)
  const {i18n, t} = useTranslation("common")
  const [anchorElNavLan, setAnchorElNavLan] = React.useState(null)
  const [drawer, setDrawer] = React.useState(false)
  const location = useLocation()  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const bottomBorder = dark ? lightGray : lightBlack
  const showLanguage = true



  const pages = [
    { title: t("Navbar.about"), link: "../0/about" },
    { title: t("Navbar.projects"), link: "../0/projects" },
    { title: t("Navbar.photography"), link: "../0/photography"},
  ]
  
  const pagesMobile = [
    { title: t("Navbar.home"), link: "../"},
    { title: t("Navbar.about"), link: "../0/about" },
    { title: t("Navbar.projects"), link: "../0/projects" },
    { title: t("Navbar.photography"), link: "../0/photography"},
  ]

  const toggleDrawer = (open: boolean) =>  (event: React.KeyboardEvent | React.MouseEvent) => { 
    setDrawer(open)
  }

  const handleOpenNavMenuLan = (event: any) => {
    setAnchorElNavLan(event.currentTarget)
  }
  
  const handleCloseNavMenuLan = () => {
    setAnchorElNavLan(null)
  }

  const handleCloseNavMenuLanRefresh = (language: string) => {
    dispatch(updateLanguage(language))
  }

  const handleCloseNavMenuRedirect = (link: string) => {
    navigate(link)
    toggleDrawer(false)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pagesMobile.map((page) => (
          <ListItem key={page.title} disablePadding>
            <ListItemButton onClick={() => {handleCloseNavMenuRedirect(page.link)}}>
              <ListItemText primary={page.title} sx={{color: dark ? lightGray : lightBlack, fontWeight: 500}}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  React.useEffect(() => {
    // switch to profile preferred language
    if (i18n.language !== profile.language) {
      i18n.changeLanguage(profile.language).then(/*intentionally blank*/)
    }
  }, [i18n, profile.language])

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box display={{xs: "none", md: "flex"}}>
            <Link
              to={'/'}
              style={{ 
                marginRight: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: dark ? lightGray : "black",
                textDecoration: "none",
                fontSize: 20
               }}
              onClick={() => {window.scrollTo(0, 0)}}
            >
              Alfredo Morales
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              style={{color: dark ? lightGray : lightBlack}}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              PaperProps={{
                sx: { width: "50%" , backgroundColor: dark ? lightBlack : lightGray, overflow: "hidden",},
              }}
              open={drawer}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
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

          { showLanguage ? <Box>
            <Button
              variant="text"
              onClick={handleOpenNavMenuLan}
              sx={{
                color: dark ? lightGray : lightBlack,
                display: "block",
                fontSize: 16,
              }}
            >
              {t("Navbar.language")}
            </Button>
            <Menu
              anchorEl={anchorElNavLan}
              anchorOrigin={{ vertical: "bottom", horizontal: "left"}}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left"}}
              open={Boolean(anchorElNavLan)}
              onClose={handleCloseNavMenuLan}
            >
              <MenuItem onClick={() => {handleCloseNavMenuLanRefresh("en")}} sx={{minWidth: 80}}>  
                <img alt="United States" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" style={{maxWidth: 20}}/>
                <Typography textAlign="center" paddingLeft={1}>En</Typography>
              </MenuItem>
              <MenuItem onClick={() => {handleCloseNavMenuLanRefresh("es")}} sx={{minWidth: 80}}>
                <img alt="Mexico" src="http://purecatamphetamine.github.io/country-flag-icons/3x2/MX.svg" style={{maxWidth: 20}}/>  
                <Typography textAlign="center" paddingLeft={1}>Es</Typography>
              </MenuItem>
            </Menu>
          </Box> : <></>
          }
        </Toolbar>
      </Container>
    </AppBar>
  )
}
