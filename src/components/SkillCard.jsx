export default function SkillCard({ source, alter, title, mainTitle }) {
    return (
        <div className="skillCard flex flex-col justify-center h-200 gap-0 items-center shadow-lg p-10 rounded-xl">
            <img className="tech mb-10 w-150 md:w-200 h-auto" src={source} alt={alter} title={title} />

            <div className="text mt-5">{mainTitle}</div>
        </div>
    )
}