import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Articles from './Articles';


class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/articles" component={Articles} />
          </Switch>
         </React.Fragment>
      </Router>
    );
  }
}

export default App;

