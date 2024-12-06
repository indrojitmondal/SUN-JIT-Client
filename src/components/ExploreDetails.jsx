import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ExploreDetails = () => {
    const loadedData = useLoaderData();
    const { game_url, game_title, game_description, rating, publication_year, genres, name, email } = loadedData;

    //console.log('Name from Explore Details: ', name);
    //console.log('Data from Explore Details: ', loadedData);
    return (
        <div className='w-11/12 lg:w-11/12 mx-auto'>
            <h2 className='text-2xl text-center py-4 font-bold'>Review Details</h2>
            <div className='flex justify-center'>
                <div className=''>
                    <img src={game_url} alt={game_title} />
                    <div className='pt-4'>
                        <h2  > <span className='text-lg font-bold'>Title: </span> {game_title} </h2>
                        <p > <span className='text-lg font-bold' >Review description: </span>  {game_description} </p>
                        <h2> <span className='text-lg font-bold'>Rating: </span>  {rating} </h2>
                        <h2><span className='text-lg font-bold'>Genre: </span>  {genres}</h2>
                        <h2><span className='text-lg font-bold'>Reviewer's name: </span>  {name} </h2>
                        <h2><span className='text-lg font-bold'>Reviewer's email: </span>  {email}</h2>

                    </div>
                    <div className='flex justify-center'> 

                    <button className='btn  '>Add to WatchList"</button>
                

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExploreDetails;