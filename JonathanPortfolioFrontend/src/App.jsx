import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import TopNavbar from "../navigation/TopNavbar"
import Home from "../routes/Home"
import Projects from "../routes/Projects"
import Contact from "../routes/Contact"

function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
