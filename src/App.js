import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';
import Survey from './components/Survey';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/survey" exact component={Survey} />
      </Switch>
    );
  }
}

export default App;
