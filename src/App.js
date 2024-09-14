// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';

import {RouterProvider, createBrowserRouter} from "react-router-dom"

import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'
import ContactPage from './Components/ContactPage'

import Header from './Components/Header';


import NewsFeed from './Components/NewsFeed';

import './App.css';

function App() {


    
  
    // Routing configuration
    const router = createBrowserRouter([
      {
        path: "/",
        element: <><Header /><HomePage /></>
      },
      {
        path: "/about",
        element: <><Header /><AboutPage /></>
      },
      {
        path: "/news",
        element: <><Header /><NewsFeed/></>
      },
      {
        path: "/contact",
        element: <><Header /><ContactPage /></>
      }
    ]);
  
    return (
      <div className="App">
          
          
          
          
          <RouterProvider router={router}></RouterProvider>
        </div>
      
  
  );

}



export default App