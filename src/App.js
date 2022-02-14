/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';

function App() { 
    return (
      <Routes>
        <Route
          path="/"
          element={<PaletteList />}
        />
        <Route
          path="/palette/:id"
          element={<Palette />}
        />
        <Route
           exact
           path='/palette/:paletteId/:colorId'
           element={ <SingleColorPalette />}
         />
      </Routes>
      
    );  
  }

export default App;
