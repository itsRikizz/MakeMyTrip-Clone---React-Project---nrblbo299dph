import React, { useState } from "react";
import FlightSearch from "./FlightSearch";
import SearchResult from "./SearchResult";

const Master = () => {
  const [from, setfrom] = useState("");
  const [to, setTo] = useState("");
  const [depart, setDepart] = useState("");
  const [arrival, setArrival] = useState([]);

  return (
    <div>
      <FlightSearch
        from={from}
        setfrom={setfrom}
        to={to}
        setTo={setTo}
        depart={depart}
        setDepart={setDepart}
        arrival={arrival}
        setArrival={setArrival}
      />
      <SearchResult from={from} to={to} depart={depart} arrival={arrival} />
    </div>
  );
};

export default Master;
