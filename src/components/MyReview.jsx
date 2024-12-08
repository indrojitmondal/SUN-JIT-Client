import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import ReviewCard from './ReviewCard';

const MyReview = () => {
    //const loadedReviews = useLoaderData();
    const { user } = useContext(AuthContext);
    const { myReviews, setMyReviews } = useContext(AuthContext);
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sunjit-server.vercel.app/reviews');
                const data = await response.json();
                const myData = data.filter(review => review.email === user.email)
                setMyReviews(myData);
                setLoading(false);

            } catch (error) {
                //console.error('Error fetching reviews:', error);
                setLoading(false); // Stop loading even if there's an error
            }
        };

        fetchData();
    }, []);



    return (
        <div className='w-11/12 lg:w-10/12 mx-auto pt-5'>

            {

                loading ? (
                    <p className="text-xl font-bold text-center">Please Wait...</p>

                ) : (
                    <>
                        {
                        myReviews.length > 0 ? (
                            <div>
                                  <h2 className='py-4 text-2xl font-bold text-center'>My Reviews</h2>

                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {
                                    myReviews?.map((review, idx) => <ReviewCard key={idx} review={review} ></ReviewCard>)
                                }
                            </div> 
                            </div>
                            ) : (
                                <p className="text-center text-xl">No reviews found. Please Add Review. </p>
                            )
                        }

                    </>
                )
            }


        </div>
    );
};

export default MyReview;