import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const MyReview = () => {
    const loadedReviews= useLoaderData();
    const [reviews, setReviews]= useState(loadedReviews);
    return (
        <div>
            <h2>Hello from MyReview</h2>
            <h2>My total reviews: {reviews.length} </h2>
        </div>
    );
};

export default MyReview;