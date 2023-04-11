import React from 'react';
import { motion } from 'framer-motion';
import $ from 'jquery';

import { scroll } from "../App";
import spinner from '/assets/spinner.png'

// Animation code
const spin = {
  spin:{
    rotate:200000,
    transition: {
      ease: "linear",
      duration: 500
    }
  },
}

$('body').css('height', '100%').css('overflow', 'hidden');

// Loading function
window.addEventListener('load', () => {
  console.log('loaded ' + false);

  let ht = window.innerHeight / 1;

  // Actions
  $('#spin').delay(750).animate({bottom: ht}, 750, () => {
    $('#bg-spin').animate({opacity: 0}, 500, () => {
      $('#bg-spin').css('display', 'none');
      $('body').css('height', 'auto').css('overflow', 'auto');
      console.log('loaded ' + true);
    })
  });
});

// Component code
function Loader() {
  // Rendering
  return (
    <motion.div id='bg-spin' className='relative height-scr bg-zinc-900 flex justify-center items-center'>
      
      <motion.img id='spin' src={spinner} className='h-[5%] invert relative'
                  variants={spin} animate='spin'/>
    </motion.div>
  )
}

export default Loader;