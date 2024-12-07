
import React, { useContext, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../providers/AuthProvider';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { updateProfile } from 'firebase/auth';


import logo from '../assets/logo.png'
import { auth } from './firebase/firebase.init';
import { AuthContext } from './providers/AuthProvider';
import Swal from 'sweetalert2';
const Register = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');



    
    const { createUser, setUser, sendVerification, imageUrl, setImageUrl } = useContext(AuthContext);
    
   
   
    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    }

    
    const navigate = useNavigate();
    const regex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&]{6,}$/;

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const photo = e.target.photo.value;
        

        // console.log(photo);

        setImageUrl(photo);
      

          
       
        // console.log(name, email, password, terms, photo);

      


     

        setErrorMessage('');
        setSuccessMessage('');
        setSuccess(false);
        // setVerificationMessage('');
       
        if (!regex.test(password)) {
            setErrorMessage('Password should be at least one upper case letter, one lower case letter and total length should be at least 6');
            return;
        }
        createUser(email, password)
            .then(result => {
              
                e.target.reset();
                
               

                const profile= {
                    displayName: name,
                    email: email,
                    photoURL: photo,
                }
                // console.log(profile);
          

                updateProfile(auth.currentUser, profile)
                .then( ()=>{

                    // console.log('Okay?', result.user);

                    setUser(result.user);
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Registered",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    navigate('/');

                })
                .catch( error =>{
                    setErrorMessage(error.errorMessage);
                })

                // console.log(result);



                setSuccess(true);
                setErrorMessage('');
               // setSuccessMessage('Successfully Registered and Send email verification. Please verify!');
            })
            .catch(error => {
                // console.log('ERROR:', error.message);
                setErrorMessage(error.message);
            })




    }
   
    // useEffect( ()=>{
    //     setImageUrl('');
    // },[handleRegister]);
    return (
        <div className="hero bg-header_bg min-h-screen ">
            <div className="hero-content flex-col ">

            <Link to={'/'}  className='mx-auto'>
                      <img   className='w-20 h-20 md:w-40 md:h-36' src={logo} alt="logo" />
                </Link>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-white font-bold">Register Now!</h1>

                </div>
                <div className="card bg-base-100  w-full md:w-[600px] shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                       
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            <button type='button' onClick={handlePasswordShow} className='absolute right-4 top-12'> {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}  </button>

                        </div>

                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Photo URL</span>
                            </label>

                            <input type="text" name='photo' placeholder="photoURL" className="input input-bordered" required />
                       

                        </div>
                        {/* <div className="form-control">
                            <label className="label justify-start cursor-pointer">
                                <input type="checkbox" name='terms' className="checkbox" />
                                <span className="label-text ml-2">Accept our terms and condition</span>

                            </label>
                        </div> */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4 mr-4'>
                        Already have an account ? Please <Link to={'/login'}>Login</Link>
                    </p>
                    {
                        errorMessage && <p className='text-red-600 ml-4 mb-4 mr-4 '>
                            {errorMessage}

                        </p>
                    }
                    {
                        success && <p className='text-green-600 ml-4 mb-4 mr-4 '>
                            {successMessage}

                        </p>
                    }
                    {/* {
                        verificationMessage && <p className='text-black ml-4 mb-4 mr-4 '> 
                          {verificationMessage}

                        </p>
                    } */}

                </div>
            </div>
        </div>
    );
};

export default Register;