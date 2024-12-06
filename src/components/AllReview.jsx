import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewCard from './AllReviewCard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const AllReview = () => {
    const allReviewLoaded = useLoaderData();
    const [allReview, setAllReview]= useState(allReviewLoaded)

    const options = ['Rating','Year'];
    
    const defaultOption = options[0];
    const compareByRating=(a,b)=>{
        return (b.rating) - (a.rating);
    }
    const compareByYear=(a,b)=>{
        return (b.publication_year) - (a.publication_year);
    }
    const [sortStatus, setSortStatus]= useState(false);
   

    // Function to handle dropdown selection
    const handleSelect = (selectedOption) => {
        console.log('Selected:', selectedOption.value);
         // Logs the selected option
         const option= selectedOption.value;
         setSortStatus(true);
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
            <h2 className='text-xl font-bold'>Sort by</h2>
            <Dropdown className='w-1/2 py-4 mx-auto'
                options={options}
                onChange={handleSelect}
                value={defaultOption}
                placeholder="Select an option"
            />
            </div>

            {/* Display Reviews */} 
           
            {allReview.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {allReview?.map((review, idx) => (
                        <AllReviewCard key={idx} review={review}></AllReviewCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default AllReview;
