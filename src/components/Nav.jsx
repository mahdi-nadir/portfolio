import MahdiLogo from '../imgs/mahdilogo.png'
// import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'

import franceFlag from '../imgs/flags/franceflag.png'
import usaFlag from '../imgs/flags/usaflag.png'

import Options from './Options'
import LittleMenu from './LittleMenu'
// import { useState } from 'react'


export default function Nav({ language, onLanguageChange, showHamburger, open, setOpen, closeOrOpen, onAboutClick, onSkillsClick, onProjectsClick, onRecoClick }) {

    const handleLanguageToggle = () => {
        const newLanguage = language === 'english' ? 'french' : 'english';
        onLanguageChange(newLanguage);
    };

    const showHam = () => {
        if (showHamburger) {
            if (open) {
                return <div className='flex flex-row items-center justify-center rounded-md mr-3 mt-3 z-20'>
                    <li className="flex flex-row items-center justify-center font-semibold cursor-pointer mx-4 text-white bg-gradient-to-r from-cyan-500 to-teal-500 w-8 h-8 rounded-md p-2 list-none" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                        {/* {language == "french" ? "En" : "Fr"} */}
                        {language == "french" ? <img src={franceFlag} alt='Fr' /> : <img src={usaFlag} alt='En' />}

                    </li>
                    <ImCross className='btn text-3xl cursor-pointer relative' onClick={() => closeOrOpen()} />
                    <LittleMenu className='mt-5' language={language} handleLanguageToggle={handleLanguageToggle} open={open} closeOrOpen={closeOrOpen} aboutClick={onAboutClick} skillsClick={onSkillsClick} projectsClick={onProjectsClick} recoClick={onRecoClick} /></div>
            } else {
                return <div className='flex flex-row items-center justify-center rounded-md mr-3 mt-3'>
                    <li className="flex flex-row items-center justify-center font-semibold cursor-pointer mx-4 text-white w-8 h-8 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md p-2 list-none" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                        {language == "french" ? <img src={franceFlag} alt='Fr' /> : <img src={usaFlag} alt='En' />}

                    </li>
                    <FaBars className='btn text-3xl cursor-pointer relative' onClick={() => closeOrOpen()} />
                </div>
            }
        } else {
            return <Options language={language} handleLanguageToggle={handleLanguageToggle} aboutClick={onAboutClick} skillsClick={onSkillsClick} projectsClick={onProjectsClick} recoClick={onRecoClick} />
        }
    }
    return (
        <>
            <nav className="py-6 mb-10 flex justify-between items-center border-b-2 border-black-100">
                <img className="w-20 cursor-pointer" src={MahdiLogo} alt="logo" title={language == "french" ? "Page d'accueil" : "Home Page"} />

                {showHam()}
            </nav>
        </>
    )
}
