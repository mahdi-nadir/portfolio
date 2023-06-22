import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import introPic from '../imgs/introPicture.png'
import React from 'react';

export default React.forwardRef(function Intro({ language, dark }, ref) {
    return (
        <div ref={ref} className={dark ? "text-center py-10 px-2 pt-0" : "text-center py-10 px-2 pt-0"}>
            <div className="pic flex justify-center mx-auto mb-4 relative bg-gradient-to-b from-slate-100 rounded-full overflow-hidden">
                <img src={introPic} alt='IntroPic' />
            </div>
            <h2 className={dark ? "text-4xl pt-2 text-teal-400 font-medium font-bold mb-1" : "text-4xl pt-2 text-teal-600 font-medium font-bold mb-1"}>{language === "french" ? "Salut, je suis Mahdi" : "Hi, I'm Mahdi"}</h2>
            <h3 className={dark ? "text-2xl text-gray-200 mb-4" : "text-2xl text-gray-500 mb-4"}>{language === "french" ? "Développeur Full Stack" : "Full Stack Developer"}</h3>
            <p className={dark ? "text-gray-100 mb-8 text-center w-full md:w-1/2 mx-auto" : "text-gray-500 mb-8 text-center w-full md:w-1/2 mx-auto"}>{language === "french" ? "Je suis un développeur Full Stack compétent avec une passion pour la création d'expériences en ligne exceptionnelles. De la conception frontend précise des pixels en utilisant HTML, CSS et JavaScript, à la construction d'applications dynamiques avec React ou Next.js et des solutions backend en utilisant PHP et Laravel, je possède un ensemble de compétences complet pour créer des sites Web fluides et conviviaux. Avec un regard attentif pour l'UI/UX, j'intègre les derniers outils pour offrir des solutions numériques captivantes qui laissent une impression durable." : "I am a skilled full stack developer with a passion for crafting exceptional online experiences. From pixel-perfect frontend designs using HTML, CSS, and JavaScript, to building dynamic applications with React or Next.js and backend solutions using PHP and Laravel, I bring a comprehensive skill set to create seamless and user-friendly websites. With a keen eye for UI/UX, I integrate the latest tools to deliver captivating digital solutions that leave a lasting impact."}</p>

            {/* get in touch */}
            <div className="text-4xl flex flex-row flex-wrap justify-center">
                <ul className="flex items-center gap-6 mb-8">
                    <li className="">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/MehdiNip" className={dark ? " text-gray-200 hover:text-cyan-300" : " text-gray-500 hover:text-cyan-500"} title="Twitter"><AiFillTwitterCircle /></a>
                    </li>
                    <li className="">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahdi-nadir-36b39210a/" className={dark ? " text-gray-200 hover:text-cyan-700" : " text-gray-500 hover:text-cyan-900"} title="LinkedIn"><AiFillLinkedin /></a>
                    </li>
                    <li className="">
                        <a target="_blank" rel="noreferrer" href="https://github.com/mahdi-nadir" className={dark ? " text-gray-200 hover:text-black" : " text-gray-500 hover:text-black"} title="Github"><AiFillGithub /></a>
                    </li>
                </ul>
            </div>
        </div>
    )
})
