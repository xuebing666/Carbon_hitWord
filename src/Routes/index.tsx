import {  Navigate, useRoutes } from "react-router-dom";
import Home from "../components/Home";
import Profile from "../components/Profile"
import Container from "../components/Container"
import Form from "../components/Form";

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
      {
        path:'profile',
        element:<Profile/>
      },
      {
        path:'form',
        element:<Form/>
      }]
    },
    
  ])
}