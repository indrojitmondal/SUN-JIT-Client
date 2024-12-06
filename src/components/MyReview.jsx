import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    const loadedReviews= useLoaderData();
    const {user}= useContext(AuthContext);
    const {myReviews, setMyReviews} = useContext(AuthContext);
    //const [myReviews, setMyReviews]= useState(loadedReviews);
    useEffect(()=>{

        const loadedData= loadedReviews;
        //setMyReviews(loadedReviews);
        
        //console.log('Data from useEffect: ', loadedData);
       // console.log('Email from useEffect: ', user.email);
        const myData=loadedData.filter(review=>review.email===user.email)
        //console.log('My data: ', myData);
        setMyReviews(myData);
    },[])
    //const {game_url,game_title,rating,publication_year}= reviews;
    //console.log('My Total reviews: ',  myReviews.length);
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto pt-5'>
            {/* <h2>Hello from MyReview</h2>
            <h2>My total reviews: {myReviews.length} </h2> */}
           {  myReviews.length>0 &&
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                   myReviews?.map((review, idx)=> <ReviewCard key={idx} review={review} ></ReviewCard> ) 
                }
            </div>
            }
        </div>
    );
};

export default MyReview;