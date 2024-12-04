import React from 'react';
import Sliders from '../Sliders';
import Contact from '../Contact';
import HighestRatedGame from '../HighestRatedGame';

const MainLayout = () => {
    return (
        <div>
              <Sliders></Sliders>
              <HighestRatedGame></HighestRatedGame>
              <Contact></Contact>
        </div>
    );
};

export default MainLayout;