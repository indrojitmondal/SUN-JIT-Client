import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './providers/AuthProvider';

const ExploreDetails = () => {
    const loadedData = useLoaderData();
    const {user}=useContext(AuthContext);
    const { game_url, game_title, game_description, rating, publication_year, genres, name, email } = loadedData;
    
    //console.log('Name from Explore Details: ', name);
    //console.log('Data from Explore Details: ', loadedData);
     const myWatchList= {
        
        game_url, game_title, game_description, rating, publication_year, genres, name, email,
        user_email: `${user.email}`



     };
     console.log('Hello myWatchList',myWatchList);
    const handleAddToWatchList=()=>{
       // alert('Clicked Add to WatchList');
        console.log('Post this data to watchList', loadedData);
        if(user){
        fetch('https://sunjit-server.vercel.app/myWatchList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(myWatchList)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Data from API:', data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Added to WatchList',
                        text: 'Review has been added to watchList successfully ',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                   // form.reset();
                }
            })
            .catch(error => {
                console.error("Error adding review:", error);
                Swal.fire({
                    title: 'Error',
                    text: 'The review maybe already added to your watchList or not logged in. Please try again. ',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
            .finally(() => {
                // Stop loading after request is finished
                //setLoading(false);
            });
        }
        else{
            
            Swal.fire({
                title: 'Error',
                text: 'You are not able to add this review to watchList. Please log in and try again. ',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    
    }

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
                        <h2><span className='text-lg font-bold'>Publication-Year: </span>  {publication_year}</h2>
                        <h2><span className='text-lg font-bold'>Reviewer's name: </span>  {name} </h2>
                        <h2><span className='text-lg font-bold'>Reviewer's email: </span>  {email}</h2>

                    </div>
                    <div className='flex justify-center'> 

                    <button onClick={handleAddToWatchList} className='btn  '>Add to WatchList"</button>
                

                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ExploreDetails;