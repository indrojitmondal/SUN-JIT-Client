import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';

const MyReview = () => {
    const loadedReviews= useLoaderData();
    const {user}= useContext(AuthContext);
    const [myReviews, setMyReviews]= useState(loadedReviews);
    useEffect(()=>{

        const loadedData= loadedReviews;
        
        console.log('Data from useEffect: ', loadedData);
        console.log('Email from useEffect: ', user.email);
        const myData=loadedData.filter(review=>review.email===user.email)
        console.log('My data: ', myData);
        setMyReviews(myData);
    },[])
    //const {game_url,game_title,rating,publication_year}= reviews;
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto pt-5'>
            <h2>Hello from MyReview</h2>
            <h2>My total reviews: {myReviews.length} </h2>
        </div>
    );
};

export default MyReview;