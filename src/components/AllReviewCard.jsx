import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const AllReviewCard = ({ review }) => {
    const { _id, game_url, game_title, rating, publication_year } = review;

    //console.log('ID from AllReviewCard: ', _id);
    return (
        <div className='border p-4 border-gray-500 rounded-md  '>
            {/* left */}
            <div>
                <img src={game_url} className='w-full h-80' alt={game_title} />
                <h2> <span className='font-bold'>Game Title: </span>  <span className='font-medium'>{game_title}</span> </h2>
                <div className='flex items-center gap-1'>
                    <h2> <span className='font-bold'>Rating:</span></h2>
                    <div className='flex items-center gap-1'>
                        <ReactStars count={5}

                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                        >

                        </ReactStars> <h2 className='font-medium'>{rating}</h2>
                    </div>

                </div>



                <h2> <span className='font-bold'>Publishing Year</span>: <span className='font-medium'>{publication_year}</span> </h2>
            </div>
            {/* Right */}
            <div>


                <Link to={`/review/${_id}`} className='btn'>

                    <h2 className='font-bold'>Explore Details</h2>



                </Link>

            </div>



        </div>
    );
};

export default AllReviewCard;