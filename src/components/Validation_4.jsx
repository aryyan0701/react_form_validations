import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-modal';
import Form_4 from "../assets/Form_4.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement('#root'); 

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
});

const Validation_4 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);


return(
  <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
    <ToastContainer/>
    <Formik
      initialValues={{ name: '', email: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, {resetForm}) => {
        console.log(values);
      toast("Form submitted successfully.");
      resetForm();
      }}
    >
      {() => (
         <div className="flex flex-col items-center justify-center min-h-screen">
         <div className='w-[20rem] h-[5rem] bg-neutral-300 text-center mb-10 items-center pt-3 rounded'>
                 <h2 className='text-2xl text-black font-semibold'>4. Using Validation Libraries (Formik,Yup)</h2>
             </div>
        <Form  className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <Field
              name="name"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 text-xs italic" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <Field
              type="email"
              name="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs italic" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </Form>
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
            src={Form_4}
            alt="Source Code"
            className="w-full h-auto rounded"
          />
        </div>
      </Modal>
    </div>
      )}
    </Formik>
  </div>
);

}

export default Validation_4;
