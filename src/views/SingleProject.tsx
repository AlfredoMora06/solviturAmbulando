import React from 'react'
import { useMediaQuery, useTheme } from '@mui/material'
import { useNavigate, useParams} from 'react-router-dom'

import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import ProjectBody from '../components/sections/ProjectBody'
import ProjectNameSlogan from '../components/sections/ProjectNameSlogan'
import { honeyDew, lightBlack } from "../theme"
import { projectInfo } from '../utils/ProjectsInfo'
import { Project } from '../types/Project'

export default function SingleProject():JSX.Element {
  let { project_name } = useParams()
  const navigate = useNavigate()
  const photoArrayList:string[] = []
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const project = projectInfo().find((p: Project) => p.params === project_name)

  React.useEffect(() => {
    if (project_name == null || project == null) {
      navigate(`/0/projects`)
      window.scrollTo(0, 0)
    }
  }, [project_name, navigate, project])

  if(!!project){
    if(project.image2) photoArrayList.push(project.image2)
    if(project.image3) photoArrayList.push(project.image3)
    if(project.image4) photoArrayList.push(project.image4)
    if(project.image5) photoArrayList.push(project.image5)
    if(project.image6) photoArrayList.push(project.image6)
    if(project.image7) photoArrayList.push(project.image7)
  }

  return project_name && project ? (
    <>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 100,
        }}
      >
        <Navbar dark={true} />
        <ProjectNameSlogan 
          projectTitle={project.title} 
          projectParams={project.params}
          githubLink={project.code}
          demoLink={project.demo ?? null}
          isMobile={isMobile}
        />
        <ProjectBody
          projectImage={project.image}
          projectTitle={project.title}
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
