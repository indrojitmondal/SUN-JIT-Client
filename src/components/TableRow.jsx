import React from 'react';
// import StarRatings from './react-star-ratings';
import ReactStars from 'react-stars'

const TableRow = ({ game, index }) => {
    // console.log('Hello from Table row', game);
    return (

        <tr>
            <td className='text-center'>{index + 1}</td>
            <td><h2>{game.game_title}</h2>
                <img src={game.game_url} className='' alt="" />
               

                <div className='flex items-center gap-4'>
                    <ReactStars count={5}

                        size={24}
                        activeColor="#ffd700"
                        value={game.rating}
                    >

                    </ReactStars>

                    {game.rating}
                </div>

            </td>
            <td> <p className='lg:px-3'>{game.genres}</p> </td>
            <td>
                 <div>
                    
                 <p className='lg:px-3'> <span className='font-bold'> Game Description: </span> {game.game_description} </p>
                 <h2 className='lg:px-3 font-bold'> Reviewer's Name: {game.name} </h2>
                 <h2 className='lg:px-3 font-bold'> Reviewer's Email: {game.email} </h2>
   
                 </div>

            </td>



            <td> <p className='lg: px-2'> {game.publication_year} </p> </td>

        </tr>

    );
};

export default TableRow;