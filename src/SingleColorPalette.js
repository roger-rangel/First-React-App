/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import ColorBox from './ColorBox';

function SingleColorPalette() {
    const { paletteId, colorId } = useParams(); //useParams to get the :paletteId
    
 
    const findPalette = (paletteId) => {
        return seedColors.find(function (palette) {
          return palette.id === paletteId;
        });
      };

    const palette = generatePalette(findPalette(paletteId));
    
   let shades = gatherShades(palette, colorId);

    function gatherShades(palette, colorToFilterBy) {
      //return all shades of given color
      let allShades = []
      let allColors = palette.colors;
      for (let key in allColors) {
        allShades = allShades.concat(allColors[key].filter(color => color.id === colorToFilterBy))
      }
      return allShades.slice(1)
    }

    const colorBoxes = shades.map((color, index) => (
      <ColorBox key={color.id + index} name={color.name} background={color.hex} showLink={false} />
      ))
    console.log(shades);
        return(
            <div className="Palette">
                <h1>Single Color Palette</h1>
                <div className="Palette-colors">
                  {colorBoxes}
                </div>
            </div>
        )
    
}

export default SingleColorPalette