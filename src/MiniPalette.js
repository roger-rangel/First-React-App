import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    backgroundColor: "white",
    border: " 1px solid black",
    borderRadius: "5px",
    padding: "0 5rem",
    position: "relative",
    overflow: "hidden",
    "&hover": {
      cursor: "pointer"
    }
  },
  colors: {
    backgroundColor: "white"
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0",
    color: "black",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    position: "relative"
  },
  emoji: {
    marginLeft: "0.5rem",
    fontSize: "1.5rem"
  }
};

function MiniPalette(props) {
  const { classes, paletteName, emoji } = props;
  console.log(classes.colors);
  
  
  return (
    <div className={classes.root}>
      <div className={classes.colors}> 
        <h1 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h1>
      </div>
      
    </div>
  )
}

export default withStyles(styles)(MiniPalette);