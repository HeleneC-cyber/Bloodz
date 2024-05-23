import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BloodGroups from './pages/BloodGroups';
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import Compatibily from './pages/Compatibily';
import Profil from './pages/Profil';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />,
}, {
  path: '/presentation',
  element: <About />
}, {
  path: '/groupes-sanguins',
  element: <BloodGroups />,
}, {
  path: '/compatibility',
  element: <Compatibily />,
}, {
  path: '/profil/:id',
  element: <Profil />
}, {
  path: '*',
  element: <Error404 />,
},

])
root.render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
