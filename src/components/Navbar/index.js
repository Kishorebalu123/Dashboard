import React from 'react';
import { FaBars } from 'react-icons/fa';
import './index.css';

function Navbar({ toggleSidebar }) {
  return (
    <div className="navbar">
      <FaBars className="hamburger" onClick={(e) => { e.stopPropagation(); toggleSidebar(); }} />
      <h1>Dashboard</h1>
    </div>
  );
}

export default Navbar;
