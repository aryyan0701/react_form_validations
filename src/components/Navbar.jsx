import React, {useState } from 'react'
import Validation_1 from "./Validation_1"
import Validation_2 from './Validation_2'
import Validation_3 from './Validation_3';
import Validation_4 from './Validation_4';
import Validation_5 from './Validation_5';

function Navbar() {
    const [activeComponent, setActiveComponent] = useState('Validation_1');

    const handleComponentChange = (componentName) => {
      setActiveComponent(componentName);
    };
  return (
    <>
    <div className='w-full h-[4rem] bg-neutral-400 text-gray-800 flex flex-row items-center justify-between p-5'>
        <div className='text-xl font-semibold cursor-pointer hover:scale-110 transition-transform' onClick={() => handleComponentChange('Validation_1')}>HTML5 Form Validation</div>
        <div className='text-xl font-semibold cursor-pointer hover:scale-110 transition-transform' onClick={() => handleComponentChange('Validation_2')}>Manual Validation</div>
        <div className='text-xl font-semibold cursor-pointer hover:scale-110 transition-transform' onClick={() => handleComponentChange('Validation_3')}>Using Controlled Component</div>
        <div className='text-xl font-semibold cursor-pointer hover:scale-110 transition-transform' onClick={() => handleComponentChange('Validation_4')}>Using Validation Libraries</div>
        <div className='text-xl font-semibold cursor-pointer hover:scale-110 transition-transform' onClick={() => handleComponentChange('Validation_5')}>Third-Party Validation Libraries</div>
    </div>

    <div>
        {activeComponent === 'Validation_1' &&  <Validation_1/>}
        {activeComponent === 'Validation_2' && <Validation_2 />}
        {activeComponent === 'Validation_3' && <Validation_3/>}
        {activeComponent === 'Validation_4' && <Validation_4/>}
        {activeComponent === 'Validation_5' && <Validation_5/>}
      </div>

    </>
  )
}

export default Navbar