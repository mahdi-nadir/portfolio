import * as AiIcons from 'react-icons/ai';
import introPic from '../imgs/introPicture.png'
import { BsWhatsapp } from 'react-icons/bs'
import React from 'react';

export default React.forwardRef(function Intro({ language }, ref) {
    return (
        <div ref={ref} className="text-center py-10 px-6 pt-0">
            <div className="pic flex justify-center mx-auto mb-4 relative bg-gradient-to-b from-slate-200 rounded-full overflow-hidden">
                <img src={introPic} />
            </div>
            <h2 className="text-4xl py-2 text-teal-600 font-medium font-bold mb-4">{language === "french" ? "Salut, je suis Mahdi" : "Hi, I'm Mahdi"}</h2>
            <h3 className="text-2xl text-gray-500 mb-4">{language === "french" ? "Développeur Full Stack" : "Full Stack Developer"}</h3>
            <p className="text-gray-500 mb-8 text-center w-full md:w-1/2 mx-auto">{language === "french" ? "Je suis un développeur Full Stack compétent avec une passion pour la création d'expériences en ligne exceptionnelles. De la conception frontend précise des pixels en utilisant HTML, CSS et JavaScript, à la construction d'applications dynamiques avec React et des solutions backend en utilisant PHP et Laravel, je possède un ensemble de compétences complet pour créer des sites Web fluides et conviviaux. Avec un regard attentif pour l'UI/UX, j'intègre les derniers outils pour offrir des solutions numériques captivantes qui laissent une impression durable." : "I am a skilled full stack developer with a passion for crafting exceptional online experiences. From pixel-perfect frontend designs using HTML, CSS, and JavaScript, to building dynamic applications with React and backend solutions using PHP and Laravel, I bring a comprehensive skill set to create seamless and user-friendly websites. With a keen eye for UI/UX, I integrate the latest tools to deliver captivating digital solutions that leave a lasting impact."}</p>

            {/* get in touch */}
            <div className="text-4xl flex flex-row flex-wrap justify-center">
                <ul className="flex items-center gap-6 mb-8">
                    <li className="">
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/MehdiNip" className=" text-gray-500 hover:text-cyan-500" title="Twitter"><AiIcons.AiFillTwitterCircle /></a>
                    </li>
                    <li className="">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mahdi-nadir-36b39210a/" className=" text-gray-500 hover:text-cyan-900" title="LinkedIn"><AiIcons.AiFillLinkedin /></a>
                    </li>
                    {/* <li className="">
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/medyzeus" className=" text-gray-500 hover:text-blue-600" title="Facebook"><AiIcons.AiFillFacebook /></a>
                    </li> */}
                    <li className="">
                        <a target="_blank" rel="noreferrer" href="https://github.com/mahdi-nadir" className=" text-gray-500 hover:text-black" title="Github"><AiIcons.AiFillGithub /></a>
                    </li>
                    {/* <li className="">
                        <a target="_blank" rel="noreferrer" href="mailto:mehdinip@gmail.com" className=" text-gray-500 hover:text-red-300" title="Gmail"><AiIcons.AiFillGoogleCircle /></a>
                    </li> */}
                    {/* <li className="">
                        <a target="_blank" rel="noreferrer" href="mailto:mahdi_a_nadir@yahoo.com" className=" text-gray-500 hover:text-violet-800" title="Yahoo"><AiIcons.AiFillYahoo /></a>
                    </li> */}
                    {/* <li className="">
                        <a href="tel:0015142471952" className=" text-gray-500 hover:text-black" title={language === "french" ? "Téléphone" : "Phone"}><AiIcons.AiFillPhone /></a>
                    </li> */}
                    {/* <li className="">
                        <a href="https://wa.me/0015142471952" className=" text-gray-500 hover:text-green-500" title="WhatsApp"><BsWhatsapp /></a>
                    </li> */}
                </ul>
            </div>
        </div>
    )
})
