import Navbar from "../components/Navbar"
import AlfredoHere from "../components/sections/AlfredoHere"
import Footer from "../components/sections/Footer"
import { lightBlack, lightGray } from "../theme"

export default function Home():JSX.Element {
  return (
    <>
      <div
        style={{
          backgroundColor: lightGray,
          paddingBottom: 100,
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
