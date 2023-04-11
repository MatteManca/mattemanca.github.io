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

  // Actions
  $('#spin').delay(750).animate({top: '-50px'}, 500, () => {
    $('#bg-spin').animate({opacity: 0}, 500, () => {
      $('#bg-spin').hide();
      $('body').css('height', 'auto').css('overflow', 'auto');
      console.log('loaded ' + true);
    })
  });
});

// Component code
function Loader() {
  // Rendering
  return (
    <motion.div id='bg-spin' className='relative height-scr w-full bg-zinc-900 place-content-center'>
      <motion.img id='spin' src={spinner} className='h-[5%] invert absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
                  variants={spin} animate='spin'/>
    </motion.div>
  )
}

export default Loader;