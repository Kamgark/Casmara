import React, { Component } from 'react';
import Layout from '../layout';
import Main from '../main';
import {CasmaraConsumer} from '../../store/context';

class MessagePage extends Component {
  render() {
    return (
      <Layout>
        <CasmaraConsumer>
                {
                    ({dispatch, rightcart})=>(
                        <Main  dispatch={dispatch} rightcart={rightcart} />
                        )
                    }
                </CasmaraConsumer>
              </Layout>
    );
  }
}

export default MessagePage;