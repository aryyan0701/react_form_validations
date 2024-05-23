import React from 'react';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare, FaInstagramSquare, FaDiscord } from 'react-icons/fa';
import { FaHashnode } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full bg-neutral-400 text-gray-800 p-8 flex flex-col">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-4">
        <div className="flex flex-col items-center lg:items-start mb-4 lg:mb-0">
          <h1 className="text-3xl font-semibold mb-2">React Form Validation</h1>
          <p className="text-center lg:text-left max-w-2xl ">
          This application demonstrates various form validation techniques in React using HTML5 and custom validation methods. It provides a user-friendly interface to showcase how to effectively validate form inputs, ensuring data integrity and enhancing user experience.
          </p>
          <h2 className="text-3xl font-semibold mt-5 mb-3">Check this out</h2>
          <a href="https://aryankadam.hashnode.dev/" className="text-black hover:text-zinc-900">
          <p className="text-center lg:text-left max-w-2xl text-xl">
          My prsonal hashnode blog on form validations <FaHashnode className='inline text-align-center'/>
          </p></a>
        </div>
        <div className="flex flex-col lg:flex-col items-center lg:items-start mt-10">
          <div className="flex flex-row lg:flex-row items-start space-x-4  lg:space-y-0 lg:space-x-6 mb-4 lg:mb-5">
            <a href="https://github.com/aryyan0701" className="text-black text-3xl hover:text-zinc-900">
              <FaGithubSquare />
            </a>
            <a href="https://twitter.com/aaryyan_" className="text-black text-3xl hover:text-zinc-900">
              <FaTwitterSquare />
            </a>
            <a href="https://linkedin.com/in/aryan-kadam-568083204" className="text-black text-3xl hover:text-zinc-900">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/_aaaryaan__" className="text-black text-3xl hover:text-zinc-900">
              <FaInstagramSquare />
            </a>
            <a href="https://discord.com" className="text-black text-3xl hover:text-zinc-900">
              <FaDiscord />
            </a>
          </div>
          <div className="flex flex-col lg:flex-col items-center lg:items-center space-y-0 lg:space-y-2 lg:space-x-2 mt-4">
            <span className='text-xl' >Source code available on</span>
            <a href="https://github.com/aryyan0701/react_form_validations" target='_blank' className="text-black text-xl hover:text-zinc-900 inline">ayyan_0701
              <FaGithubSquare className='inline align-text-center ml-1 text-2xl'/>
            </a>
          </div>
        </div>
        <div className="hidden md:flex flex-col lg:flex-col items-center lg:items-start"></div>
      </div>
      <div className="flex justify-center mt-4">
        <p>© 2024. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;