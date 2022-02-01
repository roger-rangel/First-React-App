import React from "react";
import { Link } from "react-router-dom";
import seedColors from './seedColors';
import MiniPalette from "./MiniPalette";

export default function PaletteList() {
  const palettes = seedColors;
  
  return (
    <div>
      <MiniPalette />
        <h1>React Colors</h1>
        {palettes.map(palette => {
          return <Link to={`/palette/${palette.id}`}> {palette.paletteName}</Link>
        })}
    </div>
  )
}