import React from "react"

import Navbar from "../components/Navbar"
//@ts-ignore
import AlfredoHere from "../components/sections/AlfredoHere"
//@ts-ignore
import Footer from "../components/sections/Footer"
//@ts-ignore
import SolviturAmbulando from "../components/sections/SolviturAmbulando"
//@ts-ignore
import WorkSchoolPodcast from "../components/sections/WorkSchoolPodcast"
import { honeyDew, lightBlack, lightGray } from "../theme"

export default function Home():JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundColor: lightGray,
          paddingBottom: 80,
          height: "100vh",
        }}
      >
        <Navbar dark={false} />
        <AlfredoHere />
      </div>
      <div
        style={{
          backgroundColor: honeyDew,
          paddingBottom: 80,
        }}
      >
        <WorkSchoolPodcast />
      </div>
      <div
        style={{
          backgroundColor: lightGray,
          paddingBottom: 80,
        }}
      >
        <SolviturAmbulando />
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
  )
}
