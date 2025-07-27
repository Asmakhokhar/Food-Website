import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Kapital Kitchen</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#reservation">Contact</a></li>
      </ul>

   <div className={isOpen ? "mobile-menu open" : "mobile-menu"}>
   <div className="logo1">Kapital Kitchen </div>
    <button className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>

      <ul className="menu-links">
        <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#who_are_we"  onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#reservation" onClick={() => setIsOpen(false)}>Contact</a></li>
      </ul>
      </div>
      <div className="hamburger" onClick={() => setIsOpen(true)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
