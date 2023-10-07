import React from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const openingHours = [
  { day: 'Δευτέρα', hoursMorn: '8:00 - 1:00', hoursAft: '5:00 - 8:00' },
  { day: 'Τρίτη', hoursMorn: '8:00 - 1:00', hoursAft: '5:00 - 8:00' },
  { day: 'Τετάρτη', hoursMorn: '8:00 - 1:00', hoursAft: '5:00 - 8:00' },
  { day: 'Πέμπτη', hoursMorn: '8:00 - 1:00', hoursAft: '5:00 - 8:00' },
  { day: 'Παρασκευή', hoursMorn: '8:00 - 1:00', hoursAft: '5:00 - 8:00' },
  { day: 'Σάββατο', hoursMorn: '8:00 - 1:00', hoursAft: '5:00 - 8:00' },
  { day: 'Κυριακή' },
];

function WeekTimetable() {
  return (
    <Container className="timetable">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>Πρωί</TableCell>
                <TableCell>Απόγευμα</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {openingHours.map((day) => (
                <TableRow key={day.day}>
                  <TableCell>{day.day}</TableCell>
                  {day.hoursMorn && <TableCell>{day.hoursMorn}</TableCell>}
                  {day.hoursAft && <TableCell>{day.hoursAft}</TableCell>}
                  {!day.hoursMorn && !day.hoursAft && <TableCell>Κλειστά</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </Container>
  );
}

export default WeekTimetable;
