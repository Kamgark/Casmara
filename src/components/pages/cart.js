import React, { Component } from 'react';
import Cart from '../cart';
import { CasmaraConsumer } from '../../store/context';

class CartPage extends Component {
  render() {
    return (
        <CasmaraConsumer>
        {
            ({dispatch, cart})=>(
                <Cart  dispatch={dispatch} cart={cart} />
            )
        }
        </CasmaraConsumer>
    );
  } 
}

export default CartPage;