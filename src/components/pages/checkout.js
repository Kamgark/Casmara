import React, { Component } from 'react';
import Checkout from '../checkout';
import { CasmaraConsumer } from '../../store/context';

class CheckoutPage extends Component {
  render() {
    return (
        <CasmaraConsumer>
        {
            ({dispatch, cart})=>(
                <Checkout  dispatch={dispatch} cart={cart} />
            )
        }
        </CasmaraConsumer>
    );
  }
}

export default CheckoutPage;