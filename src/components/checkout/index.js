import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class CheckOut extends Component{
    removeFromCart(index){
        let {dispatch , cart}= this.props;
        let carts= [...cart];
        carts.splice(index,1)
        dispatch({
            type:'cart',
            payLoad: carts
        })
    }
    render(){
        let {cart}=this.props;
        let carts= [...cart]
        return(
            <body class="res layout-subpage">
            <div id="wrapper" class="wrapper-full ">
            
                <header id="header" class=" variantleft type_1">
                    <div class="header-top">
                        <div class="container">
                            <div class="row">
                                <div class="header-top-left form-inline col-sm-6 col-xs-6 compact-hidden">
                                    <div class="form-group currencies-block">
                                        <form action="http://demo.smartaddons.com/templates/html/destino/index.html" method="post" enctype="multipart/form-data" id="currency">
                                            <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                                                <span class="icon icon-credit "></span> USD <span class="fa fa-angle-down"></span>
                                            </a>
                                            <ul class="dropdown-menu btn-xs">
                                                <li> <a href="#">(€)&nbsp;Euro</a></li>
                                                <li> <a href="#">(£)&nbsp;Pounds</a></li>
                                                <li> <a href="#">($)&nbsp;USD</a></li>
                                            </ul>
                                        </form>
                                    </div>
                                    <div class="form-group languages-block ">
                                        <form action="http://demo.smartaddons.com/templates/html/destino/index.html" method="post" enctype="multipart/form-data" id="bt-language">
                                            <a class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
                                                <img src={require("../../images/demo/flags/gb.png")} alt="English" title="English"/>
                                                <span class="hidden-xs">English</span>
                                                <span class="fa fa-angle-down"></span>
                                            </a>
                                            <ul class="dropdown-menu">
                                                <li><a href="index.html"><img class="image_flag" src={require("../../images/demo/flags/gb.png")} alt="English" title="English" /> English </a></li>
                                                <li> <a href="html_width_RTL/index.html"> <img class="image_flag" src={require("../../images/demo/flags/lb.png")} alt="Arabic" title="Arabic" /> Arabic </a> </li>
                                            </ul>
                                        </form>
                                    </div>
                                </div>
                                <div class="header-top-right collapsed-block text-right  col-sm-6 col-xs-6 compact-hidden">
                                    <div class="tabBlock1" id="TabBlock-1">
                                        <ul class="top-link list-inline">
                                            <li class="wishlist hidden-xs"><a href="#" id="wishlist-total" class="top-link-wishlist" title="Welcome Customer!"><span>Welcome Customer!</span></a></li>
                                            <li class="signin"><a href="login.html" class="top-link-checkout" title="Sign In"><span>Sign In</span></a></li>
                                            <li class="register"><a href="register.html" title="Register"><span>Register</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="header-center left">
                        <div class="container">
                            <div class="row">
                                <div class="navbar-logo col-md-3 col-sm-12 col-xs-7">
                                    <a href="index.html"><img src={require("../../images/demo/logo/logo.png")} title="Your Store" alt="Your Store" /></a>
                                </div>
                                <div id="sosearchpro" class="col-xs-12 col-sm-8 col-md-5 search-pro">
                                    
                                    <form method="GET" action="http://demo.smartaddons.com/templates/html/destino/index.html">
                                        <div id="search0" class="search input-group">
                                            <input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Search product..." name="search" />
                                            <span class="input-group-btn">
                                                <button type="submit" class="button-search btn btn-primary" name="submit_search"><i class="fa fa-search"></i></button>
                                            </span>
                                        </div>
                                        
                                    </form>
        
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-5 shopping_cart pull-right extraa-pos">
                                    <div class="header-text hidden-xs">
                                        <p><i class="fa fa-phone" aria-hidden="true"></i>	   Call Us: (888) 123456789</p>
                                    </div>
                                    <div id="cart" class=" btn-group btn-shopping-cart">
                                        <a data-loading-text="Loading..." class="top_cart dropdown-toggle" data-toggle="dropdown">
                                            <div class="shopcart">
                                                <span class="handle pull-left"></span>
                                                <span class="number-shopping-cart">{carts.length}</span>
                                                <span class="title">My Cart</span>
                                                <p class="text-shopping-cart cart-total-full"> $0.00 </p>
                                            </div>
                                        </a>
        
                                        <ul class="tab-content content dropdown-menu pull-right shoppingcart-box" role="menu">
        
                                            <li>
                                                <table class="table table-striped">
                                                    <tbody>
                                                        {
                                                            carts && carts.map((item,index)=>{
                                                                return(
                                                                    <tr>
                                                            <td class="text-center" style={{width:"70px"}}>
                                                                <a href="product.html"> <img src={require("../../images/demo/shop/product/"+ item.imageUrl)} style={{width:"70px"}} alt="Filet Mign" title="Filet Mign" class="preview" /> </a>
                                                            </td>
                                                            <td class="text-left"> <a class="cart_product_name" href="product.html">{item.name}</a> </td>
                                                            <td class="text-center"> {item.quantity}</td>
                                                            <td class="text-center"> {item.price} </td>
                                                            <td class="text-right">
                                                                <a href="product.html" class="fa fa-edit"></a>
                                                            </td>
                                                            <td class="text-right">
                                                                <a onClick={()=>{this.removeFromCart(index)}} class="fa fa-times fa-delete"></a>
                                                            </td>
                                                        </tr>
                                                                )
                                                            })
                                                        }
                                                        
                                                    </tbody>
                                                </table>
                                            </li>
                                            <li>
                                                <div>
                                                    <table class="table table-bordered">
                                                        <tbody>
                                                            <tr>
                                                                <td class="text-left"><strong>Sub-Total</strong>
                                                                </td>
                                                                <td class="text-right">$1,060.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-left"><strong>Eco Tax (-2.00)</strong>
                                                                </td>
                                                                <td class="text-right">$2.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-left"><strong>VAT (20%)</strong>
                                                                </td>
                                                                <td class="text-right">$200.00</td>
                                                            </tr>
                                                            <tr>
                                                                <td class="text-left"><strong>Total</strong>
                                                                </td>
                                                                <td class="text-right">$1,262.00</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <p class="text-right"> <a class="btn view-cart" href="cart.html"><i class="fa fa-shopping-cart"></i>View Cart</a>&nbsp;&nbsp;&nbsp; <a class="btn btn-mega checkout-cart" href="checkout.html"><i class="fa fa-share"></i>Checkout</a> </p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
        
                        </div>
                    </div>
                    <div class="header-bottom">
                        <div class="container">
                            <div class="row">
                                <div class="megamenu-hori header-bottom-right  col-md-12 col-sm-12 col-xs-12 ">
                                    <div class="responsive so-megamenu ">
                                        <nav class="navbar-default">
                                            <div class=" container-megamenu  horizontal">
        
                                                <div class="navbar-header">
                                                    <button id="show-megamenu" data-toggle="collapse" class="navbar-toggle">
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                        <span class="icon-bar"></span>
                                                    </button>
                                                </div>
        
                                                <div class="megamenu-wrapper">
                                                    <span id="remove-megamenu" class="fa fa-times"></span>
                                                    <div class="megamenu-pattern">
                                                        <div class="container">
                                                            <ul class="megamenu " data-transition="slide" data-animationtime="250">
                                                                <li class="home hover">
                                                                    <p class="close-menu"></p>
                                                                    <Link to="/"><a class="menu1">Home  </a></Link>
                                                                    <div class="sub-menu" style={{width: "100%", display: "none"}}>
                                                                        <div class="content" style={{display: "none"}}>
                                                                            <div class="row">
                                                                                <div class="col-md-3">
                                                                                    <a href="index.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-1.jpg")} alt="" />
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - (Default)</h3> 
                                                                                    </a> 
        
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home2.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-2.jpg")} alt="" />
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 2</h3> 
                                                                                    </a> 
        
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home3.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-3.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 3</h3> 
                                                                                    </a> 
        
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home4.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-4.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 4</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-3">
                                                                                    <a href="home5.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-5.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 5</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home6.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-6.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 6</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home7.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-7.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 7</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home8.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-8.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 8</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-3">
                                                                                    <a href="home9.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-9.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 9</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home10.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-10.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 10</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="home11.html" class="image-link"> 
                                                                                        <span class="thumbnail">
                                                                                            <img class="img-responsive img-border" src={require("../../images/demo/feature/home-11.jpg")} alt=""/>
                                                                                            <span class="btn btn-default">Read More</span>
                                                                                        </span> 
                                                                                        <h3 class="figcaption">Home page - Layout 11</h3> 
                                                                                    </a> 
                                                                                </div>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <a href="#" class="clearfix menu1">
                                                                        <strong>Features</strong>
                                                                        
                                                                    </a>
                                                                    <div class="sub-menu" style={{width: "100%", right: "0px", display: "none"}}>
                                                                        <div class="content" style={{height: "288px", display: "none"}}>
                                                                            <div class="row">
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="#" class="title-submenu">Listing pages</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><a href="category.html">Category Page 1 </a></li>
                                                                                                <li><a href="category-v2.html">Category Page 2</a></li>
                                                                                                <li><a href="category-v3.html">Category Page 3</a></li>
                                                                                            </ul>
        
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="#" class="title-submenu">Product pages</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><a href="product.html">Image size - big</a></li>
                                                                                                <li><a href="product-v2.html">Image size - medium</a></li>
                                                                                                <li><a href="product-v3.html">Image size - small</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="#" class="title-submenu">Shopping pages</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><a href="cart.html">Shopping Cart Page</a></li>
                                                                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                                                                <li><a href="compare.html">Compare Page</a></li>
                                                                                                <li><a href="wishlist.html">Wishlist Page</a></li>
        
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <div class="column">
                                                                                        <a href="#" class="title-submenu">My Account pages</a>
                                                                                        <div>
                                                                                            <ul class="row-list">
                                                                                                <li><a href="login.html">Login Page</a></li>
                                                                                                <li><a href="register.html">Register Page</a></li>
                                                                                                <li><a href="my-account.html">My Account</a></li>
                                                                                                <li><a href="order-history.html">Order History</a></li>
                                                                                                <li><a href="order-information.html">Order Information</a></li>
                                                                                                <li><a href="return.html">Product Returns</a></li>
                                                                                                <li><a href="gift-voucher.html">Gift Voucher</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <a href="#" class="clearfix menu1">
                                                                        <strong>Pages</strong>
                                                                        
                                                                    </a>
                                                                    <div class="sub-menu" style={{width: "40%", right: "auto", display: "none"}}>
                                                                        <div class="content" style={{height: "160px", display: "none"}}>
                                                                            <div class="row">
                                                                                <div class="col-md-6">
                                                                                    <ul class="row-list">
                                                                                        <li><a class="subcategory_item" href="faq.html">FAQ</a></li>
        
                                                                                        <li><a class="subcategory_item" href="sitemap.html">Site Map</a></li>
                                                                                        <li><a class="subcategory_item" href="contact.html">Contact us</a></li>
                                                                                        <li><a class="subcategory_item" href="banner-effect.html">Banner Effect</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                                <div class="col-md-6">
                                                                                    <ul class="row-list">
                                                                                        <li><a class="subcategory_item" href="about-us.html">About Us 1</a></li>
                                                                                        <li><a class="subcategory_item" href="about-us-2.html">About Us 2</a></li>
                                                                                        <li><a class="subcategory_item" href="about-us-3.html">About Us 3</a></li>
                                                                                        <li><a class="subcategory_item" href="about-us-4.html">About Us 4</a></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <a href="#" class="clearfix menu1">
                                                                        <strong>Categories</strong>
                                                                        <span class="label"></span>
        
                                                                    </a>
                                                                    <div class="sub-menu" style={{width: "100%", right: "0px", display: "none"}}>
                                                                        <div class="content" style={{height: "398px", display: "none"}}>
                                                                            <div class="row">
                                                                                <div class="col-sm-12">
                                                                                    <div class="row">
                                                                                        <div class="col-md-3 img img1">
                                                                                            <a href="#"><img src={require("../../images/demo/cms/img1.jpg")} alt="banner1"/></a>
                                                                                        </div>
                                                                                        <div class="col-md-3 img img2">
                                                                                            <a href="#"><img src={require("../../images/demo/cms/img2.jpg")} alt="banner2"/></a>
                                                                                        </div>
                                                                                        <div class="col-md-3 img img3">
                                                                                            <a href="#"><img src={require("../../images/demo/cms/img3.jpg")} alt="banner3"/></a>
                                                                                        </div>
                                                                                        <div class="col-md-3 img img4">
                                                                                            <a href="#"><img src={require("../../images/demo/cms/img4.jpg")} alt="banner4"/></a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-md-3">
                                                                                    <a href="#" class="title-submenu">Automotive</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="#" class="main-menu">Car Alarms and Security</a></li>
                                                                                                    <li><a href="#" class="main-menu">Car Audio &amp; Speakers</a></li>
                                                                                                    <li><a href="#" class="main-menu">Gadgets &amp; Auto Parts</a></li>
                                                                                                    <li><a href="#" class="main-menu">More Car Accessories</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="#" class="title-submenu">Electronics</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="#" class="main-menu">Battereries &amp; Chargers</a></li>
                                                                                                    <li><a href="#" class="main-menu">Headphones, Headsets</a></li>
                                                                                                    <li><a href="#" class="main-menu">Home Audio</a></li>
                                                                                                    <li><a href="#" class="main-menu">Mp3 Players &amp; Accessories</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="#" class="title-submenu">Jewelry &amp; Watches</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="#" class="main-menu">Earings</a></li>
                                                                                                    <li><a href="#" class="main-menu">Wedding Rings</a></li>
                                                                                                    <li><a href="#" class="main-menu">Men Watches</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-3">
                                                                                    <a href="#" class="title-submenu">Bags, Holiday Supplies</a>
                                                                                    <div class="row">
                                                                                        <div class="col-md-12 hover-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li><a href="#" class="main-menu">Gift &amp; Lifestyle Gadgets</a></li>
                                                                                                    <li><a href="#" class="main-menu">Gift for Man</a></li>
                                                                                                    <li><a href="#" class="main-menu">Gift for Woman</a></li>
                                                                                                    <li><a href="#" class="main-menu">Lighter &amp; Cigar Supplies</a></li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
        
                                                                <li class="with-sub-menu hover">
                                                                    <p class="close-menu"></p>
                                                                    <a href="#" class="clearfix menu1">
                                                                        <strong>Accessories</strong>
        
        
                                                                    </a>
                                                                    <div class="sub-menu" style={{width: "100%", display: "none"}}>
                                                                        <div class="content" style={{display: "none"}}>
                                                                            <div class="row">
                                                                                <div class="col-md-8">
                                                                                    <div class="row">
                                                                                        <div class="col-md-6 static-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li>
                                                                                                        <a href="#" class="main-menu">Automotive</a>
                                                                                                        <ul>
                                                                                                            <li><a href="#">Car Alarms and Security</a></li>
                                                                                                            <li><a href="#">Car Audio &amp; Speakers</a></li>
                                                                                                            <li><a href="3.html#">Gadgets &amp; Auto Parts</a></li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a href="#" class="main-menu">Smartphone &amp; Tablets</a>
                                                                                                        <ul>
                                                                                                            <li><a href="#">Accessories for i Pad</a></li>
                                                                                                            <li><a href="#">Apparel</a></li>
                                                                                                            <li><a href="#">Accessories for iPhone</a></li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-md-6 static-menu">
                                                                                            <div class="menu">
                                                                                                <ul>
                                                                                                    <li>
                                                                                                        <a href="#" class="main-menu">Sports &amp; Outdoors</a>
                                                                                                        <ul>
                                                                                                            <li><a href="#">Camping &amp; Hiking</a></li>
                                                                                                            <li><a href="#">Cameras &amp; Photo</a></li>
                                                                                                            <li><a href="#">Cables &amp; Connectors</a></li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                    <li>
                                                                                                        <a href="#" class="main-menu">Electronics</a>
                                                                                                        <ul>
                                                                                                            <li><a href="#">Battereries &amp; Chargers</a></li>
                                                                                                            <li><a href="#">Bath &amp; Body</a></li>
                                                                                                            <li><a href="#">Outdoor &amp; Traveling</a></li>
                                                                                                        </ul>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="col-md-4">
                                                                                    <span class="title-submenu">Bestseller</span>
                                                                                    <div class="row">
                                                                                        <div class="col-sm-12 list-product">
                                                                                            <div class="product-thumb">
                                                                                                <div class="image pull-left">
                                                                                                    <a href="#"><img src={require("../../images/demo/shop/product/35.jpg")} width="80" alt="Filet Mign" title="Filet Mign" class="img-responsive"/></a>
                                                                                                </div>
                                                                                                <div class="caption">
                                                                                                    <h4><a href="#">Filet Mign</a></h4>
                                                                                                    <div class="rating-box">
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                    </div>
                                                                                                    <p class="price">$1,202.00</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-12 list-product">
                                                                                            <div class="product-thumb">
                                                                                                <div class="image pull-left">
                                                                                                    <a href="#"><img src={require("../../images/demo/shop/product/W1.jpg")} width="80" alt="Dail Lulpa" title="Dail Lulpa" class="img-responsive"/></a>
                                                                                                </div>
                                                                                                <div class="caption">
                                                                                                    <h4><a href="#">Dail Lulpa</a></h4>
                                                                                                    <div class="rating-box">
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class=""><i class="fa fa-star "></i></span>
                                                                                                        <span class="gray"><i class="fa fa-star "></i></span>
                                                                                                    </div>
                                                                                                    <p class="price">$78.00</p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div class="col-sm-12 list-product">
                                                                                            <div class="product-thumb">
                                                                                                <div class="image pull-left">
                                                                                                    <a href="#"><img src={require("../../images/demo/shop/product/141.jpg")} width="80" alt="Canon EOS 5D" title="Canon EOS 5D" class="img-responsive"/></a>
                                                                                                </div>
                                                                                                <div class="caption">
                                                                                                    <h4><a href="#">Canon EOS 5D</a></h4>
        
                                                                                                    <div class="rating-box">
                                                                                                        <span class="gray"><i class="fa fa-star "></i></span>
                                                                                                        <span class="gray"><i class="fa fa-star "></i></span>
                                                                                                        <span class="gray"><i class="fa fa-star "></i></span>
                                                                                                        <span class="gray"><i class="fa fa-star "></i></span>
                                                                                                        <span class="gray"><i class="fa fa-star "></i></span>
                                                                                                    </div>
                                                                                                    <p class="price">
                                                                                                        <span class="price-new">$60.00</span>
                                                                                                        <span class="price-old">$145.00</span>
        
                                                                                                    </p>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    
        
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                                <li class="">
                                                                    <p class="close-menu"></p>
                                                                    <a href="blog-page.html" class="clearfix menu1">
                                                                        <strong>Blog</strong>
                                                                        <span class="label"></span>
                                                                    </a>
                                                                </li>
        
                                                                
                                                            </ul>
        
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
        
                            </div>
                        </div>
        
                    </div>
                </header>
                <div class="main-container container">
                    <ul class="header-main ">
                        <li class="home"><a href="#">Home   </a><i class="fa fa-angle-right" aria-hidden="true"></i></li>
                        <li> Checkout</li>
                    </ul>
                    
                    <div class="row">
                        <div id="content" class="col-sm-12">
                            <h2 class="title">Checkout</h2>
                            <div class="so-onepagecheckout ">
                                <div class="col-left col-sm-3">
                                    <div class="panel panel-default">
                                        <div class="panel-heading">
                                            <h4 class="panel-title"><i class="fa fa-sign-in"></i> Create an Account or Login</h4>
                                        </div>
                                        <div class="panel-body">
                                            <div class="radio">
                                                <label>
                                                    <input type="radio" value="register" name="account"/>
                                                    Register Account</label>
                                                </div>
                                                <div class="radio">
                                                    <label>
                                                        <input type="radio" checked="checked" value="guest" name="account"/>
                                                        Guest Checkout</label>
                                                    </div>
                                                    <div class="radio">
                                                        <label>
                                                            <input type="radio" value="returning" name="account"/>
                                                            Returning Customer</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title"><i class="fa fa-user"></i> Your Personal Details</h4>
                                                    </div>
                                                    <div class="panel-body">
                                                        <fieldset id="account">
                                                            <div class="form-group required">
                                                                <label for="input-payment-firstname" class="control-label">First Name</label>
                                                                <input type="text" class="form-control" id="input-payment-firstname" placeholder="First Name" value="" name="firstname"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-lastname" class="control-label">Last Name</label>
                                                                <input type="text" class="form-control" id="input-payment-lastname" placeholder="Last Name" value="" name="lastname"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-email" class="control-label">E-Mail</label>
                                                                <input type="text" class="form-control" id="input-payment-email" placeholder="E-Mail" value="" name="email"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-telephone" class="control-label">Telephone</label>
                                                                <input type="text" class="form-control" id="input-payment-telephone" placeholder="Telephone" value="" name="telephone"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="input-payment-fax" class="control-label">Fax</label>
                                                                <input type="text" class="form-control" id="input-payment-fax" placeholder="Fax" value="" name="fax"/>
                                                            </div>
                                                        </fieldset>
                                                    </div>
                                                </div>
                                                <div class="panel panel-default">
                                                    <div class="panel-heading">
                                                        <h4 class="panel-title"><i class="fa fa-book"></i> Your Address</h4>
                                                    </div>
                                                    <div class="panel-body">
                                                        <fieldset id="address" class="required">
                                                            <div class="form-group">
                                                                <label for="input-payment-company" class="control-label">Company</label>
                                                                <input type="text" class="form-control" id="input-payment-company" placeholder="Company" value="" name="company"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-address-1" class="control-label">Address 1</label>
                                                                <input type="text" class="form-control" id="input-payment-address-1" placeholder="Address 1" value="" name="address_1"/>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="input-payment-address-2" class="control-label">Address 2</label>
                                                                <input type="text" class="form-control" id="input-payment-address-2" placeholder="Address 2" value="" name="address_2"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-city" class="control-label">City</label>
                                                                <input type="text" class="form-control" id="input-payment-city" placeholder="City" value="" name="city"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-postcode" class="control-label">Post Code</label>
                                                                <input type="text" class="form-control" id="input-payment-postcode" placeholder="Post Code" value="" name="postcode"/>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-country" class="control-label">Country</label>
                                                                <select class="form-control" id="input-payment-country" name="country_id">
                                                                    <option value=""> --- Please Select --- </option>
                                                                    <option value="244">Aaland Islands</option>
                                                                    <option value="1">Afghanistan</option>
                                                                    <option value="2">Albania</option>
                                                                    <option value="3">Algeria</option>
                                                                    <option value="4">American Samoa</option>
                                                                    <option value="5">Andorra</option>
                                                                    <option value="6">Angola</option>
                                                                    <option value="7">Anguilla</option>
                                                                    <option value="8">Antarctica</option>
                                                                    <option value="9">Antigua and Barbuda</option>
                                                                    <option value="10">Argentina</option>
                                                                    <option value="11">Armenia</option>
                                                                    <option value="12">Aruba</option>
                                                                    <option value="252">Ascension Island (British)</option>
                                                                    <option value="13">Australia</option>
                                                                    <option value="14">Austria</option>
                                                                    <option value="15">Azerbaijan</option>
                                                                    <option value="16">Bahamas</option>
                                                                    <option value="17">Bahrain</option>
                                                                    
                                                                </select>
                                                            </div>
                                                            <div class="form-group required">
                                                                <label for="input-payment-zone" class="control-label">Region / State</label>
                                                                <select class="form-control" id="input-payment-zone" name="zone_id">
                                                                    <option value=""> --- Please Select --- </option>
                                                                    <option value="3513">Aberdeen</option>
                                                                    <option value="3514">Aberdeenshire</option>
                                                                    <option value="3515">Anglesey</option>
                                                                    <option value="3516">Angus</option>
                                                                    <option value="3517">Argyll and Bute</option>
                                                                    <option value="3518">Bedfordshire</option>
                                                                    <option value="3519">Berkshire</option>
                                                                    <option value="3520">Blaenau Gwent</option>
                                                                    <option value="3521">Bridgend</option>
                                                                    <option value="3522">Bristol</option>
                                                                    
                                                                </select>
                                                            </div>
                                                            <div class="checkbox">
                                                                <label>
                                                                    <input type="checkbox" checked="checked" value="1" name="shipping_address"/>
                                                                    My delivery and billing addresses are the same.</label>
                                                                </div>
                                                            </fieldset>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-right col-sm-9">
                                                    <div class="row">
                                                        <div class="col-sm-12">
                                                            <div class="panel panel-default no-padding">
                                                                <div class="col-sm-6 checkout-shipping-methods">
                                                                    <div class="panel-heading">
                                                                        <h4 class="panel-title"><i class="fa fa-truck"></i> Delivery Method</h4>
                                                                    </div>
                                                                    <div class="panel-body ">
                                                                        <p>Please select the preferred shipping method to use on this order.</p>
                                                                        <div class="radio">
                                                                            <label>
                                                                                <input type="radio" checked="checked" name="Delivery"/>
                                                                                Free Shipping - $0.00</label>
                                                                            </div>
                                                                            <div class="radio">
                                                                                <label>
                                                                                    <input type="radio" name="Delivery"/>
                                                                                    Flat Shipping Rate - $7.50</label>
                                                                                </div>
                                                                                
                                                                            </div>
                                                                        </div>
                                                                        <div class="col-sm-6  checkout-payment-methods">
                                                                            <div class="panel-heading">
                                                                                <h4 class="panel-title"><i class="fa fa-credit-card"></i> Payment Method</h4>
                                                                            </div>
                                                                            <div class="panel-body">
                                                                                <p>Please select the preferred payment method to use on this order.</p>
                                                                                <div class="radio">
                                                                                    <label>
                                                                                        <input type="radio" checked="checked" name="Payment"/>Cash On Delivery</label>
                                                                                    </div>
                                                                                    
                                                                                    <div class="radio">
                                                                                        <label>
                                                                                            <input type="radio" name="Payment"/>Paypal</label>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            
                                                                            
                                                                            
                                                                        </div>
                                                                        
                                                                        
                                                                        
                                                                        <div class="col-sm-12">
                                                                            <div class="panel panel-default">
                                                                                <div class="panel-heading">
                                                                                    <h4 class="panel-title"><i class="fa fa-ticket"></i> Do you Have a Coupon or Voucher?</h4>
                                                                                </div>
                                                                                <div class="panel-body row">
                                                                                    <div class="col-sm-6 ">
                                                                                        <div class="input-group panel-body-1">
                                                                                            <input type="text" class="form-control" id="input-coupon" placeholder="Enter your coupon here" value="" name="coupon"/>
                                                                                            <span class="input-group-btn">
                                                                                                <input type="button" class="btn btn-primary" data-loading-text="Loading..." id="button-coupon" value="Apply Coupon"/>
                                                                                            </span></div>
                                                                                        </div>
                                                                                        
                                                                                        <div class="col-sm-6">
                                                                                            <div class="input-group">
                                                                                                <input type="text" class="form-control" id="input-voucher" placeholder="Enter your gift voucher code here" value="" name="voucher"/>
                                                                                                <span class="input-group-btn">
                                                                                                    <input type="submit" class="btn btn-primary" data-loading-text="Loading..." id="button-voucher" value="Apply Voucher"/>
                                                                                                </span> </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                
                                                                                <div class="col-sm-12">
                                                                                    <div class="panel panel-default">
                                                                                        <div class="panel-heading">
                                                                                            <h4 class="panel-title"><i class="fa fa-shopping-cart"></i> Shopping cart</h4>
                                                                                        </div>
                                                                                        <div class="panel-body">
                                                                                            <div class="table-responsive">
                                                                                                <table class="table table-bordered">
                                                                                                    <thead>
                                                                                                        <tr>
                                                                                                            <td class="text-center">Image</td>
                                                                                                            <td class="text-left">Product Name</td>
                                                                                                            <td class="text-left">Quantity</td>
                                                                                                            <td class="text-right">Unit Price</td>
                                                                                                            <td class="text-right">Total</td>
                                                                                                        </tr>
                                                                                                    </thead>
                                                                                                    <tbody>
                                                                                                        {
                                                                                                            carts && carts.map((item,index)=>{
                                                                                                                return(
                                                                                                                    <tr>
                                                                                                            <td class="text-center"><a href="product.html"><img width="60px" src={require("../../images/demo/shop/product/"+ item.imageUrl)} alt="Xitefun Causal Wear Fancy Shoes" title="Xitefun Causal Wear Fancy Shoes" class="img-thumbnail"/></a></td>
                                                                                                            <td class="text-left"><a href="product.html">{item.name}</a></td>
                                                                                                            <td class="text-left"><div class="input-group btn-block checkout" style={{minWidth: "100px"}}>
                                                                                                                <input type="text" name="quantity" value={item.quantity} size="1" class="form-control"/>
                                                                                                                <span class="input-group-btn">
                                                                                                                    <button type="submit" data-toggle="tooltip" title="" class="btn btn-primary" data-original-title="Update"><i class="fa fa-refresh"></i></button>
                                                                                                                    <button type="button" data-toggle="tooltip" title="" class="btn btn-danger" onClick={()=>{this.removeFromCart(index)}} data-original-title="Remove"><i class="fa fa-times-circle"></i></button>
                                                                                                                </span></div></td>
                                                                                                                <td class="text-right">{item.price}</td>
                                                                                                                <td class="text-right">{item.price}</td>
                                                                                                            </tr>
                                                                                                                )
                                                                                                            })
                                                                                                        }
                                                                                                        </tbody>
                                                                                                        <tfoot>
                                                                                                            <tr>
                                                                                                                <td class="text-right" colspan="4"><strong>Sub-Total:</strong></td>
                                                                                                                <td class="text-right">$93.73</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td class="text-right" colspan="4"><strong>Flat Shipping Rate:</strong></td>
                                                                                                                <td class="text-right">$4.69.00</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td class="text-right" colspan="4"><strong>Eco Tax (-2.00):</strong></td>
                                                                                                                <td class="text-right">$3.75.00</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td class="text-right" colspan="4"><strong>VAT (20%):</strong></td>
                                                                                                                <td class="text-right">$19.68</td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td class="text-right" colspan="4"><strong>Total:</strong></td>
                                                                                                                <td class="text-right">$121.85</td>
                                                                                                            </tr>
                                                                                                        </tfoot>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-sm-12">
                                                                                        <div class="panel panel-default">
                                                                                            <div class="panel-heading">
                                                                                                <h4 class="panel-title"><i class="fa fa-pencil"></i> Add Comments About Your Order</h4>
                                                                                            </div>
                                                                                            <div class="panel-body">
                                                                                                <textarea rows="4" class="form-control" id="confirm_comment" name="comments"></textarea>
                                                                                                <br/>
                                                                                                <label class="control-label" for="confirm_agree">
                                                                                                    <input type="checkbox" checked="checked" value="1" required="" class="validate required" id="confirm_agree" name="confirm agree"/>
                                                                                                    <span>I have read and agree to the <a class="agree" href="#"><b>Terms &amp; Conditions</b></a></span> </label>
                                                                                                    <div class="buttons">
                                                                                                        <div class="pull-right">
                                                                                                            <input type="button" class="btn btn-primary" id="button-confirm" value="Confirm Order"/>
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
                                                                <footer class="footer-container type_footer1">
                                                                    <section class="footer-top">
                                                                        <div class="container content">
                                                                            <div class="">
                                                                                <div class=" collapsed-block ">
                                                                                    <div class="module clearfix">
                                                                                        <h3 class="modtitle">Contact Us	</h3>
                                                                                        <div class="modcontent">
                                                                                            <ul class="contact-address">
                                                                                                <li><p><span class="fa fa-map-marker"></span><span>Address : </span> My Company, 42 avenue des Champs Elysées</p></li>
                                                                                                <li><span class="fa fa-envelope-o"></span><span>Email : </span> <a href="#"> sales@yourcompany.com</a></li>
                                                                                                <li><p><span class="fa fa-phone"> </span><span>Phone :</span> 0123456789</p> </li>
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div class="share-icon">
                                                                                            <ul>
                                                                                                <li class="facebook"><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                                                                                <li class="twitter"><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                                                                                <li class="google"><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                                                                                <li class="skype"><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class=" box-information">
                                                                                    <div class="module clearfix">
                                                                                        <h3 class="modtitle">Information</h3>
                                                                                        <div class="modcontent">
                                                                                            <ul class="menu">
                                                                                                <li><a href="about-us.html">About Us</a></li>
                                                                                                <li><a href="faq.html">FAQ</a></li>
                                                                                                <li><a href="order-history.html">Order history</a></li>
                                                                                                <li><a href="order-information.html">Order information</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
        
                                                                                <div class=" box-extras">
                                                                                    <div class="module clearfix">
                                                                                        <h3 class="modtitle">Extras</h3>
                                                                                        <div class="modcontent">
                                                                                            <ul class="menu">
                                                                                                <li><a href="contact.html">Contact Us</a></li>
                                                                                                <li><a href="return.html">Returns</a></li>
                                                                                                <li><a href="sitemap.html">Site Map</a></li>
                                                                                                <li><a href="my-account.html">My Account</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
        
                                                                                <div class="box-account">
                                                                                    <div class="module clearfix">
                                                                                        <h3 class="modtitle">My Account</h3>
                                                                                        <div class="modcontent">
                                                                                            <ul class="menu">
                                                                                                <li><a href="#">Brands</a></li>
                                                                                                <li><a href="gift-voucher.html">Gift Vouchers</a></li>
                                                                                                <li><a href="#">Affiliates</a></li>
                                                                                                <li><a href="#">Specials</a></li>
                                                                                                <li><a href="#" target="_blank">Our Blog</a></li>
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
        
        
        
                                                                            </div>
                                                                        </div></section>
                                                                        <div class="footer-mid">
                                                                            <div class=" help">
                                                                                <div class=" container">
                                                                                    <div class=" row">
                                                                                        <div class="footer-mid-left col-sm-6 col-xs-12">
                                                                                            <h3>NEED HELP? </h3>
                                                                                            <p>SUPPORT TEAM 24/7 AT (844) 555-8386</p>
                                                                                        </div>
                                                                                        <div class="footer-mid-right col-sm-6 col-xs-12">
                                                                                            <div class="btn-sub">
                                                                                                <i class="fa fa-envelope" aria-hidden="true"></i>
                                                                                                <input class="autosearch-input form-control" type="text" value="" size="50" autocomplete="off" placeholder="Your Email Address..." name="subscribe"/>
                                                                                                <button type="submit" class="button-search btn btn-primary" name="submit_subscribe">Subscribe</button>
                                                                                            </div>
        
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </footer>
        
                                                                </div>
                                                                <div class="footer-bottom-block ">
                                                                    <div class=" container">
                                                                        <div class="row">
                                                                            <div class="footer-bottom-header">
                                                                                <div class="col-xs-12 col-sm-12 col-md-5 download">
                                                                                    <h3>Download Our App</h3>
                                                                                    <a href="#"><img src={require("../../images/demo/download/app.jpg")} alt=""/></a>
                                                                                    <a href="#"><img src={require("../../images/demo/download/ggplay.jpg")} alt=""/></a>
                                                                                </div>
                                                                                <div class="col-xs-12 col-sm-12 col-md-7 pay">
                                                                                    <ul>
                                                                                        <li><img src={require("../../images/demo/payment/visa.jpg")} alt=""/></li>
                                                                                        <li><img src={require("../../images/demo/payment/meastro.jpg")} alt=""/></li>
                                                                                        <li><img src={require("../../images/demo/payment/paypal.jpg")} alt=""/></li>
                                                                                        <li><img src={require("../../images/demo/payment/union.jpg")} alt=""/></li>
                                                                                        <li><img src={require("../../images/demo/payment/cirrus.jpg")} alt=""/></li>
                                                                                        <li><img src={require("../../images/demo/payment/ebay.jpg")} alt=""/></li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                            <div class="text-footer-bot">
                                                                                <p>Destino - Premium Multipurpose HTML5/CSS3 Theme - Designed by <a href="#">SmartAddons.Com</a></p>
                                                                            </div>
                                                                            <div class="back-to-top hidden-top"><i class="fa fa-angle-up"></i><span> Top </span></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
        </body>
        )
    }
}
export default CheckOut;