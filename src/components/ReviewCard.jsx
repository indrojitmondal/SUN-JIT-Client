import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const ReviewCard = ({review}) => {
    const {_id, game_url,game_title,rating,publication_year}=review;
     console.log('ID from ReviewCard: ', _id);
    return (
        <div className='border p-4 border-gray-500 rounded-md flex gap-2 '>
            {/* left */}
            <div>
                <img src={game_url} alt={game_title} />
                <h2>Title: {game_title} </h2>
                <h2>Rating: {rating}</h2>
                <h2>Publishing Year: {publication_year} </h2>
            </div>
            {/* Right */}
            <div>
                <Link to={`/updateReview/${_id}`} className='flex items-center'>

                    <h2>Update</h2>

                    <MdOutlineEdit /> 

                </Link>

                <Link className='flex items-center'>

                    <h2>Delete</h2>

                    <RiDeleteBinLine /> 

                </Link>

            </div>



        </div>
    );
};

export default ReviewCard;