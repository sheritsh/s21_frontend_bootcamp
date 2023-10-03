
import React from 'react';
import '../styles/NavBar.css';


const NavBar = ({ onButtonClick }) => {
  return (
    <div className="nav-bar">
      <button onClick={() => onButtonClick('Stopwatch')}>Watch</button>
      <button onClick={() => onButtonClick('StudentInfo')}>Student Info</button>
    </div>
  );
};

export default NavBar;

