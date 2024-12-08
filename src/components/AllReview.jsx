import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllReviewCard from './AllReviewCard';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ClipLoader from "react-spinners/ClipLoader";

const AllReview = () => {
    const [allReviewLoaded, setAllReviewLoaded] = useState([]);
   
    //console.log('AllReviewLoaded: ', allReviewLoaded);
    const [allReview, setAllReview] = useState(allReviewLoaded)
    const [loading, setLoading] = useState(true);
    const [color, setColor] = useState("#ffffff");
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://sunjit-server.vercel.app/reviews');
                const data = await response.json();
                setAllReviewLoaded(data);
                setAllReview(data);
                setLoading(false);
            } catch (error) {
                //console.error('Error fetching reviews:', error);
                setLoading(false); // Stop loading even if there's an error
            }
        };

        fetchData();
    }, []);
    const options1 = ['Action', 'RPG', 'Adventure', 'Puzzle', 'Simulation'];
    const defaultOption1 = options1[0];
    const options = ['Rating', 'Year'];

    const defaultOption = options[0];
    const compareByRating = (a, b) => {
        return (b.rating) - (a.rating);
    }
    const compareByYear = (a, b) => {
        return (b.publication_year) - (a.publication_year);
    }

    const [listStatus, setListStatus] = useState(false);


    // Function to handle dropdown selection

    const handleSelect1 = (selectedOption) => {
        // console.log('Selected:', selectedOption.value);
        // Logs the selected option
        const option = selectedOption.value;
        // console.log('Genre Type:', option);
        // console.log('HelloAllLoadedData: ', allReviewLoaded);

        const filterData = allReviewLoaded.filter(review => review.genres === option);
        // console.log('Hello..filterData from1',filterData);

        setAllReview(filterData);

    };


    const handleSelect = (selectedOption) => {
        // console.log('Selected:', selectedOption.value);
        // Logs the selected option
        const option = selectedOption.value;
        //setListStatus(true);
        if (option == 'Rating') {
            //console.log('Data from handleSelect: ', allReview);

            const copyData = [...allReview];
            // console.log('copyData',copyData);
            copyData.sort(compareByRating);
            // console.log('SortByRating data: ',allReview);

            setAllReview(copyData);

        }
        else {
            const copyData = [...allReview];
            //console.log('copyData',copyData);
            copyData.sort(compareByYear);

            setAllReview(copyData);
        }
    };

    return (
        <div className="w-11/12 lg:w-10/12 mx-auto pt-5">
            {loading ? (
             <p className="text-xl font-bold text-center">Please Wait...</p>
        
             //     <ClipLoader
        //     color="#36d7b7" // Customizable color
        //     size={100}       // Customizable size
        //     aria-label="Loading Spinner"
        //   />
                ) : (
                <>
                    <h2 className='py-4 text-2xl font-bold text-center'>All Reviews</h2>
            
                    {/* Dropdowns */}
                    <div className="flex items-center">
                        <h2 className="text-xl font-bold">Genre Type</h2>
                        <Dropdown
                            className="w-1/2 py-4 mx-auto"
                            options={options1}
                            onChange={handleSelect1}
                            value={defaultOption1}
                            placeholder="Select an option"
                        />
                    </div>

                    <div className="flex items-center">
                        <h2 className="text-lg font-bold">Sort by</h2>
                        <Dropdown
                            className="w-1/2 py-4 mx-auto"
                            options={options}
                            onChange={handleSelect}
                            value={defaultOption}
                            placeholder="Select an option"
                        />
                    </div>

                    {/* Display Reviews */}
                    {allReview.length > 0 ? (
                        <div className="grid md:grid-cols-2 mt-5 lg:grid-cols-3 gap-4">
                            {allReview.map((review, idx) => (
                                <AllReviewCard key={idx} review={review} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-xl">No reviews found.</p>
                    )}
                </>
            )}
        </div>
    );

};

export default AllReview;