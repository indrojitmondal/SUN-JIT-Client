import React, { useContext } from 'react';
import { CgMenu } from "react-icons/cg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import Profile from './Profile';
import { Typewriter } from 'react-simple-typewriter';
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  // const handleType = (count: number) => {
  //   // access word count number
  //   console.log(count)}
  // }

  // const handleDone = () => {
  //   console.log(`Done after 5 loops!`)
  // }
  // console.log(user.photoURL);
  const links = <div className='flex flex-col md:flex-row items-center text-lg gap-5'>
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/reviews'}>All Reviews</NavLink>
    {
     <NavLink to={'/addReview'}>Add Review</NavLink>
    }
    {
     <NavLink to={'/myReviews'}>My Reviews</NavLink>
    }
    {
       <NavLink to={'/myWatchlist'}>Game WatchList </NavLink>
    }


  </div>
  return (
    
    <div>
          <div className="navbar py-5 bg-header_bg  text-white">
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
        <img src="https://i.ibb.co.com/HCQbjMS/logo.png" className='w-16 h-16 md:w-40 md:h-36' alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex lg:flex-col">
        <ul className="menu menu-horizontal px-1">

          {links}
        </ul>

        {/* <div className="form-control mt-2">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div> */}

        {path=='/' &&
         <div className='App'>
     
        <h1 className='pt-4 font-normal text-orange-400'>
        
        By SUN@JIT, you can {' '} 
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['add review', 'see review', 'see watchList']}
            loop={7}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
        game
      </h1>
         </div>
        }


     

      </div>
     
   



      {
        user ?



          <div className="navbar-end md:text-lg flex gap-5 items-center">



            <Profile></Profile>


          </div> :

          <div className="navbar-end flex items-center gap-5">

            <Link to={'/login'} className='text-yellow-300 text-lg'>Login</Link>
            <Link to={'/register'} className='text-yellow-300 text-lg'>Register</Link>
          </div>


      }




    </div>

    {
        path=='/' &&
      
      <div className='App bg-header_bg md:hidden '>
      {/* <h1 style={{ paddingTop: '1rem', margin: 'auto 0', fontWeight: 'normal' }}>
        */}
        <h1 className='py-2 text-center font-normal text-orange-400'>
         
        By SUN@JIT, you can {' '} 
        <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['add review', 'see review', 'see watchList']}
            loop={7}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
        game
      </h1>
      </div>
      }

    </div>

  );
};

export default Navbar;