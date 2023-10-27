import React from "react";

import Navbar from "../components/Navbar";
import AlfredoHere from "../components/sections/AlfredoHere";
import Footer from "../components/sections/Footer";
import SolviturAmbulando from "../components/sections/SolviturAmbulando";
import WorkSchoolPodcast from "../components/sections/WorkSchoolPodcast";
import { honeyDew, lightBlack, lightGray } from "../theme.ts";

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundColor: lightGray,
          paddingBottom: 80,
          height: "100vh",
        }}
      >
        <Navbar />
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
  );
}
