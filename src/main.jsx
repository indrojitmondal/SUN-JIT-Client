import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Root from './components/Root.jsx';
import MainLayout from './components/layoutComponent/MainLayout.jsx';
import AuthProvider from './components/providers/AuthProvider.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import AddReviews from './components/AddReviews.jsx';
import MyReview from './components/MyReview.jsx';
import GameWatchList from './components/GameWatchList.jsx';
import AllReview from './components/AllReview.jsx';
import ErrorPage from './components/ErrorPage.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     
     
      {
        path: '',
        element :  <MainLayout></MainLayout>
      },
      {
        path: '/all-review',
        element: <AllReview></AllReview>
      },
     
      {
        path: '/add-review',
        element : <PrivateRoute> <AddReviews></AddReviews>  </PrivateRoute> 
      },
      {
        path: '/my-review',
        element : <PrivateRoute> <MyReview></MyReview>  </PrivateRoute> 
      },
      {
        path: '/game-watch-list',
        element : <PrivateRoute> <GameWatchList></GameWatchList>  </PrivateRoute> 
      },
     

      // {
      //   path: '/brands',
      //   element :  <Brands></Brands> 
      // },
      // {
      //   path: '/about-dev',
      //   element : <AboutDev></AboutDev>
      // },
      // {
      //   path: '/brand/:id',
      //   element : <PrivateRoute> <BrandDetails></BrandDetails> </PrivateRoute> ,
      //   loader : ()=> fetch('/coupons.json')
      // }

    ]

  },
  {
    path:'/login',
    element: <Login></Login>
  },
  // {
  //   path:'/reset-password',
  //   element: <UpdatePassword></UpdatePassword>
  // },
  {
    path:'/register',
    element: <Register></Register>
  },
  {
    path: '*',
    element : <ErrorPage></ErrorPage>
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider>



      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
 

  </HelmetProvider>

  </StrictMode>
)
