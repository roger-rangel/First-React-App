/* eslint-disable no-unused-vars */
import React, { Component, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';




class App extends Component {
  render() {
   
    const PaletteList = () => <h1>PALETTE LIST GOES HERE</h1>;
    const IndividualPalette = () => <h1>INDIVIDUAL PALETTE</h1>;

    return (

      <Routes>
        <Route
          path="/"
          element={(  
             <PaletteList />
          )} />
        <Route
          path="/palette/:id"
          element={(  
             <IndividualPalette />
          )} />
      </Routes>
      
 
      //  <Palette palette={generatePalette(seedColors[4])} />
    );
  }
}

export default App;
