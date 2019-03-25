import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './header.css';
class Header extends Component{
    render(){
        return(
            <header id="header" className=" variantleft type_5 ">                
                <div className="header-top"> 
                    <div className="container-fluid"> 
                        <div className="row"> 
                            <div className="header-top-left form-inline col-sm-5 col-xs-6 compact-hidden "> 
                                <div className="form-group currencies-block"> 
                                    <form action="http://demo.smartaddons.com/templates/html/destino/index.html" method="post" enctype="multipart/form-data" id="currency"> 
                                        <ul className="dropdown-menu btn-xs"> 
                                            <li> 
                                                <a href="#" >(€)&nbsp;Euro</a>
                                            </li>                                             
                                            <li> 
                                                <a href="#">(FL.)&nbsp;Guilders</a>
                                            </li>                                             
                                            <li> 
                                                <a href="#">($)&nbsp;USD</a>
                                            </li>                                             
                                        </ul>                                         
                                    </form>                                     
                                </div>                                 
                            </div>                             
                            <div className="navbar-logo col-md-2 col-sm-2 col-xs-12"> 
                                <Link to="/"><a href="index.html">
                                    <img src={require("../../images/demo/logo/home-4/logo.png")} title="Your Store" alt="Your Store"/>
                                </a> </Link>                 
                            </div>                             
                            <div className="header-top-right collapsed-block   col-sm-5 col-xs-6 compact-hidden text-right"> 
                                <div> 
                                    <ul className="top-link list-inline"> 
                                        <li className="checkout">
                                            <Link to="/login"><a classNameName="top-link-checkout" title="Login"><span >Login</span></a></Link>
                                        </li>                                         
                                        <li classNameName="login">
                                            <Link to="/register"><a title="Register"><span>Register</span></a></Link>
                                        </li>                                         
                                    </ul>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </div>          
                <div className="header-center left"> 
                    <div className="container"> 
                        <div className="row">                           
                            <div className="megamenu-hori   col-md-12  col-sm-12 col-xs-12 "> 
                                <div className="responsive so-megamenu "> 
                                    <nav className="navbar-default"> 
                                        <div className=" container-megamenu  horizontal"> 
                                            <div className="navbar-header"> 
                                                <button id="show-megamenu" data-toggle="collapse" className="navbar-toggle"> 
                                                    <span className="icon-bar"/> 
                                                    <span className="icon-bar"/> 
                                                    <span className="icon-bar"/> 
                                                </button>                                                 
                                            </div>                                             
                                            <div className="megamenu-wrapper"> 
                                                <span id="remove-megamenu" className="fa fa-times"/> 
                                                <div className="megamenu-pattern"> 
                                                    <div className="container"> 
                                                        <ul className="megamenu " data-transition="slide" data-animationtime="250"> 
                                                            <li className="home hove"> 
                                                                <p className="close-menu"></p> 
                                                                <a href="index.html" className="menu1 first-a">Home</a> 
                                                                <div className="sub-menu sub-menu-1"> 
                                                                    <div className="content" > 
                                                                        <div className="row"> 
                                                                            <div className="col-md-3"> 
                                                                                <a href="index.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-1.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - (Default)</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home2.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-2.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 2</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home3.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-3.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 3</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home4.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-4.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 4</h3> </a> 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                        <div className="row"> 
                                                                            <div className="col-md-3"> 
                                                                                <a href="home5.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-5.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 5</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home6.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-6.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 6</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home7.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-7.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 7</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home8.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-8.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 8</h3> </a> 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                        <div className="row"> 
                                                                            <div className="col-md-3"> 
                                                                                <a href="home9.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-9.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 9</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home10.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-10.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 10</h3> </a> 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="home11.html" className="image-link"> <span className="thumbnail"> <img className="img-responsive img-border" src={require("../../images/demo/feature/home-11.jpg")} alt=""/> <span className="btn btn-default">Read More</span> </span> <h3 className="figcaption">Home page - Layout 11</h3> </a> 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                    </div>                                                                     
                                                                </div>
                                                            </li>                                                             
                                                            <li className="with-sub-menu with-sub-menu-1 hover"> 
                                                                <p className="close-menu"></p> 
                                                                <a href="" className="clearfix menu1"> <strong>Treatments</strong> <span className="label"></span> </a> 
                                                                <div className="sub-menu"> 
                                                                    <div className="content" > 
                                                                        <div className="row"> 
                                                                            <div className="col-md-3"> 
                                                                                <a href="" className="title-submenu">Facial Care</a> 
                                                                                <div className="row"> 
                                                                                    <div className="col-md-12 hover-menu"> 
                                                                                        <div className="menu"> 
                                                                                            <ul> 
                                                                                                <li>
                                                                                                    <a href="facials.html" className="main-menu">Facials</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="cosmetics.html" className="main-menu">Cosmetics</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="hair-removal.html" className="main-menu">Hair Removal</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="zceloxy.html" className="main-menu">Zceloxy</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="anti-acne.html" className="main-menu">Anti-Acne</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="peelings.html" className="main-menu">Peelings</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="dermaroller.html" className="main-menu">Dermaroller</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="anti-pigmentation.html" className="main-menu">Anti-Pigmentation</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="electrolysis.html" className="main-menu">Electrolysis</a>
                                                                                                </li>
                                                                                                <li>
                                                                                                    <a href="eyes.html" className="main-menu">Eyes</a>
                                                                                                </li>                                                                                                 
                                                                                            </ul>                                                                                             
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="" className="title-submenu">Body Care</a> 
                                                                                <div className="row"> 
                                                                                    <div className="col-md-12 hover-menu"> 
                                                                                        <div className="menu"> 
                                                                                            <ul> 
                                                                                                <li>
                                                                                                    <a href="peelings.html" className="main-menu">Peelings</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="hair-removal.html#body" className="main-menu">Hair Removal</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="pedimedi.html" className="main-menu">Pedi- &amp; Manicure</a>
                                                                                                </li>                                                                                                 
                                                                                            </ul>                                                                                             
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="" className="title-submenu"> Plans</a> 
                                                                                <div className="row"> 
                                                                                    <div className="col-md-12 hover-menu"> 
                                                                                        <div className="menu"> 
                                                                                            <ul> 
                                                                                                <li>
                                                                                                    <a href="anti-aging.html" className="main-menu">Anti-Aging Plan</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="wedding.html" className="main-menu">Wedding Plan</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="meow.html" className="main-menu">Meow Plan</a>
                                                                                                </li>                                                                                                 
                                                                                            </ul>                                                                                             
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                            </div>                                                                             
                                                                            <div className="col-md-3"> 
                                                                                <a href="" className="title-submenu">Consult</a> 
                                                                                <div className="row"> 
                                                                                    <div className="col-md-12 hover-menu"> 
                                                                                        <div className="menu"> 
                                                                                            <ul> 
                                                                                                <li>
                                                                                                    <a href="personal-consult.html" className="main-menu">Personal</a>
                                                                                                </li>                                                                                                 
                                                                                                <li>
                                                                                                    <a href="online-consult.html" className="main-menu">Online</a>
                                                                                                </li>                                                                                                 
                                                                                            </ul>                                                                                             
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                    </div>                                                                     
                                                                </div>                                                                 
                                                            </li>                                                             
                                                            <li className="with-sub-menu with-sub-menu-2 hover"> 
                                                                <p className="close-menu"></p> 
                                                                <a href="" className="clearfix menu1"> <strong>Shop</strong> </a> 
                                                                <div className="sub-menu" > 
                                                                    <div className="content"> 
                                                                        <div className="row"> 
                                                                            <div className="col-sm-12"> 
                                                                                <div className="row"> 
                                                                                    <div className="col-md-3 img img1"> 
                                                                                        <a href="purifying.html">
                                                                                            <img src={require("../../images/demo/cms/img1.jpg")} alt="banner1"/>
                                                                                        </a>                                                                                         
                                                                                    </div>                                                                                     
                                                                                    <div className="col-md-3 img img2"> 
                                                                                        <a href="antioxidant.html">
                                                                                            <img src={require("../../images/demo/cms/img2.jpg")} alt="banner2"/>
                                                                                        </a>                                                                                         
                                                                                    </div>
                                                                                    <div className="col-md-3 img img2"> 
                                                                                        <a href="hydra.html">
                                                                                            <img src={require("../../images/demo/cms/img3.jpg")} alt="banner2"/>
                                                                                        </a>                                                                                         
                                                                                    </div>
                                                                                    <div className="col-md-3 img img2"> 
                                                                                        <a href="luxury.html">
                                                                                            <img src={require("../../images/demo/cms/img4.jpg")} alt="banner2"/>
                                                                                        </a>                                                                                         
                                                                                    </div>
                                                                                    <div className="col-md-3 img img2"> 
                                                                                        <a href="renovating.html">
                                                                                            <img src={require("../../images/demo/cms/img5.jpg")} alt="banner2"/>
                                                                                        </a>                                                                                         
                                                                                    </div>                                                                                     
                                                                                    <div className="col-md-3 img img3"> 
                                                                                        <a href="shinestop.html">
                                                                                            <img src={require("../../images/demo/cms/img6.jpg")} alt="banner3"/>
                                                                                        </a>                                                                                         
                                                                                    </div>                                                                                     
                                                                                    <div className="col-md-3 img img4"> 
                                                                                        <a href="vitalizing.html">
                                                                                            <img src={require("../../images/demo/cms/img8.jpg")} alt="banner4"/>
                                                                                        </a>                                                                                         
                                                                                    </div>
                                                                                    <div className="col-md-3 img img4"> 
                                                                                        <a href="longevity.html">
                                                                                            <img src={require("../../images/demo/cms/img7.jpg")} alt="banner4"/>
                                                                                        </a>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                            </div>                                                                             
                                                                        </div>
                                                                        <div className="row"> 
                                                                            <div className="col-md-8"> 
                                                                                <div className="row"> 
                                                                                    <div className="col-md-6 static-menu"> 
                                                                                        <div className="menu"> 
                                                                                            <ul> 
                                                                                                <li> 
                                                                                                    <a href="" className="main-menu">Beautyplan Masks</a> 
                                                                                                    <ul> 
                                                                                                        <li>
                                                                                                            <a href="purifying.html">Purifying</a>
                                                                                                            <a href="antioxidant.html">Antioxidant</a>
                                                                                                            <a href="hydra.html">Hydra Lifting</a>
                                                                                                            <a href="luxury.html">Luxury</a>
                                                                                                            <a href="renovating.html">Renovating</a>
                                                                                                        </li>                                                                                                         
                                                                                                        <li>
                                                                                                            <a href="shinestop.html">Shine Control</a>
                                                                                                        </li>                                                                                                         
                                                                                                        <li>
                                                                                                            <a href="Longevity.html">Longevity</a>
                                                                                                            <a href="vitalizing.html">Vitalizing</a>
                                                                                                        </li>                                                                                                         
                                                                                                    </ul>                                                                                                     
                                                                                                </li>                                                                                                 
                                                                                            </ul>                                                                                             
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                    <div className="col-md-6 static-menu"> 
                                                                                        <div className="menu"> 
                                                                                            <ul> 
                                                                                                <li> 
                                                                                                    <a href="#" className="main-menu">Merchendise</a> 
                                                                                                    <ul> 
                                                                                                        <li>
                                                                                                            <a href="">Coming Soon</a>
                                                                                                        </li>                                                                                                         
                                                                                                        <li>
</li>                                                                                                         
                                                                                                        <li>
</li>                                                                                                         
                                                                                                    </ul>                                                                                                     
                                                                                                </li>                                                                                                 
                                                                                            </ul>                                                                                             
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                            </div>                                                                             
                                                                            <div className="col-md-4"> 
                                                                                <span className="title-submenu">Popular</span> 
                                                                                <div className="col-sm-12 list-product"> 
                                                                                    <div className="product-thumb"> 
                                                                                        <div className="image pull-left"> 
                                                                                            <a href="#">
                                                                                                <img src={require("../../images/demo/shop/product/35.jpg")} width="80" alt="Filet Mign" title="Filet Mign" className="img-responsive"/>
                                                                                            </a>                                                                                             
                                                                                        </div>                                                                                         
                                                                                        <div className="caption"> 
                                                                                            <h4><a href="luxury.html">Luxury</a></h4> 
                                                                                            <div className="rating-box"> 
                                                                                                <span><i className="fa fa-star "></i></span> 
                                                                                                <span><i className="fa fa-star "></i></span> 
                                                                                                <span><i className="fa fa-star "></i></span> 
                                                                                                <span><i className="fa fa-star "></i></span> 
                                                                                                <span><i className="fa fa-star "></i></span> 
                                                                                            </div>                                                                                             
                                                                                            <p className="price">FL. 52,50</p> 
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>                                                                                 
                                                                                <div className="col-sm-12 list-product"> 
                                                                                    <div className="product-thumb"> 
                                                                                        <div className="image pull-left"> 
                                                                                            <a href="#">
                                                                                                <img src={require("../../images/demo/shop/product/W1.jpg.png")} width="80" alt="Dail Lulpa" title="Dail Lulpa" className="img-responsive"/>
                                                                                            </a>                                                                                             
                                                                                        </div>                                                                                         
                                                                                        <div className="caption"> 
                                                                                            <h4><a href="purifying.html">Purifying</a></h4> 
                                                                                            <div className="rating-box"> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span className="gray"><i className="fa fa-star "></i></span> 
                                                                                            </div>                                                                                             
                                                                                            <p className="price">FL. 52,50</p> 
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>
                                                                                <div className="col-sm-12 list-product"> 
                                                                                    <div className="product-thumb"> 
                                                                                        <div className="image pull-left"> 
                                                                                            <a href="#">
                                                                                                <img src={require("../../images/demo/shop/product/purifying-mask.jpg")} width="80" alt="Dail Lulpa" title="Dail Lulpa" className="img-responsive"/>
                                                                                            </a>                                                                                             
                                                                                        </div>                                                                                         
                                                                                        <div className="caption"> 
                                                                                            <h4><a href="vitalizing.html">Vitalizing</a></h4> 
                                                                                            <div className="rating-box"> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span><i className="fa fa-star "/></span> 
                                                                                                <span className="gray"><i className="fa fa-star "></i></span> 
                                                                                            </div>                                                                                             
                                                                                            <p className="price">FL. 52,50</p> 
                                                                                        </div>                                                                                         
                                                                                    </div>                                                                                     
                                                                                </div>
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                    </div>                                                                     
                                                                </div>                                                                 
                                                            </li>
                                                            <li className="with-sub-menu with-sub-menu-3 hove"> 
                                                                <p className="close-menu"></p> 
                                                                <a href="media.html" className="clearfix menu1"> <strong >Media</strong> </a> 
                                                                <div className="sub-menu" > 
                                                                    <div className="content"> 
                                                                        <div className="row"> 
                                                                            <div className="col-md-6"> 
                                                                                <ul className="row-list"> 
                                                                                    <li>
                                                                                        <a className="subcategory_item" href="faq.html">FAQ</a>
                                                                                    </li>                                                                                     
                                                                                    <li>
                                                                                        <a className="subcategory_item" href="sitemap.html">Site Map</a>
                                                                                    </li>                                                                                     
                                                                                    <li>
                                                                                        <a className="subcategory_item" href="about-us.html">About Us 1</a>
                                                                                    </li>                                                                                     
                                                                                </ul>                                                                                 
                                                                            </div>                                                                             
                                                                            <div className="col-md-6"> 
                                                                                <ul className="row-list"> 
</ul>                                                                                 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                    </div>                                                                     
                                                                </div>                                                                 
                                                            </li>
                                                            <li className="with-sub-menu with-sub-menu-4 hove"> 
                                                                <p className="close-menu"></p> 
                                                                <a href="about.html" className="clearfix menu1"> <strong >About us</strong> </a> 
                                                                <div className="sub-menu" > 
                                                                    <div className="content"> 
                                                                        <div className="row"> 
                                                                            <div className="col-md-6"> 
                                                                                <ul className="row-list"> 
                                                                                    <li>
                                                                                        <a className="subcategory_item" href="faq.html">FAQ</a>
                                                                                    </li>                                                                                     
                                                                                    <li>
                                                                                        <a className="subcategory_item" href="sitemap.html">Site Map</a>
                                                                                    </li>                                                                                     
                                                                                    <li>
                                                                                        <a className="subcategory_item" href="about-us.html">About Us 1</a>
                                                                                    </li>                                                                                     
                                                                                </ul>                                                                                 
                                                                            </div>                                                                             
                                                                            <div className="col-md-6"> 
                                                                                <ul className="row-list"> 
</ul>                                                                                 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                    </div>                                                                     
                                                                </div>                                                                 
                                                            </li>                                                             
                                                            <li> 
                                                                <p className="close-menu"></p> 
                                                                <a href="contact.html" className="clearfix menu1 contact-sec"> <strong>Contact</strong> <span className="label"></span> </a> 
                                                            </li>                                                             
                                                        </ul>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </nav>                                     
                                </div>                                 
                                <div className=" shopping_cart pull-left">               
                                    <div id="cart" className=" btn-group btn-shopping-cart"> 
                                        <a data-loading-text="Loading..." className="top_cart dropdown-toggle" data-toggle="dropdown"> 
                                            <div className="shopcart"> 
                                                <span className="handle pull-left"></span> 
                                                <span className="number-shopping-cart">2</span> 
                                            </div>                                             
                                        </a>                                         
                                        <ul className="tab-content content dropdown-menu pull-right shoppingcart-box" role="menu"> 
                                            <li> 
                                                <table className="table table-striped"> 
                                                    <tbody> 
                                                        <tr> 
                                                            <td className="text-center col1"> 
                                                                <a href="product.html"> 
                                                                    <img src={require("../../images/demo/shop/product/35.jpg")} alt="Filet Mign" title="Filet Mign" className="preview"/> 
                                                                </a>                                                                 
                                                            </td>                                                             
                                                            <td className="text-left"> 
                                                                <a className="cart_product_name" href="product.html">Filet Mign</a> 
                                                            </td>                                                             
                                                            <td className="text-center"> x1 </td> 
                                                            <td className="text-center"> $1,202.00 </td> 
                                                            <td className="text-right"> 
                                                                <a href="product.html" className="fa fa-edit"/> 
                                                            </td>                                                             
                                                            <td className="text-right"> 
                                                                <a onclick="cart.remove('2');" className="fa fa-times fa-delete"/> 
                                                            </td>                                                             
                                                        </tr>                                                         
                                                        <tr> 
                                                            <td className="text-center col2"> 
                                                                <a href="product.html"> 
                                                                    <img src={require("../../images/demo/shop/product/141.jpg")} alt="Canon EOS 5D" title="Canon EOS 5D" className="preview"/> 
                                                                </a>                                                                 
                                                            </td>                                                             
                                                            <td className="text-left"> 
                                                                <a className="cart_product_name" href="product.html">Canon EOS 5D</a> 
                                                            </td>                                                             
                                                            <td className="text-center"> x1 </td> 
                                                            <td className="text-center"> $60.00 </td> 
                                                            <td className="text-right"> 
                                                                <a href="product.html" className="fa fa-edit"/> 
                                                            </td>                                                             
                                                            <td className="text-right"> 
                                                                <a onclick="cart.remove('1');" className="fa fa-times fa-delete"/> 
                                                            </td>                                                             
                                                        </tr>                                                         
                                                    </tbody>                                                     
                                                </table>                                                 
                                            </li>                                             
                                            <li> 
                                                <div> 
                                                    <table className="table table-bordered"> 
                                                        <tbody> 
                                                            <tr> 
                                                                <td className="text-left"><strong>Sub-Total</strong> </td> 
                                                                <td className="text-right">$1,060.00</td> 
                                                            </tr>                                                             
                                                            <tr> 
                                                                <td className="text-left"><strong>Eco Tax (-2.00)</strong> </td> 
                                                                <td className="text-right">$2.00</td> 
                                                            </tr>                                                             
                                                            <tr> 
                                                                <td className="text-left"><strong>VAT (20%)</strong> </td> 
                                                                <td className="text-right">$200.00</td> 
                                                            </tr>                                                             
                                                            <tr> 
                                                                <td className="text-left"><strong>Total</strong> </td> 
                                                                <td className="text-right">$1,262.00</td> 
                                                            </tr>                                                             
                                                        </tbody>                                                         
                                                    </table>                                                     
                                                    <p className="text-right"> <a className="btn view-cart" href="cart.html"><i className="fa fa-shopping-cart"/>View Cart</a>&nbsp;&nbsp;&nbsp; <a className="btn btn-mega checkout-cart" href="checkout.html"><i className="fa fa-share"/>Checkout</a> </p> 
                                                </div>                                                 
                                            </li>                                             
                                        </ul>                                         
                                    </div>                                     
                                    <div className="search"> 
                                        <div className="btn-search"> 
                                            <button className="btn btn-primary ">
                                                <i className="fa fa-search search1" aria-hidden="true"/>
                                            </button>                                             
                                        </div>                                         
                                        <div className="input-search"> 
                                            <input type="text" name="search"/> 
                                            <button>
                                                <i className="fa fa-search" aria-hidden="true"/>
                                            </button>                                             
                                        </div>                                         
                                    </div>   
                                </div>                                 
                            </div>                            
                        </div>                         
                    </div>                     
                </div>
            </header>
        )
    }
}
export default Header;