import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateTicket from "../components/CreateTicket";
import Ticketcard from "../components/Ticketcard";

const TicketsPage = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [allTickets, setAllTickets] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [changes, setChanges] = useState(false);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/tickets`);
        setAllTickets(response.data);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getTickets();
  }, [changes]);

  return (
    <div>
      <h2 className="text-2xl mb-4 font-bold">Tickets Page</h2>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
        onClick={() => setShowCreateModal(true)}
      >
        Create Ticket
      </button>
      <div className="flex flex-wrap gap-6 mx-8 mt-8">
        {allTickets.map((item) => (
          <Ticketcard item={item} changes={changes} setChanges={setChanges} />
        ))}
      </div>
      {showCreateModal && (
        <CreateTicket
          setShowCreateModal={setShowCreateModal}
          changes={changes}
          setChanges={setChanges}
        />
      )}
    </div>
  );
};

export default TicketsPage;
