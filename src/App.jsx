import { BrowserRouter, Route, Routes } from "react-router-dom"
import DefaultLayout from './components/layout/DefaultLayout'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import ProjectDetail from './components/pages/ProjectDetail'
import './App.css'

function App() {


  return (
    <>
      <BrowserRouter>
        <DefaultLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </DefaultLayout>
      </BrowserRouter>
    </>
  )
}

export default App
