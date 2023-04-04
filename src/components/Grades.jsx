import React from 'react';

function Grades({ value }) {

   // Array population
   let grades = [];

   for(let i = 0; i < 5; i++) {
      if(i < value) grades.push(<div className='w-3 h-3 md:bg-gray-800 xs:bg-sky-600 rounded-full my-1'/>);
      else grades.push(<div className='w-3 h-3 md:bg-gray-300 xs:bg-sky-200 rounded-full my-1'/>);
   }

   // Actual component
   return(
      <div className='grid place-content-center md:py-1 md:m-0 xs:mt-2 xs:-mb-5 md:rotate-180 xs:-rotate-90'>
         {grades.map((grade) => <span key={Math.random()}>{grade}</span>)}
      </div>

   )
}

export default Grades;
