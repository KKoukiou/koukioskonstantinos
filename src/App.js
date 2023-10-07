// src/components/App.js
import React from 'react';
import {
  Typography,
  Grid,
  Card,
  ImageList,
  ImageListItem,
} from '@mui/material';
import AppBar from './AppBar.js';
import ContactInformation from './ContactInformation.js';
import Timetable from './Timetable.js';
import './App.css'; // Import the SCSS file

const App = () => {
  return (
    <div className="app">
      <AppBar />
      <ContactInformation />
      <Timetable />
      <Grid container spacing={2}>
          <Card className="card">
              <ImageList variant="woven" cols={itemData.length} gap={8}>
                  {itemData.map((item) => (
                      <ImageListItem key={item.img}>
                          <img
                              srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                              src={`${item.img}?w=161&fit=crop&auto=format`}
                              alt={item.title}
                              loading="lazy"
                          />
                      </ImageListItem>
                  ))}
              </ImageList>
          </Card>
      </Grid>
    </div>
  );
};

const itemData = [
  {
    img: './images/photo1.jpg',
    title: 'Image 1',
  },
  {
    img: './images/photo2.jpg',
    title: 'Image 2',
  },
];

export default App;
