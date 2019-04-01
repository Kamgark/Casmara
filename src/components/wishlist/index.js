import React, { Component } from 'react';
import '../header/header.css';
class WishList extends Component {
    addtocart(val){
        let {dispatch , cart}= this.props;
        let carts= [...cart]
        carts.push(val)
        dispatch({
            type:'cart',
            payLoad: carts
        })
    }
    removeFromCart(index){
        let {dispatch , wishList}= this.props;
        let wishLists= [...wishList];
        wishLists.splice(index,1)
        console.log("l ", wishLists)
        dispatch({
            type:'wishList',
            payLoad: wishLists
        })
    }
   
    render() {
        let {wishList}= this.props;
        let wishLists=[...wishList]
      return (
        <div className="content-main" style={{marginTop: "75px", marginBottom: "75px"}}> 
                <div className="main-container container">
                    <div className="row">
                        <div id="content " className="col-md-12 col-sm-12 type-3">
                            <div className="product-view row">
                                <div className="left-content-product col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="main-container container"> 
                                            <div className="row"> 
                                                <div id="content" className="col-sm-12"> 
                                                    <div className="page-login"> 
                                                        <div className="account-border"> 
                                                            <div className="row" style={{fontFamily: "Montserrat"}}>
                                                                <div id="content" className="col-sm-9">
                                                                    <h2 className="title" style={{fontFamily: "Montserrat", fontWeight: 800}}>My Wish List</h2>
                                                                    <div className="table-responsive">
                                                                        <table className="table table-bordered table-hover">
                                                                            <thead>
                                                                                <tr>
                                                                                    <td className="text-center">Image</td>
                                                                                    <td className="text-left">Product Name</td>
                                                                                    <td className="text-left">Model</td>
                                                                                    <td className="text-right">Stock</td>
                                                                                    <td className="text-right">Unit Price</td>
                                                                                    <td className="text-right">Action</td>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                            { wishLists && wishList.map((item,index)=>{
                                                                                return(
                                                                                <tr>
                                                                                    <td className="text-center">
                                                                                        <a href="product.html">
                                                                                            <img width="70px" src={require("../../images/demo/shop/product/"+ item.imageUrl)} alt="Aspire Ultrabook Laptop" title="Aspire Ultrabook Laptop"/>
                                                                                        </a>
                                                                                    </td>
                                                                                    <td className="text-left">
                                                                                        <a href="product.html">{item.name}</a>
                                                                                    </td>
                                                                                    <td className="text-left">{item.model}</td>
                                                                                    <td className="text-right">{item.availability}</td>
                                                                                    <td className="text-right">
                                                                                        <div className="price"> 
                                                                                            <span className="price-new">{item.price}</span> 
                                                                                            {/* <span className="price-old">$80</span> */}
                                                                                        </div>
                                                                                    </td>
                                                                                    <td className="text-right">
                                                                                        <button className="btn btn-primary" title="" data-toggle="tooltip" onClick={()=>{this.addtocart(item)}} type="button" data-original-title="Add to Cart">
                                                                                            <i className="fa fa-shopping-cart"/>
                                                                                        </button>
                                                                                        <a className="btn btn-danger wishlist-remove" title="" data-toggle="tooltip" onClick={()=>{this.removeFromCart(index)}} ata-original-title="Remove" data-original-title=""><i className="fa fa-times"/></a>
                                                                                    </td>
                                                                                </tr>
                                                                           )
                                                                        })    
                                                                        }
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <aside className="col-sm-3 hidden-xs" id="column-right">
                                                                    <h2 className="subtitle" style={{fontWeight: 600}}>Account</h2>
                                                                    <div className="list-group">
                                                                        <ul className="list-item">
                                                                            <li>
                                                                                <a href="login.html">Login</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="register.html">Register</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Forgotten Password</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">My Account</a>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </aside>
                                                            </div>                                                             
                                                        </div>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                 
            </div>
      )
    }
  }
  export default WishList;