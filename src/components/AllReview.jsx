import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewCard from './AllReviewCard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AllReview = () => {
    const [allReviewLoaded, setAllReviewLoaded]=useState([]); 

    console.log('AllReviewLoaded: ', allReviewLoaded);
    const [allReview, setAllReview]= useState(allReviewLoaded)
    useEffect(()=>{
     
        fetch('https://sunjit-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>{
            console.log('Total data', data.length)
           setAllReviewLoaded(data);
           setAllReview(data);
        })

    },[])
    const options1 = ['Action','RPG', 'Adventure','Puzzle','Simulation'];
    const defaultOption1 = options1[0];
    const options = ['Rating','Year'];
    
    const defaultOption = options[0];
    const compareByRating=(a,b)=>{
        return (b.rating) - (a.rating);
    }
    const compareByYear=(a,b)=>{
        return (b.publication_year) - (a.publication_year);
    }

    const [listStatus, setListStatus]= useState(false);
   

    // Function to handle dropdown selection
    
    const handleSelect1 = (selectedOption) => {
        console.log('Selected:', selectedOption.value);
         // Logs the selected option
         const option= selectedOption.value;
        console.log('Genre Type:', option);
        const filterData= allReviewLoaded.filter(review=> review.genres===option);
        setAllReview(filterData);
        
    };
   

    const handleSelect = (selectedOption) => {
        console.log('Selected:', selectedOption.value);
         // Logs the selected option
         const option= selectedOption.value;
          //setListStatus(true);
         if(option=='Rating'){
           console.log('Data from handleSelect: ', allReview);
            
           const copyData= [...allReview];
           console.log('copyData',copyData);
           copyData.sort(compareByRating);
           console.log('SortByRating data: ',allReview);

           setAllReview(copyData);
        
        }
        else{
            const copyData= [...allReview];
            console.log('copyData',copyData);
            copyData.sort(compareByYear);
            
            setAllReview(copyData);
        }
    };

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto pt-5">
            {/* Dropdown */}
            
            <div className='flex items-center'>
            <h2 className='text-xl font-bold'>Genre Type</h2>
            
            <Dropdown className='w-1/2 py-4 mx-auto'
                options={options1}
                onChange={handleSelect1}
                value={defaultOption1}
                placeholder="Select an option"
            />
            </div>


            <div className='flex items-center'>
            <h2 className='text-lg font-bold'>Sort by</h2>
            
            <Dropdown className='w-1/2 py-4 mx-auto'
                options={options}
                onChange={handleSelect}
                value={defaultOption}
                placeholder="Select an option"
            />
            </div>

            {/* Display Reviews */}

            {/* {
                !listStatus &&  
                <div className="grid md:grid-cols-2 mt-5 lg:grid-cols-3 gap-6">
                    {allReviewLoaded?.map((review, idx) => (
                        <AllReviewCard key={idx} review={review}></AllReviewCard>
                    ))}
                </div>
            }  */}
           
            {allReview.length > 0 && (
                <div className="grid md:grid-cols-2 mt-5 lg:grid-cols-3 gap-4">
                    {allReview?.map((review, idx) => (
                        <AllReviewCard key={idx} review={review}></AllReviewCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllReview;