import React, { useState } from 'react';
import './App.css';
import Router from './routes';
function App() {
  const [darkMode, setDarkMode] = useState("true");
  return (
    <div className= {darkMode ?"dark-mode":"light-mode"}>
      <Router />
    </div>
  );
}

export default App;
