import React from 'react';
import './index.css';

import Header from './resources/Header';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <h3>This is the 'About Us' Page</h3>
            <p>We're pretty cool.</p>
        </div>
    );
};

export default About;
