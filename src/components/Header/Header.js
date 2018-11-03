import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



class Header extends Component {

  
  render() {
    return (
      <div >
        <AppBar >
          <Toolbar>
            <Typography variant='h1' color='inherit'>Feedback!</Typography>
            <Typography variant='h4' color='inherit'><i>Don't forget it!</i></Typography>
          </Toolbar>
        </AppBar>
        
      </div>
    );
  }
}

export default Header;