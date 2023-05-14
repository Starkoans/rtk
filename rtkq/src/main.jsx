import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./store/store.js";
// import {ApiProvider} from "@reduxjs/toolkit/src/query/react";
// import { itemApi} from "./store/api/api.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/Layout.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ItemPage from "./pages/ItemPage.jsx";
import {RegisterPage} from "./pages/RegisterPage.jsx";
import './firebase';

const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <ItemPage />,
                    errorElement: <>Err</>

                },
                {
                    path:"/login",
                    element:<LoginPage/>,

                },
                {
                    path:"/register",
                    element:<RegisterPage/>,

                },
            ]
        }
    ]
);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>



  </React.StrictMode>
)
