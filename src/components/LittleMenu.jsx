export default function LittleMenu({ handleLanguageToggle, language, open, setOpen, closeOrOpen, aboutClick, skillsClick, projectsClick, recoClick, contactClick }) {
    return (
        <ul onClick={() => closeOrOpen()} className="littleMenu flex flex-col items-center justify-center text-center absolute top-10 right-14 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-md p-3 mt-10">
            <li onClick={skillsClick} className="btn font-semibold cursor-pointer mb-2 text-white" title={language === 'french' ? "Compétences" : "Skills"}>
                {language == "french" ? "Compétences" : "Skills"}
            </li>
            <li onClick={projectsClick} className="btn font-semibold cursor-pointer mb-2 text-white" title={language === 'french' ? "Projets" : "Projects"}>
                {language == "french" ? "Projets" : "Projects"}
            </li>
            <li onClick={recoClick} className="btn font-semibold cursor-pointer mb-2 text-white" title={language === 'french' ? "Recommandations" : "Recommendations"}>
                {language == "french" ? "Recommandations" : "Recommendations"}
            </li>
            <li onClick={contactClick} className="btn font-semibold cursor-pointer mb-2 text-white" title="Contact">
                Contact
            </li>
            <li>
                <a target="_blank" title={language == "french" ? "CV en PDF" : "PDF Resume"} className="btn font-semibold cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white rounded-md" rel="noreferrer" href={language == 'french' ? 'https://drive.google.com/file/d/1T4hiK4GtGDWet5hFgihH0TLIvnCDwxhA/view?usp=sharing' : 'https://drive.google.com/file/d/1Sz8zb2B3Sb9MD5RHHqu0-9yHT_MZE-lL/view?usp=sharing'}>{language == "french" ? "Curriculum Vitae" : "Check My Resume"}</a>
            </li>
        </ul>
    )
}