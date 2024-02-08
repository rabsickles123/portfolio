import './App.css'
import Homepage from "./pages/Homepage"
import { Routes, Route } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import MyProjects from './pages/MyProjects'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path = '/' element = {<Homepage/>}></Route>
      <Route path = '/aboutme' element = {<AboutMe/>}></Route>
      <Route path = '/projects' element = {<MyProjects/>}></Route>
    </Routes>
    </>
  )
}

export default App
