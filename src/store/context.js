import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) =>{
    switch (action.type){
        case 'rightcart':
            return {...state, rightcart: action.payLoad};
        case 'wishList':
            return {...state, wishList: action.payLoad};
        case 'cart':
            return {...state, cart: action.payLoad};    
       default:
            return state;
    }
};

export class CasmaraProvider extends Component{

    state = {
        dispatch: action =>{
                this.setState(state => reducer(state, action))
        },
        rightcart:[],
        wishList:[],
        cart:[]
        
    };

    render(){
        const { state, props: {children} } = this;
        return <Context.Provider value={ state } >{children}</Context.Provider>;
    }
}

export const CasmaraConsumer = Context.Consumer;
