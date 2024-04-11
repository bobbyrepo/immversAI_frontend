import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserForm = ({
  id,
  item,
  showBookingForm,
  setShowBookingForm,
  notify,
  change,
  setChanges,
}) => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrors({ name: "Name is required" });
      return;
    }
    if (!email.trim()) {
      setErrors({ email: "Email is required" });
      return;
    }
    try {
      const response = await axios.put(`${apiUrl}/api/tickets/${id}`, {
        email,
        name,
      });
      //   console.log(response);
      notify("Booked successfully");
      setShowBookingForm(false);
      setChanges(!change);
    } catch (error) {
      console.error(error);
      notify("Error booking ticket. Please try again later.", "error");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-md">
      <div
        onClick={() => setShowBookingForm(false)}
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      ></div>
      <div className="z-10 w-[400px] bg-gray-100 px-6 py-3 rounded-lg shadow-md">
        <div className="flex justify-between items-end">
          <h2 className="text-xl font-bold mb-4">Booking Details </h2>
          <h3>Seat No: {item.seatNo}</h3>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500`}
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md px-4 py-2 w-full focus:outline-none focus:border-blue-500`}
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Book Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
