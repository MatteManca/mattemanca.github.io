import React from 'react';
// import AnimatedCursor from "react-animated-cursor"
                             
// Import file componenti
  // import FixedItems from './components/FixedItems';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Contatti from './components/Contatti';
import Footer from './components/Footer';

// App
function App() {

  return (
    <>
      {/* Cursore */}
      {/*<AnimatedCursor 
        innerSize={6}
        outerSize={25}
        color='255,0,0'
        outerAlpha={0}
        outerStyle={{
          border: '2px solid rgb(255 , 0, 0)',
        }}
        innerScale={0.8}
        outerScale={1.4}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      {/* Background color */}
      <div className='bg-slate-50 text-zinc-900 select-none overflow-hidden scroll-smooth overscroll-contain'>
       
        {/* Margin container */}
        <div className='w-4/5 m-auto'>
          <Intro/>
          <Skills id='skills'/>
        </div>

      <Contatti/>
      <Footer />
        
      </div>
    </>
  )
}

export default App;