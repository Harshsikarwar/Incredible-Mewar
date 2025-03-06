import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import History from './components/History/History.jsx'
import Places from './components/Places/Places.jsx'
import AboutPlaces from './components/Places/AboutPlace.jsx'

/*const router = createBrowserRouter([{
  path: '/',
  element: <Layout/>,
  children: [
    {path: "",
     element: <Home/>,
    },
    {path: "history",
      element: <History/>,
     },
     {path: "places",
      element: <Places/>,
     }
  ]
}])*/

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='history' element={<History />}/>
      <Route path='places' element={<Places />}/>
      <Route path='places/udiapur' element={<AboutPlaces />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
