import HTML from '../imgs/tech/html.png'
import JavaScript from '../imgs/tech/javascript.png'
import CSS from '../imgs/tech/css.png'
import PHP from '../imgs/tech/php.png'
import tailwind from '../imgs/tech/tailwind.png'
import react from '../imgs/tech/react.png'
import nextjs from '../imgs/tech/nextjs.png'
import laravel from '../imgs/tech/laravel.png'
import git from '../imgs/tech/git.png'
import mysql from '../imgs/tech/mysql.png'
import mongodb from '../imgs/tech/mongodb.png'
/* import photoshop from '../imgs/tech/photoshop.png'
import illustrator from '../imgs/tech/illustrator.png'
import adobe_xd from '../imgs/tech/adobe_xd.png'
import figma from '../imgs/tech/figma.png' */
import SkillCard from './SkillCard'
import React from 'react'

export default React.forwardRef(function Skills({ language, dark }, ref) {
    return (
        <div ref={ref}>
            <h1 className='flex justify-center text-3xl md:text-4xl font-bold uppercase mb-10 underline'>{language == "french" ? "Compétences" : "Skills"}</h1>
            <div className="flex flex-col justify-center items-center gap-12 md:flex-row md:flex-wrap mb-20">
                <SkillCard source={HTML} alter="HTML" title="HTML5" mainTitle="HTML" dark={dark}/* percentage={95} box="boxHTML" percent="percentHTML" */ />
                <SkillCard source={CSS} alter="CSS3" title="CSS3" mainTitle="CSS" dark={dark}/* percentage={85} box="boxCSS" percent="percentCSS" */ />
                <SkillCard source={tailwind} alter="Tailwind" title="Tailwind" dark={dark} mainTitle="Tailwind" /*percentage={80} box="boxTailwind" percent="percentTailwind" */ />
                <SkillCard source={JavaScript} alter="JavaScript" title="JavaScript" mainTitle="JavaScript" dark={dark}/* percentage={85} box="boxJS" percent="percentJS" */ />
                <SkillCard source={react} alter="React" title="React" mainTitle="React" dark={dark}/* percentage={80} box="boxReact" percent="percentReact" */ />
                <SkillCard source={nextjs} alter="Next.js" title="Next.js" mainTitle="Next.js" dark={dark}/* percentage={80} box="boxNext" percent="percentNext" */ />
                <SkillCard source={PHP} alter="PHP" title="PHP" mainTitle="PHP" dark={dark}/* percentage={80} box="boxPHP" percent="percentPHP" */ />
                <SkillCard source={laravel} alter="Laravel" title="Laravel" mainTitle="Laravel" dark={dark}/* percentage={85} box="boxLaravel" percent="percentLaravel" */ />
                <SkillCard source={mysql} alter="MySQL" title="MySQL" mainTitle="MySQL" dark={dark}/* percentage={90} box="boxMySQL" percent="percentMySQL" */ />
                <SkillCard source={mongodb} alter="MongoDB" title="MongoDB" mainTitle="MongoDB" dark={dark}/* percentage={60} box="boxMongoDB" percent="percentMongoDB" */ />
                <SkillCard source={git} alter="Git" title="Git" mainTitle="Git" dark={dark}/* percentage={75} box="boxGit" percent="percentGit" */ />
                {/* <SkillCard source={photoshop} alter="Photoshop" title="Photoshop" percentage={70} mainTitle="Photoshop" box="boxPhotoshop" percent="percentPhotoshop" />
                <SkillCard source={illustrator} alter="Illustrator" title="Illustrator" percentage={55} mainTitle="Illustrator" box="boxIllustrator" percent="percentIllustrator" />
                <SkillCard source={adobe_xd} alter="Adobe_XD" title="Adobe XD" percentage={75} mainTitle="Adobe XD" box="boxAdobe_XD" percent="percentAdobe_XD" />
                <SkillCard source={figma} alter="Figma" title="Figma" percentage={80} mainTitle="Figma" box="boxFigma" percent="percentFigma" /> */}
            </div>
        </div>
    )
})
