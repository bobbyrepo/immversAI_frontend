import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [ticketData, setTicketdata] = useState({});
  // const [userData, setUserdata] = useState({});

  useEffect(() => {
    async function getTicketdata() {
      try {
        const response = await axios.get(`${apiUrl}/api/tickets/${id}`);
        setTicketdata(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getTicketdata();
  }, []);

  // useEffect(() => {
  //   async function getUserdata() {
  //     try {
  //       const response = await axios.get(
  //         `${apiUrl}/api/users/${ticketData.bookedBy}`
  //       );
  //       setUserdata(response.data);
  //       console.log(response.data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   getUserdata();
  // }, [ticketData]);

  return (
    <div>
      <h1 className="text-center text-3xl font-medium">Details</h1>
      <div className="flex flex-wrap mx-[30px] gap-4 justify-center mt-16">
        <div className="w-[300px] text-left p-5 bg-red-100 rounded-xl">
          <h1>Price: {ticketData.price}</h1>
          <h1>
            Booked: {ticketData.booked ? <span>YES</span> : <span>NO</span>}
          </h1>
          {ticketData.booked && (
            <>
              <h1>Name: {ticketData.name}</h1>
              <h1>Name: {ticketData.email}</h1>
            </>
          )}
        </div>
      </div>
      ;
    </div>
  );
}

export default Details;
