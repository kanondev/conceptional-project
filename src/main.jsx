import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './assets/conponents/MainLayout/MainLayout';
import Home from './assets/conponents/Home/Home';
import Profile from './assets/conponents/profile/Profile';
import MyAppoinments from './assets/conponents/My appoinments/MyAppoinments';
import AllTreatMents from './assets/conponents/All treatments/AllTreatMents';
import Detials from './assets/conponents/Detials/Detials';
import Authprovider from './assets/conponents/AuthProvider/Authprovider';
import Login from './assets/conponents/Login/Login';
import Register from './assets/conponents/Register/Register';
import PrivateRoute from './assets/conponents/PrivateRoute/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: async ()=> {
          const servicesRes = await fetch("/service.json");
          const servicesData = await servicesRes.json()

          const feedBackRes = await fetch("/review.json");
          const feedBackData = await feedBackRes.json()

          return {servicesData, feedBackData}
        } 
      },
      {
        path:"profile",
        element:<PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      },
      {
        path:"myappoinments",
        element:<PrivateRoute>
          <MyAppoinments></MyAppoinments>
        </PrivateRoute>
      },
      {
        path:"alltreatments",
        element:<AllTreatMents></AllTreatMents>,
        loader: ()=> fetch("/service.json")
      },
      {
        path:"/details/:id",
        element:<PrivateRoute>
          <Detials></Detials>
        </PrivateRoute>,
        loader: async ({params}) =>{
          const res =await fetch("/service.json")
          const data =await res.json()
          // console.log(data,params.id);
          const singleData = data.find(d=>d.id == params.id)
          // console.log(singleData)
          return singleData
        }
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:"signup",
        element:<Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authprovider> <RouterProvider router={router} />
    </Authprovider>
  </StrictMode>,
)
