import Nav from './components/Nav'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ButtonTop from './components/ButtonTop'
import Recommandations from './components/Recommandations'
import { useState, useEffect, useRef } from 'react'


function App() {
  const [open, setOpen] = useState(false)
  // const goToAbout = useRef()
  const goToSkills = useRef()
  const goToProjects = useRef()
  const goToReco = useRef()

  const closeOrOpen = () => {
    setOpen(!open)
  }

  const [language, setLanguage] = useState("english")
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // const scrollToAbout = () => {
  //   goToAbout.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // }

  const scrollToSkills = () => {
    goToSkills.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToProjects = () => {
    goToProjects.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const scrollToReco = () => {
    goToReco.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='bg-gray-50'>
      {/* <Router> */}
      <div className='px-6'>
        <Nav language={language} onLanguageChange={handleLanguageChange} showHamburger={windowWidth < 960} open={open} closeOrOpen={closeOrOpen} /* onAboutClick={scrollToAbout} */ onSkillsClick={scrollToSkills} onProjectsClick={scrollToProjects} onRecoClick={scrollToReco} />
        <Intro /* ref={goToAbout} */ language={language} />
        <Skills ref={goToSkills} language={language} />
        <Projects ref={goToProjects} language={language} />
        <Recommandations ref={goToReco} language={language} />
        <ButtonTop />
      </div>
      <Footer language={language} />
      {/* </Router> */}
    </div>
  )
}

export default App
