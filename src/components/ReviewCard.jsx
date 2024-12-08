import React, { useContext } from 'react';
import { CiEdit } from "react-icons/ci";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './providers/AuthProvider';
import ReactStars from 'react-stars';

const ReviewCard = ({ review }) => {
    const { _id, game_url, game_title, rating, publication_year } = review;

    //console.log('ID from ReviewCard: ', _id);
    const { myReviews, setMyReviews } = useContext(AuthContext);

    const handleDelete = (id) => {
        //console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://sunjit-server.vercel.app/reviews/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        //console.log(data);
                        // console.log('Deleted id: ',_id);
                        if (data.deletedCount > 0) {
                            const remainingReviews = myReviews.filter(review => review._id !== _id);
                            setMyReviews(remainingReviews);
                            Swal.fire({
                                title: "Deleted!",
                                text: "The review has been deleted.",
                                icon: "success"
                            });

                        }
                    })


            }
        });
    }
    return (
        <div className='border p-4 border-gray-500 rounded-md flex justify-between '>
            {/* left */}
            <div>
                <img src={game_url} className='w-full' alt={game_title} />
                <h2> <span className='font-bold'>Game Title</span>: <span className='font-medium'>{game_title}</span> </h2>
                <div className='flex items-center gap-1'> <h2> <span className='font-bold'>Rating:</span></h2>

                    <div className='flex items-center'>
                        <ReactStars count={5}

                            size={24}
                            activeColor="#ffd700"
                            value={rating}
                        >

                        </ReactStars>
                        <h2 className='font-medium'>{rating}</h2>
                    </div>
                </div>
                <h2> <span className='font-bold'>Publishing Year:</span> <span className='font-medium'>{publication_year}</span> </h2>
            </div>
            {/* Right */}
            <div className='px-2 space-y-3'>
                <Link to={`/updateReview/${_id}`} className='flex items-center gap-1'>

                    <h2 className='font-bold'>Update</h2>

                    <MdOutlineEdit />

                </Link>

                <button onClick={() => handleDelete(_id)} className='flex items-center gap-1'>

                    <h2 className='font-bold'>Delete</h2>

                    <RiDeleteBinLine />

                </button>

            </div>



        </div>
    );
};

export default ReviewCard;