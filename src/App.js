import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,TextField} from '@material-ui/core/';
import { colors } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: "lightBlue",
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  paper: {
    height: 500,
    width: 400,
    margin: "0 auto",
    textAlign: "center",
  }
}));






function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper elevation={3} className={classes.paper}>
        <h1> Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField  label="Enter Email" />
          
          <TextField  label="Enter Password" />

        
        </form>
      </Paper>
    </div>
  );
}

export default App;
