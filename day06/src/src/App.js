import React, { useState } from 'react';
import NavBar from './features/NavBar';
import Stopwatch from './features/Stopwatch';
import StudentInfo from './features/StudentInfo';
import './styles/App.css';

const App = () => {
  const [displayedComponent, setDisplayedComponent] = useState("Stopwatch");

  const handleButtonClick = (componentName) => {
    setDisplayedComponent(componentName);
  };

  return (
    <div className="app-container">
      <NavBar onButtonClick={handleButtonClick} />

      <div className="component-container">
        {displayedComponent === 'Stopwatch' && <Stopwatch />}
        {displayedComponent === 'StudentInfo' && <StudentInfo />}
      </div>
    </div>
  );
};

export default App;
