import React from 'react';

import { Container, Typography } from '@mui/material';

const Bio = () => {
    return (
        <Container className="bio">
            <div class="section">
                <Typography variant="h5">
                    Εκπαίδευση
                </Typography>
                <ul>
                    <li>Αποφοίτηση από την Ιατρική Σχολή του Πανεπιστημίου Αθηνών</li>
                    <li>Ειδικευση στην παθολογία με ειδική έμφαση στη διαβητολογία στο Πανεπιστημιακό Γενικό Νοσοκομείο Πατρών</li>
                </ul>
            </div>
            <div class="section">
                <Typography variant="h5">
                    Επαγγελματική Εμπειρία
                </Typography>
                <ul>
                    <li>Διευθυντής της Παθολογικής κλινικής Γ.Ν. Καλαβρύτων</li>
                    <li>Διευθυντής της Παθολογικής κλινικής στο Νοσοκομείο του Αιγίου</li>
                    <li>Συντονιστής Διευθυντής τησ Παθολογικής κλινικής στο Νοσοκομείο Αγίου Ανδρέα Πατρών</li>
                </ul>
            </div>
            <div class="section">
                <Typography variant="h5">
                    Αφοσίωση στην Υγεία
                </Typography>
                <p>Είμαι αφοσιωμένος στην παροχή της καλύτερης δυνατής περίθαλψης στους ασθενείς μου και στη διαρκή εκπαίδευση, προκειμένου να παραμένω ενημερωμένος για τις πιο σύγχρονες ιατρικές εξελίξεις.</p>
            </div>
        </Container>
    );
};

export default Bio;
