import React from "react"

import Navbar from "../components/Navbar"
import AlfredoHere from "../components/sections/AlfredoHere"
import Footer from "../components/sections/Footer"
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
          backgroundColor: lightBlack,
          paddingBottom: 80,
        }}
      >
        <Footer />
      </div>
    </>
  )
}
