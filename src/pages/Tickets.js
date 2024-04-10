import React, { useState, useEffect } from "react";
import axios from "axios";
import CreateTicket from "../components/CreateTicket";
import UserForm from "../components/UserForm";
import Ticketcard from "../components/Ticketcard";

const TicketsPage = () => {
  const apiUrl = process.env.REACT_APP_BASE_URL;
  const [allTickets, setAllTickets] = useState([]);
  const [showTickets, setShowTickets] = useState([]);
  let filterArray = ["All", 800, 900, 1000];
  const [filter, setFilter] = useState("All");
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

  useEffect(() => {
    if (filter == 800) {
      setShowTickets(allTickets.filter((item) => item.price == 800));
    } else if (filter == 900) {
      setShowTickets(allTickets.filter((item) => item.price == 900));
    } else if (filter == 1000) {
      setShowTickets(allTickets.filter((item) => item.price == 1000));
    } else setShowTickets(allTickets);
  }, [allTickets, filter]);

  return (
    <div>
      <h2 className=" mt-5 text-3xl text-center mb-4 font-bold">Tickets</h2>

      <div className="flex flex-col">
        <h1>Filters by price:</h1>
        <div className="flex gap-2">
          {filterArray.map((item, ind) => (
            <h1
              key={ind}
              onClick={() => setFilter(item)}
              className={`border-2 px-2 rounded-full border-red-200 hover:border-red-400 ${
                filter == item ? `bg-red-400 text-white border-red-400` : ``
              }`}
            >
              {item}
            </h1>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-6 mx-8 mt-8">
        {showTickets.map((item, ind) => (
          <Ticketcard
            key={ind}
            item={item}
            changes={changes}
            setChanges={setChanges}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketsPage;
