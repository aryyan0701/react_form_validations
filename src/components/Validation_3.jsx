import React, { useState } from "react";
import Modal from "react-modal";
import Form_3 from "../assets/Form_3.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Modal.setAppElement("#root");

const Validation_3 = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const [values, setValues] = useState({ name: "", email: "", number: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

    if (name === "number" && !/^\d*$/.test(value)) {
      setErrors({ ...errors, number: "Only numbers are allowed" });
    } else {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validate name
    if (!values.name.trim()) {
      newErrors = { ...newErrors, name: "Name is required" };
    }

    // Validate email
    if (!values.email.trim()) {
      newErrors = { ...newErrors, email: "Email is required" };
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors = { ...newErrors, email: "Invalid email address" };
    }

    // Validate number
    if (!values.number.trim()) {
      newErrors = { ...newErrors, number: "Number is required" };
    } else if (!/^\d+$/.test(values.number)) {
      newErrors = { ...newErrors, number: "Only numbers are allowed" };
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted with values:", values);
      toast("Form submitted successfully.");
      setValues({ name: "", email: "", number: "" })
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-800">
      <ToastContainer />
      <div className="w-[20rem] h-[5rem] bg-neutral-300 text-center mb-10 items-center pt-3 rounded">
        <h2 className="text-2xl text-black font-semibold">
          3. Using Controlled Component
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.name ? "border-red-500" : ""
            }`}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">{errors.name}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email ? "border-red-500" : ""
            }`}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">{errors.email}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="number"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Number
          </label>
          <input
            type="text"
            id="number"
            name="number"
            value={values.number}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.number ? "border-red-500" : ""
            }`}
            placeholder="Enter your number"
          />
          {errors.number && (
            <p className="text-red-500 text-xs italic">{errors.number}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      <div className="flex justify-end w-full max-w-sm mt-4">
        <button
          onClick={openModal}
          className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
            src={Form_3}
            alt="Source Code"
            className="w-full h-auto rounded"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Validation_3;
