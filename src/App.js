import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import About from "./views/About"
import Projects from "./views/Projects"
import Resume from "./views/Resume"
import Photography from "./views/Photography"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </>
  );
}

export default App;
