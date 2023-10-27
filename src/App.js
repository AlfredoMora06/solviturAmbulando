import { Routes, Route } from "react-router-dom";

import About from "./views/About";
import Home from "./views/Home";
import Projects from "./views/Projects";
import Resume from "./views/Resume";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </>
  );
}

export default App;
