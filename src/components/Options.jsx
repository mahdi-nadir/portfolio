import franceFlag from '../imgs/flags/franceflag.png'
import usaFlag from '../imgs/flags/usaflag.png'

export default function Options({ language, handleLanguageToggle, aboutClick, skillsClick, projectsClick, recoClick }) {
    return (
        <ul className="flex items-center">
            <li onClick={skillsClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Compétences" : "Skills"}>
                {language == "french" ? "Compétences" : "Skills"}
            </li>
            <li onClick={projectsClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Projets" : "Projects"}>
                {language == "french" ? "Projets" : "Projects"}
            </li>
            <li onClick={recoClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Recommandations" : "Recommendations"}>
                {language == "french" ? "Recommandations" : "Recommendations"}
            </li>
            <li className="btn">
                <a target="_blank" title={language == "french" ? "CV en PDF" : "PDF Resume"} className="btn cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6 font-semibold" rel="noreferrer" href={language == 'french' ? 'https://drive.google.com/file/d/1Tohw4U2A6PSur1vUjL557pwUyKn46VIT/view?usp=sharing' : 'https://drive.google.com/file/d/1owI04odM_GmNEiAUNyN8Pjqn-Hiqm4TV/view?usp=sharing'}>{language == "french" ? "Curriculum Vitae" : "Check My Resume"}</a>
            </li>
            <li className="font-semibold cursor-pointer ml-6 py-2 rounded-md" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                {language == "french" ? <img className='imgFlag' src={usaFlag} alt='En' /> : <img className='imgFlag' src={franceFlag} alt='Fr' />}
            </li>
        </ul>
    )
}