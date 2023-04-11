import { motion, useAnimation } from "framer-motion";

import SkillItem from './SkillsItem';
import skills from '../data/skills'

// Animations code
const headingReveal = {
  // Heading reveal animation
  hidden:{ x:-50, opacity:0 },
  visible:{ 
    x:0, opacity:1,
    transition:{
      x:{ type:'spring', velocity:0.5 } ,
      opacity:{ type:'tween', duration:0.6 },
    }
  },
}

const skill = {
  hidden:{ x:-50, opacity:0 },
  visible:{
    x:0, opacity:1,
    transition:{
      x:{ type:'spring', velocity:0.5 } ,
      opacity:{ type:'tween', duration:0.6 },
      delay:0.15
    }
  },
}

// Component code
function Skills() {  
  // Rendering
  return (
    <div className='grid place-content-center min-h-screen max-h-fit xl:w-1/2 md:w-4/5 xs:w-full mx-auto'>
      <div className='my-16'>
        {/* Heading */}
        <motion.h1  className='font-bold sm:text-4xl xs:text-3xl md:mb-5 md:text-left xs:text-center'
                    variants={headingReveal}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{once:true}}>
          Skills
        </motion.h1>
        
          {/* Skills iteration */}
          {skills.map(item => (
            <motion.div variants={skill} 
                        initial='hidden'
                        whileInView='visible'
                        viewport={{once:true}}
                        key={item.description} >
              <SkillItem
                grade={item.grade}
                title={item.title}
                description={item.description}
                technologies={item.technologies}

                key={item.title}
              />
            </motion.div>
          ))}
      </div>
    </div>
  )
}

export default Skills;