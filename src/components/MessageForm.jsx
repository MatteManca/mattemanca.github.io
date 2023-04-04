import React from 'react';

function MessageForm() {
  return (
    <>
      <form action='https://getform.io/f/7d7649c0-d4a3-4c24-9077-fb672f5529e8'
            method='POST' autoComplete='off'
            className='flex flex-col lg:justify-end xs:justify-center lg:w-10/12 lg:float-right lg:mx-0 xs:mx-auto'>

         {/* Name */}
         <input type="text" name='name' placeholder='Nome' required
                className='bg-transparent border-x-0 border-t-0 w-full focus:ring-0 focus:border-sky-60 sm:text-base xs:text-sm'/>

         {/* Email */}
         <input type='email' name='email' placeholder='Email' required
               className='bg-transparent border-x-0 border-t-0 w-full focus:ring-0 focus:border-sky-600 mt-2 sm:text-base xs:text-sm'/>
         
         {/* Details */}
         <textarea name='details' placeholder='Il tuo messaggio' rows='5' required
               className='bg-transparent border-x-0 border-t-0 w-full h-full focus:ring-0 focus:border-sky-600 mt-2 
                           resize-none sm:text-base xs:text-sm'/>

         {/* Submit btn */}
         <button type='submit' className='sm:text-base xs:text-sm mx-auto w-32 py-1 mt-7 rounded-lg ring-2 ring-sky-600 
                                        md:hover:ring-lime-600 transition-all duration-300'> 
          Invia 
         </button>

      </form>
    </>         
  )
}

export default MessageForm;