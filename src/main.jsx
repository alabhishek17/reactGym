import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import AppRouter from './components/Router/route.jsx'
import Header from './components/Header/header.jsx'
import Footer from './components/Footer/footer.jsx'
import Navbar from './components/Navabar/nava.jsx'
import Body from './components/Body/body.jsx'
import Exerises from './components/Exercise/exercise.jsx'
import Details from './components/Details/details.jsx'
import { Outlet, createBrowserRouter,RouterProvider } from 'react-router-dom'
 const Mainjsx= ()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
 }

 const routerA=createBrowserRouter([
  {
    path:"/", 
    element:<Mainjsx/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/body",
        element:<Body/>
      },
      {
        path:"/exercise",
        element:<Exerises/>
      },{
        path:"/details/:id",
        element:<Details/>
      }
    ]
  }
 ])

 const roote=ReactDOM.createRoot(document.getElementById("root"))
 roote.render(<RouterProvider router={routerA}/>)
