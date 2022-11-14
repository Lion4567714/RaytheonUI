import React from 'react';
import './index.css';

import Header from './resources/Header';
import PostButton from './resources/PostButton';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <p>This is the home page!</p>
            <PostButton />
        </div>
    );
};

export default Home;
