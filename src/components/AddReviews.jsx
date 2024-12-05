import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';

const AddReviews = () => {
    const {user}= useContext(AuthContext);
    // console.log(user.email);
    return (
        <div >
            <h2 className='text-2xl font-bold text-center pt-4 text-header_bg'>Add New Review</h2>

            <div className=" bg-base-200 lg:w-1/2 mx-auto ">
                <div className="hero-content ">

                    <div className=" w-full  shrink-0 shadow-2xl">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Game Cover Image</span>
                                </label>
                                <input type="text" placeholder="url" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Game Title</span>
                                </label>
                                <input type="text" placeholder="title" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Review Description</span>
                                </label>
                                <textarea placeholder="description" className="input input-bordered h-[100px]" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Rating</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter rating (1-5)"
                                    className="input input-bordered"
                                    min="1"
                                    max="5"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Publishing Year</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Enter year (e.g., 2021, 2024)"
                                    className="input input-bordered"
                                    min="1900"
                                    max="2100"
                                    step="1"
                                />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Genres</span>
                                </label>
                                <select className="select input input-bordered  w-full  ">
                                    {/* <option disabled selected>Size</option> */}
                                    <option>Action</option>
                                    <option>RPG</option>
                                    <option>Adventure</option>
                                    <option>Puzzle</option>
                                    <option>Simulation</option>
                                    {/* <option>L/30/46</option>
                                    <option>XL/32/48</option>
                                    <option>XXL/34/50</option> */}
                                </select>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">User Email</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    value={user.email}
                                    readOnly
                                />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary bg-header_bg">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;