import React from 'react';

const Validation_1 = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className='w-[25rem] h-[4rem] bg-neutral-300 text-center mb-10 items-center pt-3 rounded'>
        <h2 className='text-2xl text-black '>HTML5 Form Validation</h2>
    </div>
    <form className="bg-white p-6 rounded shadow-md w-full max-w-sm mt-10">
      <div className="mb-4">
        <label htmlFor="numberInput" className="block text-gray-700 text-sm font-bold mb-2">
          Number
        </label>
        <input
          type="text"
          required
          pattern="\d+"
          title="Only numbers are allowed"
          id="numberInput"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
);

export default Validation_1;
