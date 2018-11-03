import React, { Component } from 'react';
import axios from 'axios';
import FirstPage from '../FirstPage/FirstPage'
import SecondPage from '../SecondPage/SecondPage'
import ThirdPage from '../ThirdPage/ThirdPage'
import FourthPage from '../FourthPage/FourthPage'
import './App.css';
import {HashRouter as Router, Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        <Router>
          <div>
            <Route exact path="/" component={FirstPage} />
            <Route path='/secondPage' component={SecondPage} />
            <Route path='/thirdPage' component={ThirdPage} />
            <Route path='/fourthPage' component={FourthPage} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
