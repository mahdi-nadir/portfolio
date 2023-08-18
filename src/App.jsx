import Nav from './components/Nav'
import Intro from './components/Intro'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ButtonTop from './components/ButtonTop'
import Recommandations from './components/Recommandations'
import Email from './components/Email'
// import .env
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from '/env'
import { useState, useEffect, useRef } from 'react'


function App() {
  const getTheme = () => {
    const theme = JSON.parse(localStorage.getItem('theme'));
    return theme || false;
  }

  const getLanguage = () => {
    const language = JSON.parse(localStorage.getItem('language'));
    return language || "english";
  }

  const [darkMode, setDarkMode] = useState(getTheme());
  const [language, setLanguage] = useState(getLanguage())
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [open, setOpen] = useState(false)
  // const goToAbout = useRef()
  const goToSkills = useRef()
  const goToProjects = useRef()
  const goToReco = useRef()

  const closeOrOpen = () => {
    setOpen(!open)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };



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

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(darkMode))
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('language', JSON.stringify(language))
  }, [language]);
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
    <div className={darkMode ? 'dark-mode' : ''}>
      <div className='px-6'>
        <Nav language={language} onLanguageChange={handleLanguageChange} showHamburger={windowWidth < 960} open={open} closeOrOpen={closeOrOpen} /* onAboutClick={scrollToAbout} */ onSkillsClick={scrollToSkills} onProjectsClick={scrollToProjects} onRecoClick={scrollToReco} toggleDM={toggleDarkMode} dark={darkMode} />
        <Intro /* ref={goToAbout} */ language={language} dark={darkMode} />
        <Skills ref={goToSkills} language={language} dark={darkMode} />
        <Projects ref={goToProjects} language={language} dark={darkMode} />
        <Recommandations ref={goToReco} language={language} dark={darkMode} />
        <Email language={language} dark={darkMode} SERVICE_ID={SERVICE_ID} TEMPLATE_ID={TEMPLATE_ID} USER_ID={USER_ID} />
        <ButtonTop />
      </div>
      <Footer language={language} />
    </div>
  )
}

export default App
