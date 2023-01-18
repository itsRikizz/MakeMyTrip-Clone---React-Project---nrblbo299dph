import React from "react";
import logo from "./logo.png";
import "./header.css";

const Header = () => {
  return (
    <nav>
      <div className='container'>
        <a className='navbar' href='/'>
          <img src={logo} alt='logo' width='120' height='40' className='logo' />
        </a>
        <div className='navLinks'>
          <ul>
            <li>
              <a href='.'>Flights</a>
            </li>
            <li>
              <a href='.'>Stays</a>
            </li>
            <li>
              <a href='.'>Trains</a>
            </li>
            <li>
              <div className='user' style={{ border: "1px solid red" }}>
                <span>user</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
