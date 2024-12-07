import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';

const GameWatchList = () => {
    const watchListLoaded = useLoaderData();
    console.log('watchList:',watchListLoaded);
    return (
        <div className='mt-5'>
            {/* <h2>Hello from GameWatchList, total watchList: {watchListLoaded.length} </h2>
             */}
            <div className='w-11/12 lg:w-10/12 mx-auto '>

                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Game</th>
                            <th>Genre</th>
                            <th>Description</th>
                            <th> Year</th>
                        </tr>
                    </thead>
                    <tbody> 

                        {
                           watchListLoaded.map( (game,idx)=> <TableRow key={idx} index={idx} game={game}></TableRow>)  
                        }
                        
                        {/* <TableRow></TableRow> */}
                       
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default GameWatchList;