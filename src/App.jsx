import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Validation_1 from './components/Validation_1';

function App() {
  return (
      <div className='bg-slate-300'>
      <Navbar/>
      {/* <Validation_1/> */}
      </div>
  )
}

export default App