import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Restart from './components/Restart';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const rutas = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "restart",
    element: <Restart/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rutas} />
  </React.StrictMode>,
)
