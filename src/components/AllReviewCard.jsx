import React from 'react';

const AllReviewCard = ({review}) => {
    const {_id, game_url,game_title,rating,publication_year}=review;
     
    console.log('ID from AllReviewCard: ', _id);
    return (
        <div className='border p-4 border-gray-500 rounded-md  '>
            {/* left */}
            <div>
                <img src={game_url} alt={game_title} />
                <h2>Title: {game_title} </h2>
                <h2>Rating: {rating}</h2>
                <h2>Publishing Year: {publication_year} </h2>
            </div>
            {/* Right */}
            <div>
                

                <button  className='btn'>

                    <h2>Explore Details</h2>

                    

                </button>

            </div>



        </div>
    );
};

export default AllReviewCard;