import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from '../SearchBar';
import Grid from '../Grid'

class App extends Component {
    render() {
        return (
          <React.Fragment>
            <CssBaseline />
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="title" color="inherit">
                  Where's it from?
                </Typography>
              </Toolbar>
            </AppBar>
            <SearchBar />
            <Grid />
          </React.Fragment>
        );
    }
}

export default App;
