import React from 'react';
import './index.css';
import Header from './resources/Header';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <p>This is the home page!</p>
        </div>
    );
};

export default Home;
