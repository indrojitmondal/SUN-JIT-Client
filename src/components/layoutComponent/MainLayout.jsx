import React from 'react';
import Sliders from '../Sliders';
import Contact from '../Contact';
import HighestRatedGame from '../HighestRatedGame';
import ExploreGame from '../ExploreGame';

const MainLayout = () => {
    return (
        <div>
              <Sliders></Sliders>
              <ExploreGame></ExploreGame>
              <HighestRatedGame></HighestRatedGame>
              
              <Contact></Contact>
        </div>
    );
};

export default MainLayout;