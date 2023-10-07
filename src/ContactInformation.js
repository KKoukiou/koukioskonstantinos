// src/components/ContactInformation.js
import React from 'react';
import { Typography } from '@mui/material';
import { PinDrop } from "@mui/icons-material";

import "./ContactInformation.css";

const ContactInformation = () => {
  return (
    <div className="header">
        <div className="header-contact">
          <div className="contact-basic">
              <Typography variant="h4" className="contact-title">
                  Κούκιος Κωνσταντίνος
              </Typography>
              <Typography variant="h5" className="contact-subtitle">
                  Ειδικός Παθολόγος / Διαβητολόγος
              </Typography>
          </div>
          <div className="contact-secondary">
              <div className="contact-address icon-with-text">
                  <PinDrop />
                  <div className="contact-address-text">
                      <div className="contact-address-label">Διεύθυνση</div>
                      <div>Ρήγα Φεραίου 12345, Αίγιο, Αχαΐα</div>
                  </div>
              </div>
              <div className="contact-phone">
                  1200 345 678
              </div>
          </div>
      </div>
      <img className="header-image" src="./images/koukios.jpg" alt="koukios" />
  </div>
  );
};

export default ContactInformation;
