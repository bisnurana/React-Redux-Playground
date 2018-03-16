import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/Main';


class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
    );
  }
}

export default App;
