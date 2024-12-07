import React, { useEffect, useState } from 'react';
import { Fade, Slide } from "react-awesome-reveal";
const HighestRatedGame = () => {
    const [highRatedReviews, setHighRatedReviews]= useState([]);
    useEffect(()=>{
        fetch('https://sunjit-server.vercel.app/highRatedGames')
        .then(res=> res.json())
        .then(data=> setHighRatedReviews(data));
    },[])
    return (
        <div>
             <section  className="my-10 w-11/12 lg:w-10/12 mx-auto">
          
                <Slide>
                           
                        <h1 className="font-bold text-center text-p2 mt-1 text-3xl">HIGHEST RATED GAMES</h1>
               
                 </Slide>
                <p>Hello...from HighestRatedGame. High Data length from API: {highRatedReviews.length} </p>
                


            </section>
        </div>
    );
};

export default HighestRatedGame;