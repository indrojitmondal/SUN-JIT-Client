import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TableRow from './TableRow';
import { AuthContext } from './providers/AuthProvider';
import TableRowMobile from './TableRowMobile';

const GameWatchList = () => {
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);
    const [myWatchList, setMyWatchList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch('https://sunjit-server.vercel.app/myWatchList');
                const data = await response.json();
                const myList = data.filter(review => review.user_email === user.email);
                setMyWatchList(myList);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }

        }
        fetchData();
    })


    return (

        <div className='mt-5'>

            {
                loading ? (<p className="text-xl font-bold text-center">Please Wait...</p>) :
                    (
                        <>
                            {myWatchList.length > 0 ? (

                                <div>
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
                                                    myWatchList.map((game, idx) => <TableRow key={idx} index={idx} game={game}></TableRow>)
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
                                            {
                                                myWatchList.length > 0 &&
                                                <tbody>




                                                    {
                                                        myWatchList.map((game, idx) => <TableRowMobile key={idx} index={idx} game={game}></TableRowMobile>)
                                                    }





                                                </tbody>
                                            }

                                        </table>

                                    </div>
                                </div>) : (
                                <p className="text-center text-xl">No reviews found.</p>
                            )
                            }
                        </>)
            }

        </div>
    );
};

export default GameWatchList;

// Thik Ache....