import { Routes, Route } from "react-router-dom"

import Home from "./views/Home"
import About from "./views/About"
import Projects from "./views/Projects"
import Resume from "./views/Resume"
import Photography from "./views/Photography"
import SingleProject from "./views/SingleProject"


function App() {
  return (
    <>
      <Routes>
        <Route path="/0/home" element={<Home />} />
        <Route path="/0/about" element={<About />} />
        <Route path="/0/projects" element={<Projects />} />
        <Route path="/0/resume" element={<Resume />} />
        <Route path="/0/photography" element={<Photography />} />
        <Route path="/0/projects/:project_name" element={<SingleProject />} />
        <Route
          path="*"
          element={<Home to="/0/home" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
