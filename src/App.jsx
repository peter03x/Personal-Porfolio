import { useState } from 'react'
import NavBar from "./NavBar.jsx";
import './App.css'
import './index.css'
import {Route, Routes} from "react-router-dom"
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";
import Home from "./pages/Home.jsx";
import Skills from "./pages/Skills.jsx";
import WorkXp from "./pages/WorkXp.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
    <>
        <div className= "home-page">
            <NavBar/>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/workxp" element={<WorkXp />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    </>
  )
}
export default App
