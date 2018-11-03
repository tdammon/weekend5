import React, { Component } from 'react';

import FirstPage from '../FirstPage/FirstPage'
import SecondPage from '../SecondPage/SecondPage'
import ThirdPage from '../ThirdPage/ThirdPage'
import FourthPage from '../FourthPage/FourthPage'
import FifthPage from '../FifthPage/FifthPage'
import AdminPage from '../AdminPage/AdminPage'
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom"

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className='App-header'>
          <h1 className='App-title'>Do your Feedback!</h1>
          <h4><i>Don't make Mary hunt you down</i></h4>
          {/* <div >
            <img src='/App/goat_small.jpg' />
          </div> */}
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={FirstPage} />
            <Route path='/secondPage' component={SecondPage} />
            <Route path='/thirdPage' component={ThirdPage} />
            <Route path='/fourthPage' component={FourthPage} />
            <Route path='/fifthPage' component={FifthPage} />
            <Route path='/admin' component={AdminPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
