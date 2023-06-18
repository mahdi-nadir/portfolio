function Options({ language, handleLanguageToggle, aboutClick, skillsClick, projectsClick, recoClick }) {
    return (
        <ul className="flex items-center">
            {/* <li onClick={aboutClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md" title={language === 'french' ? "A propos de moi" : "About me"}>
                {language == "french" ? "A propos de moi" : "About me"}
            </li> */}
            <li onClick={skillsClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Compétences" : "Skills"}>
                {language == "french" ? "Compétences" : "Skills"}
            </li>
            <li onClick={projectsClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Projets" : "Projects"}>
                {language == "french" ? "Projets" : "Projects"}
            </li>
            <li onClick={recoClick} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" title={language === 'french' ? "Recommandations" : "Recommendations"}>
                {language == "french" ? "Recommandations" : "Recommendations"}
            </li>
            <li className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white ml-6 px-4 py-2 rounded-md" onClick={handleLanguageToggle} title={language === 'french' ? "Switch to English" : "Passer au français"}>
                {language == "french" ? "En" : "Fr"}
            </li>
            <li className="btn">
                <a target="_blank" title={language == "french" ? "CV en PDF" : "PDF Resume"} className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-6 font-semibold" rel="noreferrer" href={language == 'french' ? 'https://drive.google.com/file/d/10UKYIhQjIYR0AfQD9e9iX9x1ZeV4iTbX/view?usp=sharing' : 'https://drive.google.com/file/d/1ah7zzntrHMYSLVkWfm3irvO9-TEQVnik/view?usp=sharing'}>{language == "french" ? "Curriculum Vitae" : "Check My Resume"}</a>
            </li>

        </ul>
    )
}

export default Options