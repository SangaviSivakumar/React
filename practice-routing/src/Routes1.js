// src/Routes1.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Faq from './Faq';
import Login from './Login';
import Welcome from './Welcome';
import ShowU from './ShowU';
import Protected from './Protected';

const Routes1 = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="/faq" element={<Faq />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Welcome />} />
        <Route path="/ucard/:UserId/:Name/:Salary" element={<ShowU />} />
        {/* <Route path="/faq" element={<Protected component={<Faq />} />} /> */}
        <Route path="/faq" element={<Protected Component={Faq} />} />
    </Routes>
  );
};

export default Routes1;
