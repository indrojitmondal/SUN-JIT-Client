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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     
     
      {
        path: '',
        element :  <MainLayout></MainLayout>
      },
     
      // {
      //   path: '/my-profile',
      //   element : <PrivateRoute> <MyProfile></MyProfile>  </PrivateRoute> 
      // },
      // {
      //   path: '/update-profile',
      //   element : <PrivateRoute> <UpdateProfile></UpdateProfile>  </PrivateRoute> 
      // },

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
  // {
  //   path: '*',
  //   element : <ErrorPage></ErrorPage>
  // },
  
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
