import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/pages/login';
import RegisterPage from './components/pages/register';
import MessagePage from './components/pages/message';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/" component={MessagePage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
