import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {






    return (
        <>
            <footer className="mt-20  ">


                {/* Upper section */}







                {/* Downer section */}

                <div className="downer   bg-black w-full">
                    <div className="text-white bg-white    w-11/12 mx-auto">
                        {/* start from here */}
                        <div className='text-white  bg-black'>

                            <img className='mx-auto pt-4 mt-36 md:mt-0 w-36 h-36' src="https://i.ibb.co.com/HCQbjMS/logo.png" alt="" />


                            <div className='mt-5 grid grid-cols-1 md:grid-cols-3 gap-5 align-top pb-8'>
                                <div className="about space-y-3">

                                    <h3 className='text-lg font-semibold'>About</h3>
                                    <p className=''>We are a passionate team dedicated to providing the best services to our customers.</p>

                                </div>
                                <div className="links pl-10">

                                    <h3 className='text-lg font-semibold space-y-3 '>Quick Links</h3>

                                    <ul className='pl-8 list-disc flex flex-col '>
                                        {/* <li>Home</li>
                                        <li>Services</li>
                                        <li>About</li>
                                        <li>Contact</li> */}
                                        <Link>Home</Link>
                                        <Link>Add Review</Link>
                                        <Link>My Review</Link>
                                        <Link>Game WatchList</Link>
                                    </ul>


                                </div>
                                <div className="subscribes flex flex-col space-y-3 ">

                                    {/* <h3 className='text-lg font-semibold'>Subscribe</h3>
                                    <p className=''>Subscribe to our newsletter for the latest updates.</p>

                                    <div className="  flex items-center gap-4">
                                        <input type="text" id='mail1' placeholder="Enter your email" className="input text-black input-bordered" />
                                        <button
                                           
                                            className="gradient-button">Subscribe</button>
                                    </div> */}

                                    <h3 className='text-lg font-semibold'>Our Address</h3>

                                    <iframe
                                        className="google-map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14734.484963348057!2d89.3156934!3d22.59326515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01d42e13245d21%3A0x663812c70649e60f!2sPaikgachha!5e0!3m2!1sen!2sbd!4v1733338193489!5m2!1sen!2sbd"


                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />




                                </div>
                            </div>
                        </div>

                    </div>



                    <footer className="footer  fBorder  footer-center bg-black text-white p-4">
                        <aside>
                            <p>@{new Date().getFullYear()} <a href="https://indrojitmondal.netlify.app/about">Indrojit. </a> All Rights Reserved.</p>

                            {/* @2024 Your Company All Rights Reserved. */}
                        </aside>
                    </footer>

                </div>





            </footer>




        </>


    );
};

export default Footer;