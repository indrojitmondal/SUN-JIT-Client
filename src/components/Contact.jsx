import React from 'react';
import { IoMdCall } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div>
            <section id="contact" className="my-10 w-11/12 lg:w-10/12 mx-auto">
                <h1 className="font-bold text-center text-p2 mt-1 text-3xl">CONTACT US</h1>
               

                <div className="mt-2 up-container grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="contact-description flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <IoMdCall className='text-2xl' />
                            <div>
                                <h3 className="text-xl">Call us</h3>
                                <p>
                                    +880-1966796110 <br />
                                    +880-1577147931
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* <img src="./images/mail.png" className="w-12 h-14 hover:text-primary" alt="" />
                             */}
                             <MdOutlineMail className='text-2xl' />
                            <div>
                                <h3 className="text-xl">Send US an email</h3>
                                <p>sun@jit.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* <img src="./images/location.png" className="w-12 h-14 hover:text-primary" alt="" />
                           */}
                           <FaLocationDot className='text-2xl' />
                            <div>
                                <h3 className="text-xl">Location</h3>
                                <p>
                                    Paikgacha Municipality 9280<br />
                                    Khulna, Bangladesh
                                </p>
                            </div>
                        </div>

                        <div className="contact">
                            <div className="pb-6 flex gap-3 lg:gap-5">
                                <a
                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                    title="Email"
                                    target="_blank"
                                    className="block"
                                >
                                    <i className="fa-solid fa-envelope text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a
                                    href="https://github.com/indrojitmondal"
                                    title="Github"
                                    target="_blank"
                                    className="block"
                                >
                                    <i className="fa-brands fa-github text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/indrojit-mondal-8a36b315a/"
                                    title="LinkedIn"
                                    className="block"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a
                                    href="https://meet.google.com/vzp-rcgn-mhe"
                                    title="Google Meet"
                                    className="block"
                                    target="_blank"
                                >
                                    <i className="fas fa-video text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a
                                    href="https://join.skype.com/invite/q7lfzaKU09hL"
                                    title="Skype"
                                    className="block"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-skype text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                                <a
                                    href="https://wa.me/8801966796110"
                                    title="WhatsApp"
                                    target="_blank"
                                    className="block"
                                >
                                    <i className="fa-brands fa-whatsapp text-5xl lg:text-5xl hover:text-primary"></i>
                                </a>
                            </div>

                            {/* <p className="text-justify">
                                The best way to contact me is via{' '}
                                <a
                                    href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=indro.cse.bu@gmail.com"
                                    target="_blank"
                                    className="text-sm text-primary hover:underline"
                                >
                                    email
                                </a>
                                . I try to respond to every message.
                            </p> */}
                        </div>
                    </div>

                    <form id="input-container" className="input-container flex flex-col gap-5">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="form-control">
                                <input
                                    required
                                    className="block w-full h-16 border border-gray-300 outline-none p-4 text-black"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    required
                                    className="block w-full h-16 border border-gray-300 outline-none p-4 text-black"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className="block w-full h-16 border border-gray-300 outline-none p-4 text-black"
                                    type="phone"
                                    id="phone"
                                    placeholder="Your Phone"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    className="block w-full h-16 border border-gray-300 outline-none p-4 text-black"
                                    type="text"
                                    id="company"
                                    placeholder="Your Subject"
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <textarea
                                required
                                id="message"
                                cols="30"
                                rows="5"
                                className="border border-gray-300 outline-none p-4 text-black"
                                placeholder="Start Writing Message here"
                            ></textarea>
                        </div>
                        <div className="form-control">
                            <button
                                className="block w-2/4 h-14 md:h-16 border hover:border-primary border-primary bg-header_bg hover:text-primary hover:bg-white text-white outline-none p-2 md:text-xl"
                                type="submit"
                                id="sendButton"
                            >
                                SUBMIT NOW
                            </button>
                        </div>
                        <p
                            id="formConfirmation"
                            className="hidden px-4 py-2 border border-green-500"
                        >
                            Thank you for your message. It has been sent.
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;