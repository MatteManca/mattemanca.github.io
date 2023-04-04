import { useEffect } from 'react'; 
import { useInView } from '../../node_modules/react-intersection-observer';
import { inView, motion, useAnimation } from "framer-motion";

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
  }
}

const skillReveal = {
  // Heading reveal animation
  hidden:{ opacity:0 },
  visible:{ 
    opacity:1,
    transition:{
      type:'tween',
      duration:0.1,
    
      when:'beforeChildren',
      staggerChildren:0.1
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
    }
  }
}

let i = 0; // Temp check variable
let j = 0; // Temp check variable

// Component code
function Skills() {
  // Controllo inView HEADING
  const controlHeading = useAnimation()
  const [refHeading, inViewHeading] = useInView()
  
  useEffect(() => {
    if (!inView && i == 0) { 
      controlHeading.start("hidden");
      i++;
    } if (inView) {
      controlHeading.start("visible");
    }
  }, [controlHeading, inView]);

  // Controllo inView SKILLS
  const controlSkill = useAnimation()
  const [refSkill, inView] = useInView()
  
  useEffect(() => {
    if (!inView && j == 0) { 
      controlSkill.start("hidden");
      j++;
    } if (inView) {
      controlSkill.start("visible")
    }
  }, [controlSkill, inView]);
  
  // Rendering
  return (
    <div className='grid place-content-center min-h-screen max-h-fit xl:w-1/2 md:w-4/5 xs:w-full mx-auto'>
      <div className='my-16'>
        {/* Heading */}
        <motion.h1  className='font-bold sm:text-4xl xs:text-3xl md:mb-5 md:text-left xs:text-center'
                    ref={refHeading}
                    variants={headingReveal}
                    initial='hidden'
                    animate={controlHeading}>
          Skills
        </motion.h1>
        
        <motion.div variants={skillReveal} initial='hidden' animate={controlSkill} ref={refSkill}>
          {/* Skills iteration */}
          {skills.map(item => (
            <motion.div variants={skill} key={item.description} >
              <SkillItem
                grade={item.grade}
                title={item.title}
                description={item.description}
                technologies={item.technologies}

                key={item.title}
              />
            </motion.div>
          ))}
        </motion.div> 
      </div>
    </div>
  )
}

export default Skills;