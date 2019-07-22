
/* @flow */

/**
 * @fileoverview
 *
 * @author nitish
 */
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import React, { Component } from 'react';


class App extends Component<{}, {}> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default App;
