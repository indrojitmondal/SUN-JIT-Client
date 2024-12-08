import React, { useEffect, useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import HighRateGameCard from './HighRateGameCard';
import { ClipLoader } from 'react-spinners';
const HighestRatedGame = () => {
    const [highRatedReviews, setHighRatedReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sunjit-server.vercel.app/highRatedGames');
                const data = await response.json();
                setHighRatedReviews(data);
                setLoading(false);

            } catch (error) {
                setLoading(false);
            }
        }
        fetchData();

    }, []);
    return (
        <div>
            <section className="my-10 w-11/12  lg:w-10/12 mx-auto">

                <Slide> <h1 className="font-bold text-center text-p2 pt-1 lg:pt-8 lg:pb-8 text-2xl">HIGHEST RATED GAMES</h1>
                </Slide>
                {
                    loading ? (
                    
                     <div className=''>
                            <ClipLoader 
                        color="#36d7b7" // Customizable color
                    // color='#FF914D'
                     size={50}       // Customizable size
                     aria-label="Loading Spinner" className=''
                    />
                     </div>

                    ) : (
                        <div className='grid  lg:grid-cols-2 gap-5'>

                            {
                                highRatedReviews.map((review, idx) => <HighRateGameCard key={idx} review={review} ></HighRateGameCard>)
                            }
                        </div>
                    )
                }






            </section>
        </div>
    );
};

export default HighestRatedGame;