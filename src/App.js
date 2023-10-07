import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import AppBar from './AppBar.js';
import NavBar from './NavBar.js';
import Bio from './Bio.js';
import Office from './Office.js';
import ContactInformation from './ContactInformation.js';
import Timetable from './Timetable.js';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <AppBar />
      <ContactInformation />
      <div className="app__body">
          <Router>
              <NavBar />
              <Routes>
                  <Route
                      path="/"
                      element={<Office />}
                  />
                  <Route
                      path="/timetable"
                      element={<Timetable />}
                  />
                  <Route
                      path="/bio"
                      element={<Bio />}
                  />
             </Routes>
            </Router>
        </div>
    </div>
  );
};

export default App;
