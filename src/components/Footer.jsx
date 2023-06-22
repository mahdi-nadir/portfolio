
import { GrReactjs } from 'react-icons/gr'
import { SiTailwindcss } from 'react-icons/si'

export default function Footer({ language }) {
    const GetYear = new Date()
    return (
        <div className='flex flex-col justify-center items-center h-24 mt-10 bg-black text-white'>
            <p>{language == "french" ? "Conçu et développé avec ❤ par " : "Designed and developed with ❤ by "}<b>Mahdi</b> </p>
            <p className="flex flex-row justify-center items-center gap-2">{language == "french" ? "Avec" : "With"} <GrReactjs className='text-2xl text-blue-300 font-extrabold' /> + <SiTailwindcss className='text-2xl text-blue-300' /></p>
            <p>© {GetYear.getFullYear()} - {language == "french" ? "Tous droits réservés" : "All rights reserved"}</p>
        </div>
    )
}