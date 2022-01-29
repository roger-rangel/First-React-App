import React from "react";
import { Link } from "react-router-dom";
import seedColors from './seedColors';

export default function PaletteList() {
  const palettes = seedColors;
  
  return (
    palettes.map(palette => {
      return <Link to={`/palette/${palette.id}`}> {palette.paletteName}</Link>
    })
  )
}