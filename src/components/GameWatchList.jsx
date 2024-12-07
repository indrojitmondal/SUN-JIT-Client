import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import { AuthContext } from './providers/AuthProvider';

const GameWatchList = () => {
    const watchListLoaded = useLoaderData();
    //const myWatchList = useLoaderData();
    const {user}= useContext(AuthContext);
   // console.log('watchList:',watchListLoaded);

   // const myWatchList = watchListLoaded;
    
    const myWatchList = watchListLoaded.filter(review => review.user_email === user.email );
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
                           myWatchList.map( (game,idx)=> <TableRow key={idx} index={idx} game={game}></TableRow>)  
                        }
                        
                        {/* <TableRow></TableRow> */}
                       
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default GameWatchList;