import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { Box, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import "./NavBar.css";

const pages = [{ name: 'Αρχικη', id: '' }, { name: 'Ωραριο λειτουργιας', id: 'timetable' }]; //, { name: 'Βιογραφικό', id: 'bio' }];

function ResponsiveAppBar() {
    const navigate = useNavigate();

    return (
        <AppBar className="top-bar" position="static">
            <Toolbar disableGutters>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page.id}
                            onClick={() => navigate(`/${page.id}`)}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}
export default ResponsiveAppBar;
