import React from 'react';
                             
// Import file componenti
  // import FixedItems from './components/FixedItems';
import Switch from './components/Switch.jsx'
import Intro from './components/Intro';
import Skills from './components/Skills';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

// App
function App() { 
  return (
    <>

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