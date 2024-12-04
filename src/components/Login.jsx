
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";

import { sendPasswordResetEmail, updateProfile } from 'firebase/auth';
// import logo from '../assets/logo.png'
import { GoogleLoginButton } from "react-social-login-buttons";
import { AuthContext } from './providers/AuthProvider';




const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname;
   
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef();
    const { loading, setLoading } = useContext(AuthContext);

    const { imageUrl, setImageUrl } = useContext(AuthContext);

    const { user, setUser } = useContext(AuthContext);
    const {targetPath}= useContext(AuthContext);
    const {resetEmail, setResetEmail}=useContext(AuthContext);

    const handlePasswordShow = () => {
        setShowPassword(!showPassword);
    }
    // useEffect( ()=>{

    //     setResetEmail('');
    // },[]);

    const handleLogIn = (e) => {
        e.preventDefault();
        //setLoginError('');
        const email = e.target.email.value;
        // console.log(email);
        const password = e.target.password.value;
        // console.log(password);
        signInUser(email, password)
            .then(result => {
                // console.log('Hello....', result.user);
                // if (!result.user.emailVerified) {

                //     setLoginError('Please verify your email address');
             

                    setUser(result.user);

                    // console.log(user);
                    // console.log('Hello..Target Path', targetPath)

                    navigate(targetPath);
                    e.target.reset();
                    setLoginError('');
                    setLoading(false);
                    setResetEmail('');
                
            })
            .catch(error => {
                // console.log('ERROR: ', error.message);
                setLoginError(error.message)
            })

    }

    // useEffect( ()=>{
    //     setLoginError('');

    // },[handleLogIn] )
    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
            //  console.log(result.user.email);
                //  navigate('/');
                 navigate(targetPath);

                setLoginError('');

                //   console.log("Updated: ",result.user);
                  setUser(result.user);

                  setLoading(false);
                  setResetEmail('');

             


               
                   

            })
            .catch(error => {
                // console.log('ERROR: ', error.message);
                setLoginError(error.message);
            })
    }

    
   

    const handleForgetPassword = () => {


        const email = emailRef.current.value;
      
        if(email){
            setResetEmail(email);
            navigate('/reset-password');
        }
        else {
            setLoginError('Please provide the registered email');
            return;
        }
  
    }
    return (
        <div className="hero bg-header_bg min-h-screen ">

            <div className="hero-content flex-col ">

                <Link to={'/'}  className='mx-auto'>
                      <img   className='w-20 h-20 md:w-40 md:h-36' src='https://i.ibb.co.com/HCQbjMS/logo.png' alt="logo" />
                </Link>
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl text-white font-bold">See more on sun@jit</h1>

                </div>
                <div className="card bg-base-100  w-full md:w-[400px] shrink-0 shadow-2xl">
                    <form onSubmit={handleLogIn} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-base">Email</span>
                            </label>
                            <input type="email" defaultValue={resetEmail} ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                       
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-bold text-base">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                            <button type='button' onClick={handlePasswordShow} className='absolute right-4 top-12'> {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}  </button>
                            <label onClick={handleForgetPassword}   className="label">
                                {/* <Link to={'/reset-password'} className="label-text-alt link link-hover text-base">Forgot password?</Link>
                                */}
                                <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className='ml-4 mb-4 mr-4'>
                        New to this website ? Please <Link to={'/register'}>Register</Link>
                    </p>
                    <div className='ml-4 mb-4 mr-4'>
                       
                         <GoogleLoginButton onClick={handleGoogleSignIn} className='text-sm' />
                        
                          
                    </div>

                    {
                        loginError && <p className='text-red-600 ml-4 mb-4 mr-4 '>
                            {loginError}

                        </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default Login;