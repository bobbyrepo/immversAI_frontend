import React, { useEffect, useState } from "react";
import axios from "axios";

function Ticketcard({ item, changes, setChanges }) {
  const bookedBy = item.bookedBy;
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [name, setName] = useState("");

  const bookTicket = async (id) => {
    try {
      const response = await axios.put(`${apiUrl}/api/tickets/${id}`, {
        bookedBy: localStorage.getItem("userID"),
      });
      setChanges(!changes);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTicket = async (id) => {
    try {
      const response = await axios.delete(`${apiUrl}/api/tickets/${id}`, {
        bookedBy: localStorage.getItem("userID"),
      });
      setChanges(!changes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await axios.get(`${apiUrl}/api/users/${bookedBy}`);
        setName(response.data.name);
      } catch (error) {
        console.error(error);
        setName("");
      }
    }
    getUserData();
  });

  return (
    <div key={item._id} className="flex flex-col gap-1">
      <div
        onClick={() => bookTicket(item._id)}
        className={`flex flex-col w-[200px] h-[130px] px-2   border-2 rounded-xl ${
          !item.booked
            ? "bg-white border-blue-300  hover:bg-blue-300"
            : " bg-red-200 border-red-200"
        }`}
      >
        <h1 className="font-normal text-sm">creator:</h1>
        <h1 className="font-medium">{item.creatorName.toUpperCase()}</h1>

        <h1 className="text-center text-2xl font-bold">{item.price} Rs</h1>
        {bookedBy && <h1 className="font-normal text-sm">booked:</h1>}
        <h1 className="font-medium">{name}</h1>
      </div>
      <div className="flex justify-between px-3">
        <button className="px-2 py-1 bg-blue-400 text-white rounded">
          Details
        </button>
        {item.creatorID == localStorage.getItem("userID") && (
          <button
            onClick={() => deleteTicket(item._id)}
            className="px-2 py-1 bg-red-400 text-white rounded"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Ticketcard;
