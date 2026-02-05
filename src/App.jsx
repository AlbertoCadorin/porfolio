import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from './components/layout/DefaultLayout'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
//import ProjectsCard from "./components/cards/ProjectCard"
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />

          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App
