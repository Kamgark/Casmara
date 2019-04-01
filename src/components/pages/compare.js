import React, { Component } from 'react';
import Layout from '../layout';
import Compare from '../compare';
import { CasmaraConsumer } from '../../store/context';

class ComparePage extends Component {
  render() {
    return (
      <Layout>
        <CasmaraConsumer>
        {
                    ({dispatch, rightcart, wishList})=>(
                        <Compare  dispatch={dispatch} rightcart={rightcart} wishList={wishList} />
                        )
                    }
                </CasmaraConsumer>
      </Layout>
    );
  }
}

export default ComparePage;