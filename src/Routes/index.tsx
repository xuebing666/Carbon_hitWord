import {  Navigate, useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Login from "../pages/login"
import Profile from "../components/Profile"
import { NavbarMinimalColored } from "../components/Navbar";
import Aside from "../components/Aside";
import Container from "../components/Container"

export default function Router(){
  return useRoutes([
    {
      path:'/',
      element:<Container/>,
      children:[
      {
        index:true,
        element:<Navigate to='home' replace/>,
      }, 
      {
        path:'home',
        element:<Home/>
      },
      // {
      //   path:'login',
      //   element:<Login/>
      // },
      {
        path:'profile',
        element:<Profile/>
      }]
    },
    
  ])
}