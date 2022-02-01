import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  main: {
    backgroundColor: "purple",
    border: "3px solid grey"
  },
  secondary: {
    backgroundColor: "pink"
  }
};

function MiniPalette(props) {
  const { classes } = props;
  console.log(classes);
  
    return (
        <div className={classes.main}>
          <h1>Mini Palette</h1>
        </div>
    )
}

export default withStyles(styles)(MiniPalette);