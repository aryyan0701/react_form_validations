import React, { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-[4rem] bg-neutral-400 text-gray-800 p-5 flex items-center justify-between fixed top-0 z-10">
      <h2 className="text-2xl font-semibold">Form Validations</h2>
      <button
        className="bg-gray-700 text-white p-2 rounded focus:outline-none focus:ring focus:ring-gray-300"
        onClick={toggleMenu}
      >
        Methods
      </button>
      {isOpen && (
        <div className="absolute right-3 top-16 bg-white shadow-md rounded-lg w-48">
            <ul>
            <li className="p-2 hover:bg-gray-200  cursor-pointer">
              <Link to="validation1" smooth={true} duration={500} onClick={toggleMenu}>HTML5 Validation</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              <Link to="validation2" smooth={true} duration={500} onClick={toggleMenu}>Manual Validation</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              <Link to="validation3" smooth={true} duration={500} onClick={toggleMenu}>Controlled Component</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              <Link to="validation4" smooth={true} duration={500} onClick={toggleMenu}>Formik & Yup libraries</Link>
            </li>
            <li className="p-2 hover:bg-gray-200 cursor-pointer">
              <Link to="validation5" smooth={true} duration={500} onClick={toggleMenu}>Using react-hook-form</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
