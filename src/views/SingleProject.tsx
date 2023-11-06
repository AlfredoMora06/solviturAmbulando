import { useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {useLocation, useNavigate} from 'react-router-dom'

import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import ProjectBody from '../components/sections/ProjectBody'
import ProjectNameSlogan from '../components/sections/ProjectNameSlogan'
import { getProjects } from '../store/features/projectsSlice'
import { honeyDew, lightBlack } from "../theme"

export default function SingleProject():JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()
  const photoArrayList:string[] = []
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const projects = useSelector(getProjects)
  const project = projects.find((p: any) => p.title === location.state.title)

  if(location.state.image2) photoArrayList.push(location.state.image2)
  if(location.state.image3) photoArrayList.push(location.state.image3)
  if(location.state.image4) photoArrayList.push(location.state.image4)
  if(location.state.image5) photoArrayList.push(location.state.image5)
  if(location.state.image6) photoArrayList.push(location.state.image6)
  if(location.state.image7) photoArrayList.push(location.state.image7)
  

  React.useEffect(() => {
    if (location.state == null) {
      navigate(`/0/projects`)
      window.scrollTo(0, 0)
    }
  }, [location.state, navigate])

  return location.state && project ? (
    <>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 100,
        }}
      >
        <Navbar dark={true} />
        <ProjectNameSlogan 
          projectTitle={location.state.title} 
          projectParams={project.params}
          githubLink={location.state.code}
          demoLink={location.state.demo ?? null}
          isMobile={isMobile}
        />
        <ProjectBody
          projectImage={location.state.image}
          projectTitle={location.state.title}
          photoArrayList={photoArrayList}
          isMobile={isMobile}
          projectParams={project.params}
        />
      </div>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 80,
          borderTop: `1px solid ${honeyDew}`,
        }}
      >
        <Footer />
      </div>
    </>
  ) : <></>
}
