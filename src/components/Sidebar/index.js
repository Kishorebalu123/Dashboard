import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

function Sidebar({ isOpen, toggleSidebar}) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
      <ul>
        <li><Link to="/" onClick={toggleSidebar}>Dashboard</Link></li>
        <li><Link to="/inventory" onClick={toggleSidebar}>Inventory</Link></li>
        <li><Link to="/order" onClick={toggleSidebar}>Order</Link></li>
        <li><Link to="/returns" onClick={toggleSidebar}>Returns</Link></li>
        <li><Link to="/customers" onClick={toggleSidebar}>Customers</Link></li>
        <li><Link to="/shipping" onClick={toggleSidebar}>Shipping</Link></li>
        <li><Link to="/channel" onClick={toggleSidebar}>Channel</Link></li>
        <li><Link to="/integrations" onClick={toggleSidebar}>Integrations</Link></li>
        <li><Link to="/calculators" onClick={toggleSidebar}>Calculators</Link></li>
        <li><Link to="/reports" onClick={toggleSidebar}>Reports</Link></li>
        <li><Link to="/account" onClick={toggleSidebar}>Account</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
