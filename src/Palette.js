/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ColorBox from './ColorBox';
import './Palette.css';
import Navbar from './Navbar';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';


export default function Palette() {
  const { id } = useParams(); //useParams to get the :paletteId
  
  const findPalette = (id) => {
    return seedColors.find(function (palette) {
      return palette.id === id;
    });
  };
  
  const palette = generatePalette(findPalette(id));

  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');
  const colorBoxes = palette.colors[level].map(color => (
    <ColorBox 
        background={color[format]} 
        name={color.name} 
        key={color.id} 
        id={color.id}
        paletteId={id}
     />
  ));
  
  const changeLevel = (level) => {
    setLevel(level);
  }
  
  const changeFormat = (val) => {
    setFormat(val);
  }
  
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={changeLevel}
          handleChange={changeFormat}
        />
          
        {/* Navbar goes here */}
        <div className='Palette-colors'>
          {colorBoxes}
        </div>
        {/* footer goes here */}
        <footer className='Palette-footer'>
          {palette.paletteName}
          <span className='emoji'>{palette.emoji}</span>
        </footer>
      </div>
    );
};

