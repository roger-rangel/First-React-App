/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom"; 
// import { Link } from "react-router-dom";
import seedColors from './seedColors';
import MiniPalette from "./MiniPalette";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "white"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%"
  }
});



export default function PaletteList() {
 
  const palettes = seedColors;
  const classes = useStyles();
  let navigate = useNavigate(); 
  
  function goToPalette(id) {
     navigate(`/palette/${id}`);
  }
  
  return (
    
    <div className={classes.root}>
      <div className={classes.container}>
        <nav className={classes.nav}>
          <h1>React Colors</h1>
        </nav>
        <div className={classes.palettes}>
          
              {palettes.map(palette => (
                
                <MiniPalette {...palette} handleClick={() => goToPalette(palette.id)}/>
              ))}
        </div>
      </div>
    </div>
  )
}