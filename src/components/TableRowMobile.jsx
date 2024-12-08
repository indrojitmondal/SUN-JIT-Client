import React from 'react';
// import StarRatings from './react-star-ratings';
import ReactStars from 'react-stars'

const TableRowMobile = ({ game, index }) => {
    // console.log('Hello from Table row', game);
    return (

        <tr>
            <td className='text-center'>{index + 1}</td>
            <td><h2> <span className='font-bold'>Game Title</span> {game.game_title}</h2>
                <img src={game.game_url} className='' alt="" />
                <p className='lg:px-3'> <span className='font-bold'>Genre</span>: {game.genres}</p>

                <div className='flex items-center gap-4'>
                    <ReactStars count={5}

                        size={24}
                        activeColor="#ffd700"
                        value={game.rating}
                    >

                    </ReactStars>

                    {game.rating}
                </div>
                <p className=''> <span className='font-bold'> Game Description: </span> {game.game_description} </p>


                <div>
                    <p className='px-2'> <span className='font-bold'>Publication Year: </span> {game.publication_year} </p>
                    <h2 className='px-2 '> <span className='font-bold'> Reviewer's Name:</span> {game.name} </h2>
                    <h2 className='px-2 '> <span className='font-bold'>Reviewer's Email:</span> {game.email} </h2>


                </div>

            </td>






        </tr>

    );
};

export default TableRowMobile;