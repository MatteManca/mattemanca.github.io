import React from 'react';
import MessageForm from './MessageForm';

function Contatti() {
  return (
    <div className='bg-zinc-900 h-fit text-slate-50'>
      <div className='xs:w-4/5 m-auto py-16 lg:columns-2'>

        {/* Section 1 - Contacts */}
        <div className='grid h-full w-full lg:border-r-[0.5px] border-gray-500 lg:text-left xs:text-center lg:mb-0 xs:mb-16'>
          <div>

            {/* Heading */}
            <h1 className='sm:text-4xl xs:text-3xl font-bold w-full ml-0'>
              Contattami
            </h1>

            {/* Description */}
            <p className='mt-5 lg:w-5/6 xs:w-4/5 lg:mx-0 xs:mx-auto sm:text-base xs:text-sm'>
              Contattami via <span className='text-sky-600'>email</span> o su <span className='text-sky-600'>instagram</span> per eventuali <span className='text-sky-600'>collaborazioni</span>!
            </p>

            {/* Icons - location/ig */}
            <div className='my-10 w-full'>
              {/* Position */}   
              <div className='flex flex-row lg:justify-start xs:justify-center mb-1'>
                <img src="/assets/Contacts/position.png" className='w-8 invert mr-2 lg:inline-block xs:hidden'/>
                <p className='my-auto sm:text-base xs:text-sm'>
                  <span className='text-sky-600 font-bold'>Palermo</span>, Italia
                </p>
              </div>

              {/* Instagram */}
              <div className='flex flex-row lg:justify-start xs:justify-center'>
                <img src="/assets/Contacts/instagram.png" className='w-8 invert mr-2 lg:inline-block xs:hidden'/>
                <p className='my-auto sm:text-base xs:text-sm'>
                  <a href="https://www.instagram.com/manca.matte/" target="_blank" className='underline lg:underline-offset-2 lg:text-base xs:text-sm'>
                    <span className='lg:hidden xs:inline'>@</span>manca.matte
                  </a>
                </p>
              </div>
            </div>

            {/* Bottom section */}
            <div className='text-xs opacity-50 mt-20 lg:block xs:hidden '>
              <a href="/assets/Files/cv.pdf" download className='underline underline-offset-2'>Download CV</a>
              <p className='mt-1'>&copy; {new Date().getFullYear()} - Matteo Manca </p>
            </div>

          </div>
        </div>

        {/* Section 2 - Contact form */}
        <div className='grid w-full h-full'>
          <div>
            
            <MessageForm />

          </div>
        </div>

      </div>
    </div>
  )
}

export default Contatti;