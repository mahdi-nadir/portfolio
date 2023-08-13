import ProjectCard from './ProjectCard'
import React from 'react';
import { motion } from 'framer-motion';


export default React.forwardRef(function Projects({ language, dark }, ref) {
    const fadeInVariants = {
        initial: { opacity: 0, y: 100 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.15 * index
            }
        })
    };

    const projects = [
        {
            title: "Vino Bueno",
            linkVidAdmin: "https://drive.google.com/file/d/1DyBmS9A9mYDfSwHztkTHhErduMU2TYfX/view?usp=sharing",
            linkVidUser: "https://drive.google.com/file/d/1lvThb6jZgklLs6jZ4lB8rrnf1Y9L0-Sm/view?usp=sharing",
            codeGithub: "https://github.com/vinolaravel/vinolaravelwebsite",
            soon: true,
            description: {
                french: "Cette plateforme simplifie la gestion de collections de vins. Les utilisateurs peuvent créer un compte, gérer des caves virtuelles et ajouter leurs propres bouteilles ou celles de la SAQ (Société des alcools du Québec). Les utilisateurs peuvent également modifier les quantités, marquer les bouteilles consommées et en ajouter de nouvelles. Des validations à la fois côté front-end et back-end sont mises en place pour garantir l'exactitude des données et renforcer la sécurité des données.",
                english: "This platform simplifies wine collection management. Users can create an account, manage virtual cellars, and add personal bottles or add those from SAQ (Société des alcools du Québec). Users can also modify quantities, mark consumed bottles and add new ones. Both front-end and Back-end validation validation are implmented for accuracy and enhancing data security."
            },
            technologies: ["CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"]
        },
        {
            title: "Gofbee",
            linkVidUser: "https://www.gofbee.com/",
            codeGithub: "",
            soon: true,
            description: {
                french: "Gofbee est un projet qui combine plusieurs fonctionnalités comme Uber Eats et Instacart. Il permet aux usagers résidant au Canada de commander de la nourriture et des courses dans des restaurants et des magasins. Les usagers peuvent parcourir les menus, ajouter des articles au panier et suivre les livraisons. Gofbee soutient les commerces locaux en offrant une plateforme pratique pour que les clients puissent découvrir et commander auprès des établissements à proximité.",
                english: "Gofbee is an app which combines tons of features like Uber Eats and Instacart. It allows users based in Canada to order food and groceries from local registred restaurants and stores. Users can browse menus, add items to the cart and track deliveries. Gofbee supports local businesses, providing a convenient platform for customers to discover and order from nearby establishments."
            },
            technologies: ["Bootstrap", "JavaScript", "Laravel", "MySQL"]
        },
        {
            title: "Blackjack Game",
            linkVidUser: "https://blackjack-olive.vercel.app/",
            codeGithub: "https://github.com/mahdi-nadir/blackjackGame",
            soon: true,
            description: {
                french: "Blackjack, comme son nom l'indique, est une application du jeu célèbre blackjack avec 2-4 joueurs. Avec un lecteur de musique intégré avec des mix bien rythmés, une explication détaillée des règles du jeu, une Interface Utilisateur (UI) attrayant et affichage responsive, Blackjack offre une expérience exceptionnelle en terme de divertissement. Jouez dès maintenant, appréciez le défi et plongez dans l'excitation du jeu où que vous soyez.",
                english: "Blackjack is an application of the famous blackjack game with 2-4 players. With a built-in music player featuring well-paced mixes, a detailed explanation of the game rules, an attractive User Interface (UI), and responsive display, Blackjack offers an exceptional entertainment experience. Play now, enjoy the challenge, and immerse yourself in the excitement of the game wherever you are."
            },
            technologies: ["CSS", "JavaScript"]
        },
        {
            title: "Maple Mind",
            codeGithub: "",
            soon: false,
            description: {
                french: "Ce projet est un blog sur l'immigration au Canada. Il s'agit d'une ressource complète et conviviale pour les personnes recherchant des informations sur la résidence permanente, les permis de travail, les permis d'études ou les visas touristiques. Avec un compte personnel, les utilisateurs peuvent poser des questions, mettre des articles en favoris, lire des articles informatifs rédigés par les administrateurs, participer à des messages privés et profiter de nombreuses autres fonctionnalités.",
                english: "This project is a blog on immigration to Canada. It is a comprehensive and user-friendly resource for individuals seeking information on permanent residency, work permits, study permits, or tourist visas. With a personal account, users can ask questions, bookmark posts, read informative articles written by the administrators, engage in private messaging, and many more features."
            },
            technologies: ["Tailwind", "JavaScript", "React", "Laravel", "MySQL"]
        },
        {
            title: "MapleMind Tools",
            linkVidUser: "https://maplemind.netlify.app/",
            codeGithub: "https://github.com/mahdi-nadir/canadianImmigrationTools.git",
            soon: true,
            description: {
                french: "Cette application web (toujours en cours de développement) est conçue pour faciliter le processus d'immigration au Canada. Avec une gamme complète d'outils, les candidats peuvent calculer leur score d'admissibilité, le score de classement global, le score des compétences linguistiques et explorer les différents programmes d'immigration disponibles. Aussi, les utilisateurs peuvent obtenir des informations clés sur leurs chances de réussite dans leur projet d'immigration",
                english: "This web application (still under development) is designed to streamline the immigration process to Canada. With a comprehensive range of tools, candidates can calculate their eligibility score, global ranking score, language proficiency score, and explore various available immigration programs. Additionally, users can gain key insights into their chances of success in their immigration project."
            },
            technologies: ["Tailwind", "JavaScript"]
        }
    ];

    return (
        <div ref={ref}>
            <h1 className='flex justify-center text-3xl md:text-4xl font-bold uppercase my-10 text-align underline'>{language === "french" ? "Projets" : "Projects"}</h1>

            <motion.div className='boxProject flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-12'>
                {projects.map((project, index) => (
                    <motion.div key={index}
                        variants={fadeInVariants}
                        initial="initial"
                        custom={index}
                        whileInView="animate"
                        viewport={{ once: true }}>
                        <ProjectCard
                            dark={dark}
                            language={language}
                            title={project.title}
                            linkVidAdmin={project.linkVidAdmin}
                            linkVidUser={project.linkVidUser}
                            codeGithub={project.codeGithub}
                            soon={project.soon}
                            description={project.description[language]}
                            technologies={project.technologies}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
})

