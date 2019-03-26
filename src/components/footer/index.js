import React, {Component} from 'react';
import '../header/header.css';
import './footer.css';
import {Link} from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <section>
                <footer className="footer-container  type_footer5">                   
                    <div className="footer-top"> 
                    </div>                     
                    <div className="footer-b">                          
                        <section className="footer-mid"> 
                            <div className="container content"> 
                                <div className="row"> 
                                    <div className="share-icon col-sm-12"> 
                                        <div className="logo"> 
                                            <a href="#">
                                                <img src={require("../../images/demo/logo/home-4/logo-footer.png")} alt="" width="390"/>
                                            </a>                                             
                                        </div>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </section>                         
                        <section className="footer-bot"> 
                            <div className="container"> 
                                <div className="row"> 
                                    <div className="col-sm-5 collapsed-block "> 
                                        <div className="module clearfix"> 
                                            <h3 className="modtitle">About Us	</h3> 
                                            <div className="modcontent"> 
                                                <ul className="contact-address" > 
                                                    <li>
                                                        <p><span className="fa fa-home" aria-hidden="true"></span><a href="https://goo.gl/maps/LLc1Q1iis6E2">Lindhbergweg #31, Salina Curaçao</a></p>
                                                    </li>                                                     
                                                    <li>
                                                        <p><span className="fa fa-envelope"></span>info@denuvo-curacao.com</p>
                                                    </li>                                                     
                                                    <li>
                                                        <p><span className="fa fa-phone"> </span>(+5999) 465-2333 | 465-2334</p> 
                                                    </li>                                                     
                                                    <li>
                                                        <p><span className="fa fa-clock"> </span>Mon - Sat / 8:00AM - 7:00PM </p> 
                                                    </li>                                                     
                                                </ul>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                    <div className="col-sm-2 box-information" > 
                                        <div className="module clearfix"> 
                                            <h3 className="modtitle">Information</h3> 
                                            <div className="modcontent"> 
                                                <ul className="menu"> 
                                                    <li >
                                                        <a href="about.html" >About Us</a>
                                                    </li>                                                     
                                                    <li>
                                                        <a href="faq.html">FAQ</a>
                                                    </li>                                                     
                                                    <li>
                                                        <a href="service.html" >Privacy Policy</a>
                                                    </li>
                                                    <li>
                                                        <a href="service.html">Terms of Service</a>
                                                    </li>                                                     
                                                </ul>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                    <div className="col-sm-2 box-extras"> 
                                        <div className="module clearfix"> 
                                            <h3 className="modtitle">Extras</h3> 
                                            <div className="modcontent"> 
                                                <ul className="menu"> 
                                                    <li>
                                                        <a href="contact.html">Contact Us</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://facebook.com/denuvocuracao" >Facebook</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://instagram.com/denuvocuracao">Instagram</a>
                                                    </li>                                                     
                                                    <li>
                                                        <a href="sitemap.html">Site Map</a>
                                                    </li>                                                     
                                                </ul>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                    <div className="col-sm-3 box-account"> 
                                        <div className="module clearfix"> 
                                            <h3 className="modtitle">My Account</h3> 
                                            <div className="modcontent"> 
                                                <ul className="menu"> 
                                                    <li>
                                                        <Link to="/myaccount"><a>My Account</a></Link>
                                                    </li>
                                                    <li>
                                                    <Link to="/login"><a>Login</a></Link>
                                                    </li>                                                     
                                                    <li>
                                                        <a href="specials.html" >Specials</a>
                                                    </li>                                                     
                                                </ul>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </section>                         
                    </div>                     
                </footer>
                <div className="footer-bottom-block "> 
                    <div className=" container"> 
                        <div className="row"> 
                            <div className="footer-bottom-header"> 
                                <div className="text-footer-bot col-md-12 col-sm-12 col-xs-12 col-lg-12 text-center"> 
                                    <p>Casmara Curacao - Powered by <a href="http://awo.digital/about"><b classNameName="bold-1">/AWO</b><b classNameName="bold-2"> Digital</b></a></p> 
                                </div>                                 
                            </div>                             
                            <div className="back-to-top">
                                <i className="fa fa-angle-up"/>
                                <span> Top </span>
                            </div>                             
                        </div>                         
                    </div>                     
                </div>
            </section>
        )
    }
}
export default Footer;