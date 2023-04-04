import React from 'react';

function Footer() {
  return (
    <div className='bg-zinc-900 h-fit text-slate-50 py-5 text-center lg:hidden xs:block'>

      <div className='text-xs opacity-50'>
         <a href="../../assets/Files/cv.pdf" download 
            className='underline underline-offset-2'> Download CV </a>
         <p className='mt-1'>&copy; {new Date().getFullYear()} - Matteo Manca </p>
      </div>
        
    </div>
  )
}

export default Footer;


