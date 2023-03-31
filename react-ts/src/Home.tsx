import React from 'react';
import './index.css';

import Header from './resources/Header';

const About: React.FC = () => {
    return (
        <div>
            <Header />
            <img src={require('./resources/graphics/Turbofan.gif')}></img>
        </div>
    );
};

export default About;
