import React, { useContext } from 'react';
import { CgMenu } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import Profile from './Profile';
const Navbar = () => {
  const { user} = useContext(AuthContext);
  const links = <div className='flex flex-col md:flex-row items-center gap-5'>
       <Link>Home</Link>
       <Link>All Reviews</Link>
       <Link>Add Review</Link>
       <Link>My Reviews</Link>
       <Link>Game WatchList </Link>
  </div>
    return (
        <div className="navbar bg-header_bg text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg> */}
              
              <CgMenu className='text-xl font-bold text-yellow-600' />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-header_bg text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {/* <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li> */}
              {links}
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
          <img src="https://i.ibb.co.com/HCQbjMS/logo.png" className='w-16 h-16 lg:w-20 lg:h-20' alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           
            {links}
          </ul>
        </div>
       
        {
                    user ?



                        <div className="navbar-end md:text-lg flex gap-5 items-center">



                            <Profile></Profile>


                        </div> :
                        
                        <div className="navbar-end flex items-center gap-5">
       
                        <Link to={'/login'}   className='text-yellow-300'>Login</Link>
                        <Link to={'/register'}  className='text-yellow-300'>Register</Link>
                      </div>


                }

        
      </div>
    );
};

export default Navbar;