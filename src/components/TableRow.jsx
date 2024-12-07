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
                {/* <div>{game.rating}</div> */}
                {/* <StarRatings
                    rating={game.rating || 0}
                    starRatedColor="blue"
                    // changeRating={this.changeRating}
                    numberOfStars={5}
                    name='rating'
                /> */}

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
                <p className='lg:px-3'> {game.game_description} </p>
        

            </td>



            <td> <p className='lg: px-2'> {game.publication_year} </p> </td>

        </tr>

    );
};

export default TableRow;