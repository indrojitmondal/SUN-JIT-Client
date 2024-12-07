import React from 'react';
import { useLoaderData } from 'react-router-dom';

const GameWatchList = () => {
    const watchListLoaded = useLoaderData();
    return (
        <div>
            <h2>Hello from GameWatchList, total watchList: {watchListLoaded.length} </h2>
        </div>
    );
};

export default GameWatchList;