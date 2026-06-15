//IMPORTS - Hooks
import { useRef} from 'react'


//IMPORTS - Components 
import NavBar from './components/ui/NavBar'
import IntroBio from './components/IntroBio'
import Certifications from './components/Certifications'
import Projects from './components/Projects'

import Resume from './components/Resume'
import Skills from './components/Skills'
//STYLES 
import './App.css'
import Footer from './components/ui/footer'

// <Resume ref = {resumeRef}/>
//const resumeRef = useRef(null)
//resumeRefProp = {resumeRef}

function App() {

  const bioRef = useRef(null)
  const skillsRef = useRef(null)
  const certRef = useRef(null)
  const projRef= useRef(null)


  return (
    <>
        <NavBar 
          bioRefProp = {bioRef}
          skillsRefProp = {skillsRef}
          certRefProp = {certRef}
          projRefProp = {projRef}
        />
        <IntroBio ref = {bioRef}/>
        <hr/>
        <Skills ref = {skillsRef}/>
        <hr/>
        <Certifications ref = {certRef}/>
        <hr/>
        <Projects ref = {projRef}/>
        
        <Footer/>
    </>
  )
}

export default App
