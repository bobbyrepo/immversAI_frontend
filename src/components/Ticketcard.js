import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserForm from "./UserForm";
import { successNotify } from "../utils/Notification";

function Ticketcard({ item, changes, setChanges }) {
  const bookedBy = item.bookedBy;
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [showBookingForm, setShowBookingForm] = useState(false);

  //   const [name, setName] = useState("");

  const bookTicket = async (id) => {
    if (!item.booked) {
      setShowBookingForm(true);
    }
  };

  //   useEffect(() => {
  //     async function getUserData() {
  //       try {
  //         const response = await axios.get(`${apiUrl}/api/users/${bookedBy}`);
  //         setName(response.data.name);
  //       } catch (error) {
  //         console.error(error);
  //         setName("");
  //       }
  //     }
  //     getUserData();
  //   });

  function notify(msg) {
    successNotify(msg);
  }
  return (
    <>
      {showBookingForm && (
        <UserForm
          item={item}
          id={item._id}
          changes={changes}
          setChanges={setChanges}
          showBookingForm={showBookingForm}
          setShowBookingForm={setShowBookingForm}
          notify={notify}
        />
      )}

      <div key={item._id} className="flex flex-col gap-1">
        <div
          onClick={() => bookTicket(item._id)}
          className={`flex flex-col w-[200px] h-[90px] px-2   border-2 rounded-xl ${
            !item.booked
              ? "bg-white border-blue-300  hover:bg-blue-300"
              : " bg-red-200 border-red-200"
          }`}
        >
          <h1>{item.seatNo}</h1>
          <h1 className="text-center text-2xl font-bold">{item.price} Rs</h1>
        </div>
        <div className="flex justify-between px-3">
          <button
            onClick={() => navigate(`/details/${item._id}`)}
            className="px-2 py-1 bg-blue-400 text-white rounded"
          >
            Details
          </button>
        </div>
      </div>
    </>
  );
}

export default Ticketcard;
