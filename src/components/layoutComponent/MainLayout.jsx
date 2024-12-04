import React from 'react';
import Sliders from '../Sliders';
import Contact from '../Contact';
import HighestRatedGame from '../HighestRatedGame';
import ExploreGame from '../ExploreGame';

const MainLayout = () => {
    return (
        <div>
              <Sliders></Sliders>
              <HighestRatedGame></HighestRatedGame>
              <ExploreGame></ExploreGame>
              <Contact></Contact>
        </div>
    );
};

export default MainLayout;