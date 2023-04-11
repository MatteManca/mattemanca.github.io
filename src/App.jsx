import React from 'react';
import { motion } from 'framer-motion'
import $ from 'jquery';
                             
// Import file componenti
// import FixedItems from './components/FixedItems';
// import Switch from './components/Switch.jsx'
import Loader from './components/Loader';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

// App
function App() { 

  // Rendering
    return (
      <>
        <Loader/>

        {/* Background color */}
        <div className='bg-slate-50 dark:bg-zinc-900 text-zinc-900 dark:text-slate-50 select-none overflow-hidden scroll-smooth overscroll-contain'>
         
          {/* <Switch /> */}
  
          {/* Margin container */}
          <div className='w-4/5 m-auto'>
            <Intro/>
            <Skills/>
          </div>
  
          <Contatti/>
          <Footer />
          
        </div>
      </>
    )
}

export default App;


// ALTRE FUNZIONI -------------------------
// Funzione di scroll
export function scroll() {
  window.scrollTo({
    top: window.innerHeight,
    left: 0,
    behavior : "smooth"
  })
}