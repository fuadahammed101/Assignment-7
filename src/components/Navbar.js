import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleNewTicket = () => {
    
    alert('New Ticket functionality to be implemented');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="/vector1.png" alt="Logo" className="logo" />
          <span className="website-name">CS - Ticket System</span>
        </div>
        <div className="navbar-right">
          <ul className="nav-menu">
            <li>Home</li>
            <li>FAQ</li>
            <li>Charging</li>
            <li>Blog</li>
            <li>Download</li>
            <li>Contact</li>
          </ul>
          <button className="new-ticket-btn" onClick={handleNewTicket}>
            <div className="icon"></div>
            <span>New Ticket</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
