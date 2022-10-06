import React from 'react';
import { Route, Routes } from "react-router-dom"
import Listing from './pages/Listing.js';
import Mongo from './pages/Mongo.js';
import Detail from './pages/Detail.js';
import Header from './components/Header.js';

function App() {
  return(
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/rooms/:id" element={<Detail />} />
        <Route path="/mongo" element={<Mongo />} />
      </Routes>
    </>
  )
}

export default App;
