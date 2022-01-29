/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Palette from './Palette';
// import PaletteList from './PaletteList';

function App() { 
    return (
      <Routes>
        <Route
          path="/"
          element={<h1>PALETTE LIST GOES HERE</h1>}
        />
        <Route
          path="/palette/:id"
          element={<Palette />}
        />
      </Routes>
      
      //  <Palette palette={generatePalette(seedColors[4])} />
    );  
  }

export default App;
