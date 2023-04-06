import React from 'react';
import Grades from './Grades';

// Component code
function SkillsItem({ grade, title, description, technologies }) {
  // Rendering
  return (
    <div  className='w-full md:my-7 xs:my-2 inline-flex md:flex-row xs:flex-col'>
      
      {/* Grade */}
      <Grades value={grade}/>
      
      {/* Separatore */}
      <div className='w-[3px] bg-gray-300 rounded-lg mx-7 md:block xs:hidden'/>

      {/* Content */}
      <div className='my-auto'>
        <h3 className='sm:text-xl font-bold mb-2 md:text-left xs:text-center'>{title}</h3>
        <p className='md:text-left xs:text-center sm:text-base xs:text-sm'>{description}</p>

        {/* Technologies tags */}
        <div className='mt-4 md:text-left text-center md:block xs:flex xs:flex-wrap xs:justify-center md:scale-100 xs:scale-90'>
          {technologies.map(tech => (
            <span className='mt-2 py-1 px-3 mr-2 bg-zinc-900 dark:bg-transparent dark:outline dark:outline-1 text-slate-50 rounded-md text-xs md:hover:opacity-80 transition-all ease-in-out duration-200' key={tech}>
                {tech}
            </span>
          ))}
        </div>

      </div>
      
    </div>
  )
}

export default SkillsItem;




