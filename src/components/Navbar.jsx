import React, { useContext, useEffect } from 'react';
import { CgMenu } from "react-icons/cg";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import Profile from './Profile';
import { Typewriter } from 'react-simple-typewriter';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;
  const [isDarkMode, setDarkMode] = React.useState(false);

  
 // Update the body attribute on theme toggle
  useEffect( ()=>{
   document.body.setAttribute('data-theme',  isDarkMode ? 'dark' : 'light');
  },[isDarkMode])

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  const links = (
    <div className='flex flex-col md:flex-row items-center text-lg gap-5'>
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/reviews'}>All Reviews</NavLink>
      <NavLink to={'/addReview'}>Add Review</NavLink>
      <NavLink to={'/myReviews'}>My Reviews</NavLink>
      <NavLink to={'/myWatchlist'}>Game WatchList</NavLink>
      {
            path === '/' &&
            <DarkModeSwitch
              className='ml-5 '
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={50}
            />
       }
    </div>
  );

  return (
    <div>
      <div className="navbar py-5 bg-header_bg text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <CgMenu className='text-xl font-bold text-yellow-600' />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-header_bg text-white rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <img src="https://i.ibb.co.com/HCQbjMS/logo.png" className='w-16 h-16 md:w-40 md:h-36' alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex lg:flex-col">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
          {path === '/' && (
            <div className='App'>
              <h1 className='pt-4 font-normal text-orange-400'>
                By SUN@JIT, you can {' '}
                <span style={{ color: 'red', fontWeight: 'bold' }}>
                  <Typewriter
                    words={['add review', 'see review', 'see watchList']}
                    loop={7}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
                game
              </h1>
            </div>
          )}
         
        </div>
        {user ? (
          <div className="navbar-end md:text-lg flex gap-5 items-center">
            <Profile />
          </div>
        ) : (
          <div className="navbar-end flex items-center gap-5">
            <Link to={'/login'} className='text-yellow-300 text-lg'>Login</Link>
            <Link to={'/register'} className='text-yellow-300 text-lg'>Register</Link>
          </div>
        )}
      </div>
      {path === '/' && (
        <div className='App bg-header_bg md:hidden'>
          <h1 className='py-2 text-center font-normal text-orange-400'>
            By SUN@JIT, you can {' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              <Typewriter
                words={['add review', 'see review', 'see watchList']}
                loop={7}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            game
          </h1>
        </div>
      )}
    </div>
  );
};

export default Navbar;
