// src/components/Home.js
import React from 'react';
import Terminal from '../Terminal'; // adjust the import path as needed
import { asciiArt1, asciiArt2 } from '../asciiArt'; // Update this import path based on where you stored your ascii arts

const Home = () => {
    const asciiArts = [asciiArt1, asciiArt2];

    return (
        <div className="Home">
            {/* Your other components can go here */}
            <Terminal asciiArts={asciiArts} />
            {/* Your other components can go here */}
        </div>
    );
}

export default Home;

