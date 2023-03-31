// https://stackoverflow.com/questions/46984955/how-to-import-all-components-in-react// 
// ^ For later when imports get a little crazy

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './index.css';

import Home from './Home';
import Teams from './Teams';
import About from './About';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

// Based on what URL you input at this domain, this will route you to the correct .tsx file
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/teams' element={<Teams />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
