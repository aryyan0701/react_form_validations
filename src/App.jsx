import React from 'react';
import Navbar from './components/Navbar';
import Validation_1 from './components/Validation_1';
import Validation_2 from './components/Validation_2';
import Validation_3 from './components/Validation_3';
import Validation_4 from './components/Validation_4';
import Validation_5 from './components/Validation_5';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-slate-300'>
      <Navbar/>
      <div className="pt-[4rem]"> 
      <div id="validation1">
        <Validation_1/>
      </div>
      <div id="validation2">
        <Validation_2/>
      </div>
      <div id="validation3">
        <Validation_3/>
      </div>
      <div id="validation4">
        <Validation_4/>
      </div>
      <div id="validation5">
        <Validation_5/>
      </div>
    </div>
      <Footer/>
    </div>
  )
}

export default App;
