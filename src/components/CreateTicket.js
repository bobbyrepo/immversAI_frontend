import axios from "axios";
import React, { useState } from "react";

const CreateTicket = ({ setShowCreateModal, changes, setChanges }) => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [price, setPrice] = useState("");

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiUrl}/api/tickets`, {
        price,
        creatorName: localStorage.getItem("userName"),
        creatorID: localStorage.getItem("userID"),
      });
      console.log("ticket created successful:", response.data);
      setChanges(!changes);
    } catch (error) {
      console.error(error);
    }
    setShowCreateModal(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl mb-4 font-bold text-center">Create Ticket</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1">
              Price:
            </label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={handlePriceChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTicket;
