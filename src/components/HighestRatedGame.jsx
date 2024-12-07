import React, { useEffect, useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import HighRateGameCard from './HighRateGameCard';
const HighestRatedGame = () => {
    const [highRatedReviews, setHighRatedReviews] = useState([]);
    useEffect(() => {
        fetch('https://sunjit-server.vercel.app/highRatedGames')
            .then(res => res.json())
            .then(data => setHighRatedReviews(data));
    }, [])
    return (
        <div>
            <section className="my-10 w-11/12  lg:w-10/12 mx-auto">

                <Slide> <h1 className="font-bold text-center text-p2 pt-1 lg:pt-8 lg:pb-8 text-3xl">HIGHEST RATED GAMES</h1>
                </Slide>
                {/* <p>Hello...from HighestRatedGame. High Data length from API: {highRatedReviews.length} </p> */}

                <div className='grid  lg:grid-cols-2 gap-5'>

                {/* <HighRateGameCard></HighRateGameCard>
                <HighRateGameCard></HighRateGameCard>
                <HighRateGameCard></HighRateGameCard>
                <HighRateGameCard></HighRateGameCard> */}
                  {
                     highRatedReviews.map((review,idx)=> <HighRateGameCard key={idx} review={review} ></HighRateGameCard>)
                  }
                </div>
               




            </section>
        </div>
    );
};

export default HighestRatedGame;