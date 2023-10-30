import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"
import ProjectNameSlogan from '../components/sections/ProjectNameSlogan'
import { lightBlack } from "../theme"

export default function SingleProject():JSX.Element {
  const location = useLocation()
  const navigate = useNavigate()

  React.useEffect(() => {
    if (location.state == null) {
      navigate(`/0/projects`)
      window.scrollTo(0, 0)
    }
  }, [location.state, navigate])

  return location.state ? (
    <>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 80,
          height: "100vh",
        }}
      >
        <Navbar dark={true} />
        <ProjectNameSlogan projectTitle={location.state.title} projectDescription={location.state.description}/>
      </div>
      <div
        style={{
          backgroundColor: lightBlack,
          paddingBottom: 80,
        }}
      >
        <Footer />
      </div>
    </>
  ) : <></>
}
