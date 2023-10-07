// src/components/ContactInformation.js
import React from 'react';
import { Phone, Email } from "@mui/icons-material";

import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="appbar">
        <div className="icon-with-text">
            <Phone />
            <span>FILLME</span>
        </div>
        <div className="icon-with-text">
            <Email />
            <span>koukioskonstantinos@gmail.com</span>
        </div>
    </div>
  );
};

export default AppBar;
