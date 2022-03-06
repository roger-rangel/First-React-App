import React, {Component} from 'react';
import { useParams } from 'react-router-dom';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

function SingleColorPalette() {
    const { paletteId } = useParams(); //useParams to get the :paletteId
 
    const findPalette = (paletteId) => {
        return seedColors.find(function (palette) {
          return palette.id === paletteId;
        });
      };

    const palette = generatePalette(findPalette(paletteId));

        return(
            <div>
                <h1>Single Color Palette</h1>
            </div>
        )
    
}

export default SingleColorPalette