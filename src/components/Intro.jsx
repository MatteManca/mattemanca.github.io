import React from 'react';
import { motion } from 'framer-motion';

// Animations code
const imgAnim = {
  // Intro image animation
  hidden:{ y:-50, opacity:0 },
  visible:{ 
    y:0, opacity:1,
    transition:{
      y:{ type:'spring', velocity:1 } ,
      opacity:{ type:'tween', duration:0.7 },
    }
  },
  hovering:{
    scale:0.95, 
    transition:{ type:'tween', duration:0.3 }
  }
}

const infoBoxAnim = {
  // Info text box animation - for cascading
  hidden:{ opacity:0 },
  visible:{ 
    opacity:1,
    transition:{
      opacity:{ type:'tween', duration:0.1 },

      when: 'beforeChildren',
      staggerChildren:0.1
    }
  } 
}

const infoTextAnim = {
  // Info text animation - cascade
  hidden:{ y:10, opacity:0 },
  visible:{ 
    y:0, opacity:1,
    transition:{
      y:{ type:'spring', duration:0.7 } ,
      opacity:{ type:'tween', duration:0.5 },
    }
  } 
}

// Component code
function Intro() {
  return (
    <>
      {/* FullPage size - 2 Column division */}
      <div className='height-scr w-full flex lg:flex-row xs:flex-col'>

        {/* Section 1 - Image placing */}
        <div className='flex-1 flex justify-center place-content-center lg:h-full'>
          {/* Image */}
          <motion.img src="/assets/Intro_Photo.png" 
                      className='xl:w-2/4 lg:w-4/6 md:w-2/5 sm:w-2/4 xs:w-2/3 m-auto drop-shadow-xl'
                      
                      variants={imgAnim}
                      initial='hidden' 
                      animate='visible'
                      whileHover='hovering'
          />
        </div>

        {/* Section 2 - Description */}
        <div className='flex-1 grid place-content-center lg:my-auto'> 
          <motion.div variants={infoBoxAnim} 
                      initial='hidden' animate='visible'
          >            
            {/* Heading */}
            <motion.h1  className='font-bold sm:text-4xl xs:text-3xl mb-2 lg:text-left xs:text-center'
                        variants={infoTextAnim}>
              Ciao, sono <span className='text-sky-600'>Matteo</span>!
            </motion.h1>

            {/* Label */}
            <motion.p className='mb-6 lg:text-left xs:text-center text-xs text-stone-500 dark:text-slate-50'
                        variants={infoTextAnim}>
              IT Consultant @ Tri-Tech Solutions s.r.l.
            </motion.p> 

            {/* Descrizione */}
            <motion.p className='lg:w-11/12 md:w-4/5 xs:w-full lg:m-0 xs:m-auto lg:text-left xs:text-center sm:text-base xs:text-sm'
                        variants={infoTextAnim}>
              Sono appassionato di <span className='text-sky-600'>Videomaking</span>, <span className='text-sky-600'>Fotografia</span> e tutto ciò che riguarda l’<span className='text-sky-600'>ambito creativo</span>.
              Mi piace andare oltre le mie stesse capacità per il raggiungimento di <span className='text-sky-600'>nuovi obiettivi</span>, migliorare le mie <span className='text-sky-600'>competenze</span> e acquisirne di nuove. 
            </motion.p>


            {/* Scroll Down text */}
            <motion.p className=' lg:mx-0 xs:mx-auto mt-10 lg:text-left xs:text-center sm:text-xs xs:text-[0.7rem] text-stone-500 dark:text-slate-50 cursor-pointer lg:hover:underline underline-offset-2' 
                      onClick={scroll}
                      variants={infoTextAnim}>
              <img src='/assets/down_arrow.svg' className='sm:w-7 xs:w-5 inline-block mr-2 opacity-50 dark:invert dark:opacity-100' />
              Scorri la pagina per avere maggiori informazioni. 
            </motion.p>
            

          </motion.div>
        </div>

      </div>

    </>
  )
}

export default Intro;


// ALTRE FUNZIONI -------------------------
// Funzione di scroll
function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    left: 0,
    behavior : "smooth"
  })
}