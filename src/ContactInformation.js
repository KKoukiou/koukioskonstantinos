// src/components/ContactInformation.js
import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';
import { AspectRatio } from '@mui/joy';
import { Phone, Email } from "@mui/icons-material";

import "./ContactInformation.css";

const ContactInformation = () => {
  return (
    <div className="header">
        <div className="header-contact">
          <div className="contact-basic">
              <Typography variant="h3" className="contact-title">
                  Κούκιος Κωνσταντίνος
              </Typography>
              <Typography variant="h4" className="contact-subtitle">
                  Ειδικός Παθολόγος / Διαβητολόγος
              </Typography>
          </div>
          <div className="contact-secondary">
              <Typography variant="h5" className="contact-address">
                  Ρήγα Φεραίου 12345, Αίγιο, Αχαΐα
              </Typography>
              <Typography variant="h6" gutterBottom className="icon-with-text">
                  <Phone />
                  <span>+30 6973039109</span>
              </Typography>
              <Typography variant="h6" gutterBottom className="icon-with-text">
                  <Email />
                  <span>koukioskonstantinos@gmail.com</span>
              </Typography>
            </div>
        </div>
        <div className="header-image">
          <AspectRatio variant="plain" objectFit="contain">
            <img src="./images/koukios.jpg" alt="koukios" />
           </AspectRatio>
        </div>
    </div>
  );
};

export default ContactInformation;
