import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/pages/login';
import RegisterPage from './components/pages/register';
import MessagePage from './components/pages/message';
import AccountPage from './components/pages/account'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MessagePage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/myaccount" component={AccountPage}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
