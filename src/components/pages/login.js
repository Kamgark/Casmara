import React, { Component } from 'react';
import Layout from '../layout';
import Login from '../login';


class LoginPage extends Component {
  render() {
    return (
      <Layout>
        <Login/>
      </Layout>
    );
  }
}

export default LoginPage;