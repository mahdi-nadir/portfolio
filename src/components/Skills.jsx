import React from 'react';
import { motion } from 'framer-motion';
import HTML from '../imgs/tech/html.png';
import JavaScript from '../imgs/tech/javascript.png';
import CSS from '../imgs/tech/css.png';
import PHP from '../imgs/tech/php.png';
import tailwind from '../imgs/tech/tailwind.png';
import react from '../imgs/tech/react.png';
import nextjs from '../imgs/tech/nextjs.png';
import laravel from '../imgs/tech/laravel.png';
import git from '../imgs/tech/git.png';
import mysql from '../imgs/tech/mysql.png';
import mongodb from '../imgs/tech/mongodb.png';
import SkillCard from './SkillCard';

export default React.forwardRef(function Skills({ language, dark }, ref) {
    const fadeInVariants = {
        initial: { opacity: 0, y: 100 },
        animate: (index) => ({
            opacity: 1,
            y: 0,
            transition: {/* 
                duration: 0.5,
                ease: "easeInOut", */
                delay: index * 0.15
            }
        })
    };

    const skillsData = [
        { source: HTML, alter: "HTML", title: "HTML5", mainTitle: "HTML" },
        { source: CSS, alter: "CSS3", title: "CSS3", mainTitle: "CSS" },
        { source: tailwind, alter: "Tailwind", title: "Tailwind", mainTitle: "Tailwind" },
        { source: JavaScript, alter: "JavaScript", title: "JavaScript", mainTitle: "JavaScript" },
        { source: react, alter: "React", title: "React", mainTitle: "React" },
        { source: nextjs, alter: "Next.js", title: "Next.js", mainTitle: "Next.js" },
        { source: PHP, alter: "PHP", title: "PHP", mainTitle: "PHP" },
        { source: laravel, alter: "Laravel", title: "Laravel", mainTitle: "Laravel" },
        { source: mysql, alter: "MySQL", title: "MySQL", mainTitle: "MySQL" },
        { source: mongodb, alter: "MongoDB", title: "MongoDB", mainTitle: "MongoDB" },
        { source: git, alter: "Git", title: "Git", mainTitle: "Git" },
    ];

    return (
        <div ref={ref}>
            <h1 className='flex justify-center text-3xl md:text-4xl font-bold uppercase mb-10 underline'>
                {language === "french" ? "Compétences" : "Skills"}
            </h1>
            <motion.div className="flex flex-col justify-center items-center gap-12 md:flex-row md:flex-wrap mb-20">
                {skillsData.map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={fadeInVariants}
                        initial="initial"
                        custom={index}
                        whileInView="animate"
                        viewport={{ once: true }}
                    >
                        <SkillCard
                            source={skill.source}
                            alter={skill.alter}
                            title={skill.title}
                            mainTitle={skill.mainTitle}
                            dark={dark}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
});
