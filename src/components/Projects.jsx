import ProjectCard from './ProjectCard'
import React from 'react';


export default React.forwardRef(function Projects({ language }, ref) {
    return (
        <div ref={ref}>
            <h1 className='flex justify-center text-3xl md:text-4xl font-bold uppercase my-10 text-align underline'>{language === "french" ? "Projets" : "Projects"}</h1>

            <div className='boxProject flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-12 '>
                <ProjectCard
                    language={language}
                    title="Vino Bueno"
                    linkVidAdmin="https://drive.google.com/file/d/1DyBmS9A9mYDfSwHztkTHhErduMU2TYfX/view?usp=sharing"
                    soon={true}
                    linkVidUser="https://drive.google.com/file/d/1lvThb6jZgklLs6jZ4lB8rrnf1Y9L0-Sm/view?usp=sharing"
                    description={language === "french" ? "Cette plateforme simplifie la gestion de collections de vins. Les utilisateurs peuvent créer un compte, gérer des caves virtuelles et ajouter leurs propres bouteilles ou celles de la SAQ (Société des alcools du Québec). Les utilisateurs peuvent également modifier les quantités, marquer les bouteilles consommées et en ajouter de nouvelles. Des validations à la fois côté front-end et back-end sont mises en place pour garantir l'exactitude des données et renforcer la sécurité des données." : "This platform simplifies wine collection management. Users can create an account, manage virtual cellars, and add personal bottles or add those from SAQ (Société des alcools du Québec). Users can also modify quantities, mark consumed bottles and add new ones. Both front-end and Back-end validation validation are implmented for accuracy and enhancing data security."}
                    technologies={["CSS", "Bootstrap", "JavaScript", "Laravel", "MySQL"]}
                />

                <ProjectCard
                    language={language}
                    title="Gofbee"
                    linkVidUser="https://www.gofbee.com/"
                    soon={true}
                    description={language === "french" ? "Gofbee est un projet qui combine plusieurs fonctionnalités comme Uber Eats et Instacart. Il permet aux usagers résidant au Canada de commander de la nourriture et des courses dans des restaurants et des magasins. Les usagers peuvent parcourir les menus, ajouter des articles au panier et suivre les livraisons. Gofbee soutient les commerces locaux en offrant une plateforme pratique pour que les clients puissent découvrir et commander auprès des établissements à proximité." : "Gofbee is an app which combines tons of features like Uber Eats and Instacart. It allows users based in Canada to order food and groceries from local registred restaurants and stores. Users can browse menus, add items to the cart and track deliveries. Gofbee supports local businesses, providing a convenient platform for customers to discover and order from nearby establishments."}
                    technologies={["Bootstrap", "JavaScript", "Laravel", "MySQL"]}
                />

                <ProjectCard
                    language={language}
                    title="Maple Mind"
                    soon={false}
                    description={language === "french" ? "Ce projet est un blog sur l'immigration au Canada. Il s'agit d'une ressource complète et conviviale pour les personnes recherchant des informations sur la résidence permanente, les permis de travail, les permis d'études ou les visas touristiques. Avec un compte personnel, les utilisateurs peuvent poser des questions, mettre des articles en favoris, lire des articles informatifs rédigés par les administrateurs, participer à des messages privés et profiter de nombreuses autres fonctionnalités." : "This project is a blog on immigration to Canada. It is a comprehensive and user-friendly resource for individuals seeking information on permanent residency, work permits, study permits, or tourist visas. With a personal account, users can ask questions, bookmark posts, read informative articles written by the administrators, engage in private messaging, and many more features."}
                    technologies={["Tailwind", "JavaScript", "React", "Laravel", "MySQL"]}
                />


            </div >
        </div>
    )
})
