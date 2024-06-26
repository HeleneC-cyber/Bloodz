import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import BloodGroups from './pages/BloodGroups';
import HomePage from './pages/HomePage';
import Error404 from './pages/Error404';
import Compatibily from './pages/Compatibily';
import Profil from './pages/Profil';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/presentation" element={<About />} />
      <Route path="/groupes-sanguins" element={<BloodGroups />} />
      <Route path="/compatibility" element={<Compatibily />} />
      <Route path="/profil/:id" element={<Profil />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();