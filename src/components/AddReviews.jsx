import React, { useContext, useState } from 'react';
import { AuthContext } from './providers/AuthProvider';
import Swal from 'sweetalert2';

const AddReviews = () => {
    const { user } = useContext(AuthContext);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [loading, setLoading] = useState(false); // New loading state

    const handleChange = (event) => {
        setSelectedGenre(event.target.value); // Update state with selected value
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const game_url = event.target.game_url.value;
        const game_title = event.target.game_title.value;
        const game_description = event.target.game_description.value;
        const rating = event.target.rating.value;
        const publication_year = event.target.publication_year.value;
        const genres = selectedGenre;
        const name= user.displayName;
        const email = user.email;
        //console.log(email);

        // console.log("From submit:", game_url, game_title, game_description, rating, publication_year, selectedGenre);

        const newReview = { game_url, game_title, game_description, rating, publication_year, genres, name, email };
        //console.log(newReview);

        // Start loading
        setLoading(true);

        fetch('https://sunjit-server.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
               // console.log('Data from API:', data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Submitted',
                        text: 'Review Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    form.reset();
                }
            })
            .catch(error => {
                console.error("Error adding review:", error);
                Swal.fire({
                    title: 'Error',
                    text: 'There was an error adding the review. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
            .finally(() => {
                // Stop loading after request is finished
                setLoading(false);
            });
    };

    return (
        <div>
            <h2 className='text-2xl font-bold text-center pt-4 text-header_bg'>Add New Review</h2>

            <div className=" bg-base-200 lg:w-1/2 mx-auto ">
                <div className="hero-content ">

                    <div className=" w-full shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Game Cover Image</span>
                                </label>
                                <input type="text" name='game_url' placeholder="url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Game Title</span>
                                </label>
                                <input type="text" name='game_title' placeholder="title" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Review Description</span>
                                </label>
                                <textarea placeholder="description" name='game_description' className="input input-bordered h-[100px]" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    name='rating'
                                    placeholder="Enter rating (1-5)"
                                    className="input input-bordered"
                                    min="1"
                                    max="5"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Publishing Year</span>
                                </label>
                                <input
                                    type="number"
                                    name='publication_year'
                                    placeholder="Enter year (e.g., 2021, 2024)"
                                    className="input input-bordered"
                                    min="1900"
                                    max="2100"
                                    step="1"
                                    required
                                />
                            </div>

                            {/* <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Genres</span>
                                </label>
                                <select className="select input input-bordered  w-full"
                                    onChange={handleChange} 
                                    required
                                    >
                                    <option>Action</option>
                                    <option>RPG</option>
                                    <option>Adventure</option>
                                    <option>Puzzle</option>
                                    <option>Simulation</option>
                                    
                                </select>
                            </div> */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Genres</span>
                                </label>
                                <select
                                    className="select input input-bordered w-full"
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="" disabled selected>Select a Genre</option>
                                    <option>Action</option>
                                    <option>RPG</option>
                                    <option>Adventure</option>
                                    <option>Puzzle</option>
                                    <option>Simulation</option>
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input font-bold input-bordered"
                                    value={user.email}
                                    readOnly
                                    disabled
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">User Name</span>
                                </label>
                                <input
                                    type="email"
                                    className="input font-bold input-bordered"
                                    value={user.displayName}
                                    readOnly
                                    disabled
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-header_bg" disabled={loading}>
                                    {loading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;
