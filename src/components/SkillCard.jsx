export default function SkillCard({ source, alter, title, mainTitle, dark }) {
    return (
        <div className={dark ? "skillCard flex flex-col justify-center h-200 gap-0 items-center shadow-lg shadow-gray-600 hover:shadow-gray-400 p-10 rounded-xl" : "skillCard flex flex-col justify-center h-200 gap-0 items-center shadow-lg hover:shadow-xl  p-10 rounded-xl"}>
            <img className="tech mb-10 w-150 md:w-200 h-auto" src={source} alt={alter} title={title} />

            <div className={dark ? "textDark mt-5" : "text mt-5"}>{mainTitle}</div>
        </div>
    )
}