import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ExploreDetails = () => {
    const loadedData = useLoaderData();
    const { game_url, game_title, game_description, rating, publication_year, genres, name, email } = loadedData;

    //console.log('Name from Explore Details: ', name);
    //console.log('Data from Explore Details: ', loadedData);
    return (
        <div className='w-11/12 lg:w-11/12 mx-auto'>
            <h2 className='text-xl text-center py-4 font-bold'>Review Details</h2>
            <div className='flex justify-center'>
                <div className=''>
                    <img src={game_url} alt={game_title} />
                    <h2>Title: {game_title} </h2>
                    <p>Review description: {game_description} </p>
                    <h2>Rating: {rating} </h2>
                    <h2>Genre: {genres}</h2>
                    <h2>Reviewer's name: {name} </h2>
                    <h2>Reviewer's email: {email}</h2>
                </div>
            </div>
        </div>
    );
};

export default ExploreDetails;