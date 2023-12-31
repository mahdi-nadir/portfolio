import franceFlag from '../imgs/flags/franceflag.png'
import usaFlag from '../imgs/flags/usaflag.png'
import { BsFillMoonStarsFill, BsSunFill } from 'react-icons/bs'

export default function Options({ language, handleLanguageToggle, aboutClick, skillsClick, projectsClick, recoClick, contactClick, toggleDarkMode, dark }) {
    return (
        <ul className="flex items-center uppercase">
            <li onClick={skillsClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Compétences" : "Skills"}>
                {language == "french" ? "Compétences" : "Skills"}
            </li>
            <li onClick={projectsClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Projets" : "Projects"}>
                {language == "french" ? "Projets" : "Projects"}
            </li>
            <li onClick={recoClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Recommandations" : "Recommendations"}>
                {language == "french" ? "Recommandations" : "Recommendations"}
            </li>
            <li onClick={contactClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title="Contact">
                Contact
            </li>
            <li className="btn">
                <a target="_blank" title={language == "french" ? "CV en PDF" : "PDF Resume"} className="btn cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6 font-semibold" rel="noreferrer" href={language == 'french' ? 'https://drive.google.com/file/d/1T4hiK4GtGDWet5hFgihH0TLIvnCDwxhA/view?usp=sharing' : 'https://drive.google.com/file/d/1Sz8zb2B3Sb9MD5RHHqu0-9yHT_MZE-lL/view?usp=sharing'}>{language == "french" ? "CV" : "Resumé"}</a>
            </li>
            <li className="font-semibold cursor-pointer ml-6 py-2 rounded-md" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                {language == "french" ? <span className='text-lg font-bold'>En</span> : <span className='text-lg font-bold'>Fr</span>}
            </li>
            <li className="flex flex-row items-center justify-center cursor-pointer ml-6 rounded-md list-none" onClick={() => toggleDarkMode()} >
                {dark ? <BsSunFill className='text-3xl' /> : <BsFillMoonStarsFill className='text-3xl' />}
            </li>
        </ul>
    )
}