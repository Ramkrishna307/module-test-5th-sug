import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';

const HomeDetailWrapper = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Detail />} />
    </Routes>
  );
};

export default HomeDetailWrapper;

