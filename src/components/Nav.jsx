import MahdiLogo from '../imgs/mahdilogo.png'
import { FaBars } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'

import franceFlag from '../imgs/flags/franceflag.png'
import usaFlag from '../imgs/flags/usaflag.png'

import Options from './Options'
import LittleMenu from './LittleMenu'


export default function Nav({ language, onLanguageChange, showHamburger, open, dark, closeOrOpen, onAboutClick, onSkillsClick, onProjectsClick, onRecoClick, onContactClick, toggleDM }) {

    const handleLanguageToggle = () => {
        const newLanguage = language === 'english' ? 'french' : 'english';
        onLanguageChange(newLanguage);
    };

    const showHam = () => {
        if (showHamburger) {
            if (open) {
                return <div className='flex flex-row items-center justify-center rounded-md mr-3 mt-3 z-20'>
                    <li className="flex flex-row items-center justify-center cursor-pointer rounded-md list-none" onClick={() => toggleDM()} >
                        {dark ? <BsSunFill className='text-2xl' /> : <BsFillMoonStarsFill className='text-2xl' />}
                    </li>
                    <li className="imgFlag flex flex-row items-center justify-center cursor-pointer mx-4 rounded-md list-none" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                        {language == "french" ? <span className='text-lg font-bold'>EN</span> : <span className='text-lg font-bold'>FR</span>}
                    </li>
                    <ImCross className='btn text-3xl cursor-pointer relative' onClick={() => closeOrOpen()} />
                    <LittleMenu className='mt-5' language={language} handleLanguageToggle={handleLanguageToggle} open={open} closeOrOpen={closeOrOpen} aboutClick={onAboutClick} skillsClick={onSkillsClick} projectsClick={onProjectsClick} recoClick={onRecoClick} contactClick={onContactClick} /></div>
            } else {
                return <div className='flex flex-row items-center justify-center rounded-md mr-3 mt-3'>
                    <li className="flex flex-row items-center justify-center cursor-pointer rounded-md list-none" onClick={() => toggleDM()} >
                        {dark ? <BsSunFill className='text-2xl' /> : <BsFillMoonStarsFill className='text-2xl' />}
                    </li>
                    <li className="imgFlag flex flex-row items-center justify-center cursor-pointer mx-4 rounded-md list-none" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                        {language == "french" ? <span className='text-lg font-bold'>EN</span> : <span className='text-lg font-bold'>FR</span>}
                    </li>
                    <FaBars className='btn text-3xl cursor-pointer relative' onClick={() => closeOrOpen()} />
                </div>
            }
        } else {
            return <Options language={language} handleLanguageToggle={handleLanguageToggle} aboutClick={onAboutClick} skillsClick={onSkillsClick} projectsClick={onProjectsClick} recoClick={onRecoClick} contactClick={onContactClick} toggleDarkMode={toggleDM} dark={dark} />
        }
    }
    return (
        <>
            <nav className="py-6 mb-10 flex justify-between items-center border-b-2 border-black-100">
                <img className="logo w-28 pt-3 lg:pt-0 lg:w-40 cursor-pointer" src={MahdiLogo} alt="logo" /* title={language == "french" ? "Page d'accueil" : "Home Page"} */ />

                {showHam()}
            </nav>
        </>
    )
}
