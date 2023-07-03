import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Route/Route';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='lg:max-w-screen-2xl lg:mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
