import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LoginPage from './components/pages/login';
import RegisterPage from './components/pages/register';
import MessagePage from './components/pages/message';
import AccountPage from './components/pages/account';
import WishListPage from './components/pages/wishlist';
import ComparePage from './components/pages/compare';
import {CasmaraProvider} from './store/context';
import CartPage from './components/pages/cart';
import CheckoutPage from './components/pages/checkout';

class App extends Component {
  
  render() {
    return (
      <CasmaraProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={MessagePage} exact/>
            <Route path="/login" component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/myaccount" component={AccountPage}/>
            <Route path="/wishlist" component={WishListPage}/>
            <Route path="/compare" component={ComparePage}/>
            <Route path="/cart" component={CartPage}/>
            <Route path="/checkout" component={CheckoutPage}/>
          </Switch>
      </BrowserRouter>
      </CasmaraProvider>
    );
  }
}

export default App;
