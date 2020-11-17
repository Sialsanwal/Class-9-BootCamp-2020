import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Button } from '@material-ui/core/';
import Navbar from './nav';
import { colors } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import BarChart from './barChart';

const useStyles = makeStyles((theme) => ({

  paper: {
    width: 400,
    margin: "0 auto",
    textAlign: "center",
    padding: 15,
    marginTop:25
  },
  input: {
    width: "95%",
    marginBottom: 10
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navbar />
      <Paper elevation={3} className={classes.paper}>
        <h1> Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Enter Email" className={classes.input} />
          <TextField  label="Enter Password" className={classes.input} />
          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper>
      
    </div>
  );
  
}

export default App;
