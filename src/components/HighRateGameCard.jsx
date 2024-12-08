import React from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-stars';

const HighRateGameCard = ({review}) => {
    // const {myReviews, setMyReviews} = useContext(AuthContext);
    const {_id, game_url,game_title,rating, game_description,publication_year}=review;
     
    return (
        <div>
            <div className="  border border-gray-300 p-5 rounded-2xl">
                <div className="flex lg:flex-row flex-col gap-5">
                    {/* Image Section */}
                    <div className="lg:flex-1 h-full">
                        <img className="w-full h-[260px]" src={game_url}alt={game_title} />
                        <div className='flex items-center gap-4'>
                            <ReactStars count={5}

                                size={24}
                                activeColor="#ffd700"
                                value={rating}
                                
                            >

                            </ReactStars>

                            {/* {game.rating} */}
                            
                        </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="lg:flex-1">
                        <h2 className="text-text_color text-xl lg:text-xl font-bold">{game_title}</h2>
                        <p className="mt-4  ">
                           {game_description}
                           </p>

                        {/* View Details Button */}
                        <Link to={`/review/${_id}`} className="mt-5 flex items-center rounded-3xl">
                            <h3 className="lg:text-base text-base font-bold">Explore Details</h3>

                            {/* Arrow Icon */}
                            <div className="ml-1 bg-orange-300 rounded-[50%] w-8 h-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4 translate-x-2 translate-y-2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                                    />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HighRateGameCard;