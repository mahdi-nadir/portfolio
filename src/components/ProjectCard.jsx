import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

export default function ProjectCard({ language, title, linkVidAdmin, linkVidUser, description, technologies, soon, dark }) {
    return (
        <div className={dark ? 'boxProjectContainer flex flex-col shadow-lg shadow-gray-600 rounded py-4 sm:w-1/2' : 'boxProjectContainer flex flex-col shadow-lg rounded py-4 sm:w-1/2'} style={{ maxWidth: '400px', maxHeight: '800px' }}>
            <h2 className={dark ? "textDark" : "text"}>{title}</h2>
            <div className="flex flex-col justify-between items-center text-center p-4" >
                <div className="flex flex-col items-center justify-center h-14">
                    <div className="flex flex-row justify-center items-center gap-x-4">
                        {soon && linkVidAdmin ? <a className="text-blue-400 underline pl-4 pr-2 md:text-xl" href={linkVidAdmin} target="_blank" rel="noopener noreferrer">{language === "french" ? "Panneau d'administration" : "Admin Panel"}</a> : ''}
                        {soon && linkVidAdmin ? <MdOutlineKeyboardDoubleArrowRight className="arrow text-blue-400 md:text-xl" /> : ''}
                        {!soon && <a className="comingSoon text-blue-400 underline py-4 md:text-xl" href="#">{language === "french" ? "Bientôt disponible..." : "Coming Soon..."}</a>}
                    </div>

                    {soon && linkVidUser ? <div className="flex flex-row justify-center items-center gap-4">
                        <a className="text-blue-400 underline pl-4 pr-2 md:text-xl" href={linkVidUser} target="_blank" rel="noopener noreferrer">{language === "french" ? "Espace Utilisateur" : "User Panel"}</a>
                        <MdOutlineKeyboardDoubleArrowRight className="arrow text-blue-400 md:text-xl" />
                    </div> : ''}
                </div>
                <div className="description">
                    <h1 className="pt-6 pb-2 md:text-xl font-semibold uppercase">Description</h1>
                    <p className={dark ? 'text-gray-100 text-center px-4' : 'text-gray-500 text-center px-4'}>{description}</p>

                    <h1 className="pt-6 pb-2 md:text-xl font-semibold uppercase">Technologies</h1>

                    <div className="flex flex-row flex-wrap justify-center items-center gap-4">
                        {technologies.map((tech, index) => {
                            return <p key={index} className={dark ? "text-gray-100 text-center" : "text-gray-500 text-center"}>{tech}</p>
                        })}
                    </div>
                </div>

            </div>
        </div >
    )
}