function LittleMenu({ handleLanguageToggle, language, open, setOpen, closeOrOpen, aboutClick, skillsClick, projectsClick, recoClick }) {
    return (
        <ul onClick={() => closeOrOpen()} className="littleMenu flex flex-col items-center justify-center text-center absolute top-10 right-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md p-3 mt-10">
            {/* <li className="font-semibold cursor-pointer mb-2 text-white" onClick={handleLanguageToggle} title={language === 'french' ? "A propos de moi" : "About me"}>
                {language == "french" ? "A propos de moi" : "About me"}
            </li> */}
            <li onClick={skillsClick} className="font-semibold cursor-pointer mb-2 text-white" title={language === 'french' ? "Compétences" : "Skills"}>
                {language == "french" ? "Compétences" : "Skills"}
            </li>
            <li onClick={projectsClick} className="font-semibold cursor-pointer mb-2 text-white" title={language === 'french' ? "Projets" : "Projects"}>
                {language == "french" ? "Projets" : "Projects"}
            </li>
            <li onClick={recoClick} className="font-semibold cursor-pointer mb-2 text-white" title={language === 'french' ? "Recommandations" : "Recommendations"}>
                {language == "french" ? "Recommandations" : "Recommendations"}
            </li>

            <li>
                <a target="_blank" title={language == "french" ? "CV en PDF" : "PDF Resume"} className="font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md" rel="noreferrer" href={language == 'french' ? 'https://drive.google.com/file/d/10UKYIhQjIYR0AfQD9e9iX9x1ZeV4iTbX/view?usp=sharing' : 'https://drive.google.com/file/d/1ah7zzntrHMYSLVkWfm3irvO9-TEQVnik/view?usp=sharing'}>{language == "french" ? "Curriculum Vitae" : "Check My Resume"}</a>
            </li>

        </ul>
    )
}

export default LittleMenu