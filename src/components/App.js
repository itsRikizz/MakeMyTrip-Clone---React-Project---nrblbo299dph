import React from "react";

import "../styles/App.css";

import CheckOut from "./CheckOut/CheckOut";
import FlightSearch from "./Flight/FlightSearch";
import Master from "./Flight/Master";

import Header from "./Header/Header";
// import Hotel from "./Hotel/Hotel";
// import HotelSearch from "./Hotel/HotelSearch";
// import Login from "./Login/Login";
// import SearchResult from "./Flight/SearchResult";
// import Train from "./Train/Train";

const App = () => {
  return (
    <div id='main'>
      <Header />
      <Master />

      {/* <CheckOut />
      <Login /> */}

      {/* <Hotel /> */}
      {/* <Train /> */}
    </div>
  );
};

export default App;
