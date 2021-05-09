// Index.js - Home Page Not Logged In
// Holding the Login / Register Component
// End point of 3000 by default. 

import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Components/Login';

ReactDOM.render(
    <React.StrictMode>
        <Login />
    </React.StrictMode>,
    document.getElementById('root')
);