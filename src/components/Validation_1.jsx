import React, { useState } from "react";
import Modal from "react-modal";
import form_1 from "../assets/form_1.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const Validation_1 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [number, setNumber] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast("Form submitted successfully.");
    setNumber("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800 overflow-x-hidden">
      <ToastContainer />
      <div className="w-[20rem] h-[4rem] bg-neutral-300 text-center mb-10 items-center pt-3 mt-10 rounded">
        <h2 className="text-2xl text-black font-semibold">
          1. HTML5 Form Validation
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
          <label
            htmlFor="numberInput"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Enter Your Number
          </label>
          <input
            type="text"
            required
            pattern="\d+"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            title="Only numbers are allowed"
            id="numberInput"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex justify-end w-full max-w-sm mt-4">
        <button
          onClick={openModal}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-gray-300"
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
            src={form_1}
            alt="Source Code"
            className="w-full h-auto rounded"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Validation_1;
