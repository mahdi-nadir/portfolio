import RecoComponent from './RecoComponent'
// import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import yacine from '../imgs/persons/yacine.jpeg'
import elmehdi from '../imgs/persons/elmehdi.jpeg'
import avatarMan from '../imgs/persons/avatarMan.jpg'
import avatarWoman from '../imgs/persons/avatarWoman.jpeg'
import React from 'react'

export default React.forwardRef(function Recommandations({ language }, ref) {
    return (
        <div ref={ref} className='mt-20'>
            <h1 className='flex justify-center text-3xl md:text-4xl font-bold uppercase mb-10 underline'>{language == "french" ? "Recommandations" : "Recommendations"}</h1>
            <div className='bg-gray-50 mb-20'>
                <motion.div className='carousel'>
                    <motion.div className='inner-carousel flex flex-col justify-center items-center gap-14 md:flex-row md:flex-wrap'>

                        <RecoComponent
                            picture={yacine}
                            name="Yacine"
                            linkedInLink="https://www.linkedin.com/in/mohamed-yacine-aouiche/"
                            job={language == 'french' ? "Ingénieur Réseau" : "Network Engineer"}
                            recommandation={language == 'french' ? "Sa motivation inébranlable est une source d'inspiration. Sa détermination est remarquable et lui mènera sûrement vers de grands succès." : "His unwavering motivation is a source of inspiration. His determination is remarkable as well and will lead you to great success for sure."}
                        />

                        <RecoComponent
                            picture={elmehdi}
                            name="ElMehdi"
                            linkedInLink="https://www.linkedin.com/in/el-mehdi-boudnaoui/"
                            job={language == 'french' ? "Développeur Front-end" : "Front-end Developer"}
                            recommandation={language == 'french' ? "Son attention aux détails et sa capacité à fournir des résultats exceptionnels font de lui un professionnel fiable et compétent. Je lui recommande chaudement." : "His attention to detail and ability to deliver outstanding results make him a reliable and competent professional. I highly recommend him."}
                        />

                        <RecoComponent
                            picture={avatarWoman}
                            name="Emy"
                            job={language == 'french' ? "Développeuse Full-stack" : "Full-stack Developer"}
                            recommandation={language == 'french' ? "Son expertise et sa créativité ont été des atouts majeurs dans notre petite collaboration. Un très bon élément qui a su dépasser mes attentes" : "His expertise and creativity have been major assets in our collaboration. He's really an excellent team member who exceeded my expectations."}
                        />

                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
})

// export default React.forwardRef(Recommandations)