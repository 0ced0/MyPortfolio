import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectCaseStudy from './pages/ProjectCaseStudy'
import Experience from './pages/Experience'
import Achievements from './pages/Achievements'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App() {
  return <Routes><Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/projects/:slug" element={<ProjectCaseStudy />} />
    <Route path="/experience" element={<Experience />} />
    <Route path="/achievements" element={<Achievements />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Route></Routes>
}
