import React,{Component} from 'react';
import Header from '../header';
import Footer from '../footer';
import {CasmaraConsumer} from '../../store/context';
class Layout extends Component{
render(){
    return(
        <div>
            <CasmaraConsumer>
                {
                    ({dispatch, wishList, cart})=>(
                        <Header  dispatch={dispatch} wishList={wishList} cart={cart}/>
                    )
                }
            </CasmaraConsumer>
            {this.props.children}
            <Footer/>
                   
        </div>
    )
}
}
export default Layout;