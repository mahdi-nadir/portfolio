import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RiAdminLine } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import { DiGithubAlt } from 'react-icons/di'
// import { CiTimer } from 'react-icons/ci'


export default function ProjectCard({ language, title, linkVidAdmin, linkVidUser, description, technologies, soon, dark, codeGithub }) {
    return (
        <div className={dark ? 'boxProjectContainer flex flex-col shadow-lg shadow-gray-600 rounded py-4 sm:w-1/2' : 'boxProjectContainer flex flex-col shadow-lg rounded py-4 sm:w-1/2'} style={{ maxWidth: '400px', maxHeight: '800px' }}>
            <h2 className={dark ? "textDark" : "text"}>{title}</h2>
            <div className="flex flex-col justify-between items-center text-center p-4" >
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row justify-center items-center">
                        {soon && linkVidAdmin ? <a className="text-3xl pl-4 pr-2 md:text-4xl" href={linkVidAdmin} title={language === "french" ? "Panneau d'administration" : "Admin Panel"} target="_blank" rel="noopener noreferrer"><RiAdminLine className="hover:scale-110 hover:border-b-2" /></a> : ''}
                        {!soon && <a className="comingSoon text-blue-400 md:text-xl" href="#">{language === "french" ? "Bientôt disponible..." : "Coming Soon..."}{/* <CiTimer className="hover:scale-110 hover:border-b-2" /> */}</a>}

                    </div>

                    {soon && linkVidUser ? <div className="flex flex-row justify-center items-center">
                        <a className="text-3xl pl-4 pr-2 md:text-4xl" href={linkVidUser} target="_blank" title={language === "french" ? "Espace Utilisateur" : "User Panel"} rel="noopener noreferrer"><AiOutlineUser className="hover:scale-110 hover:border-b-2" /></a>
                    </div> : ''}

                    {codeGithub != '' ? <div className="flex flex-row justify-center items-center">
                        <a className="text-3xl pl-4 pr-2 md:text-4xl" href={codeGithub} target="_blank" title={language === "french" ? "Code GitHub" : "GitHub Code"} rel="noopener noreferrer"><DiGithubAlt className="hover:scale-110 hover:border-b-2" /></a>
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