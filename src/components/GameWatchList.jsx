import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import { AuthContext } from './providers/AuthProvider';
import TableRowMobile from './TableRowMobile';

const GameWatchList = () => {
    const watchListLoaded = useLoaderData();
    //const myWatchList = useLoaderData();
    const {user}= useContext(AuthContext);
    console.log('watchList:',watchListLoaded);

   // const myWatchList = watchListLoaded;
    
    const  myWatchList= watchListLoaded.filter(review => review.user_email === user.email );
    console.log('My watchList:',myWatchList);
    return (
        <div className='mt-5'>
            {/* <h2>Hello from GameWatchList, total watchList: {watchListLoaded.length} </h2>
             */}
             <h2 className='py-4 text-2xl font-bold text-center'>My WatchList</h2>
            <div className='lg:px-4 hidden lg:block w-11/12 mx-auto lg:w-full lg:mx-0 '>

                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th className='lg:text-lg'>Number</th>
                            <th className='lg:text-lg'>Game</th>
                            <th className='lg:text-lg'>Genre</th>
                            <th className='lg:text-lg'>Description</th>
                            <th className='lg:text-lg'> Year</th>
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
            <div className='lg:px-4 block lg:hidden w-11/12 mx-auto lg:w-full lg:mx-0 '>

                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th >Number</th>
                            <th >Game Description </th>
                            <th>Published</th>
                            {/* <th>Description</th>
                            <th> Year</th> */}
                        </tr>
                    </thead>
                    <tbody> 

                        {
                           myWatchList.map( (game,idx)=> <TableRowMobile key={idx} index={idx} game={game}></TableRowMobile>)  
                        }
                        
                        {/* <TableRow></TableRow> */}
                       
                    </tbody>
                </table>

            </div>

        </div>
    );
};

export default GameWatchList;