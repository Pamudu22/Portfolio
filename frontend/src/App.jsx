
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import ContactMe from './Pages/ContactMe'


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>

    </>
  )
}

export default App
