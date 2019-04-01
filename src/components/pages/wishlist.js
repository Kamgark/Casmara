import React, { Component } from 'react';
import Layout from '../layout';
import WishList from '../wishlist';
import {CasmaraConsumer} from '../../store/context';

class WishListPage extends Component {
  render() {
    return (
      <Layout>
        <CasmaraConsumer>
          {
            ({dispatch, wishList, cart})=>(
              <WishList  dispatch={dispatch} wishList={wishList} cart={cart}/>
            )
          }
        </CasmaraConsumer>
      </Layout>
    );
  }
}

export default WishListPage;