import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import Form_5 from "../assets/Form_5.png";

Modal.setAppElement('#root'); 

const Validation_5 = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
    <div className='w-[20rem] h-[4rem] bg-neutral-300 text-center mb-10 items-center pt-3 rounded'>
            <h2 className='text-2xl text-black font-semibold'>5. Using react-hook-form</h2>
        </div>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
          <input
            {...register('name', { required: 'Name is required' })}
            id="name"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500 text-xs italic">{errors.name.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Number</label>
          <input
            {...register('number', { required: 'Number is required' })}
            id="number"
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your number"
          />
          {errors.number && <span className="text-red-500 text-xs italic">{errors.number.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input
            {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email format' } })}
            id="email"
            type="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500 text-xs italic">{errors.email.message}</span>}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input
            {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters long' } })}
            id="password"
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your password"
          />
          {errors.password && <span className="text-red-500 text-xs italic">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      <div className='flex justify-end w-full max-w-sm mt-4'>
        <button
          onClick={openModal}
          className='bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          Source Code
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Source Code Modal"
        className="modal"
        overlayClassName="overlay"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Source Code</h2>
          <button onClick={closeModal} className="close-button">
            Close
          </button>
        </div>
        <div className="mt-4">
          <img
            src={Form_5}
            alt="Source Code"
            className="w-full h-auto rounded"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Validation_5;
