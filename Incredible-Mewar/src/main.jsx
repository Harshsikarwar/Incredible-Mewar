import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Layout from './layout.jsx'
import Home from './components/Home/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import History from './components/History/History.jsx'
import Places from './components/Places/Places.jsx'

const router = createBrowserRouter([{
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
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
