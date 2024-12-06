import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewCard from './AllReviewCard';

const AllReview = () => {
    const allReview= useLoaderData();
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto pt-5'>
            {/* <h2>Hello from MyReview</h2>
            <h2>My total reviews: {allReview.length} </h2> */}
           {  allReview.length>0 &&
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                   allReview?.map((review, idx)=> <AllReviewCard key={idx} review={review} ></AllReviewCard> ) 
                }
            </div>
            }
        </div>
    );
};

export default AllReview;