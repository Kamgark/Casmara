import React, {Component} from 'react';
import '../header/header.css';
import {Link} from 'react-router-dom';
import data from '../../data/data.json'
class Main extends Component{
    addpro(val){
        let {rightcart, dispatch}=this.props;
        let rightcarts=[...rightcart];
        rightcarts.push(data.product[val]);
        dispatch({
            type:'rightcart',
            payLoad:rightcarts
        })
    }
    render(){
        let product= data.product
        return(
            <div class="content-main"> 
                <section class="so-spotlight container-fluid"> 
                    <div class="owl-slider"> 
                        <div class="owl-carousel owl-loaded owl-drag" data-margin="0" data-nav="yes" data-loop="yes" data-items_xs="1" data-items_sm="1" data-items_md="1"> 
                                                         
                                                         
                                                         
                        <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(-4047px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "9443px"}}><div class="owl-item cloned" style={{width: "1349px"}}><div class="slider"> 
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-2.jpg")} alt=""/>
                                </a>                                 
                            </div></div><div class="owl-item cloned" style={{width: "1349px"}}><div class="slider"> 
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-3.jpg")} alt=""/>
                                </a>                                 
                            </div></div><div class="owl-item" style={{width: "1349px"}}><div class="slide"> 
                                <container>
                                    <row>
                                </row>
                                </container>
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-1.jpg")} alt=""/>
                                </a>                                 
                            </div></div><div class="owl-item active" style={{width: "1349px"}}><div class="slider"> 
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-2.jpg")} alt=""/>
                                </a>                                 
                            </div></div><div class="owl-item" style={{width: "1349px"}}><div class="slider"> 
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-3.jpg")} alt=""/>
                                </a>                                 
                            </div></div><div class="owl-item cloned" style={{width: "1349px"}}><div class="slide"> 
                                <container>
                                    <row>
</row>
                                </container>
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-1.jpg")} alt=""/>
                                </a>                                 
                            </div></div><div class="owl-item cloned" style={{width: "1349px"}}><div class="slider"> 
                                <a href="">
                                    <img src={require("../../images/demo/slider/home-5/slider-2.jpg")} alt=""/>
                                </a>                                 
                            </div></div></div></div><div class="owl-nav"><div class="owl-prev"></div><div class="owl-next"></div></div><div class="owl-dots disabled"></div></div>                         
                    </div>                     
                </section>                 
                <section class="so-spotlight33" style={{marginTop: "15px"}}>
                    <div class="container-fluid">
                        <div class="col-sm-12 banners col-xs-1">
                            <div class="banner-left">
                                <Link to="/compare"><a  onClick={()=>{this.addpro(0)}}>
                                    <img src={require("../../images/demo/banner/home-3/"+ product[0].image)} alt=""/>
                                </a></Link>
                            </div>
                            <div class="banner-right">
                                <div class="banner-right-top">
                                <Link to="/compare">
                                    <a  onClick={()=>{this.addpro(1)}}>
                                        <img src={require("../../images/demo/banner/home-3/"+ product[1].image)} alt=""/>
                                    </a>
                                </Link>
                                </div>
                                <div class="banner-right-bottom">
                                    <div class="banner-right-bottom-1">
                                        <a href="giftcards.html">
                                            <img src={require("../../images/demo/banner/home-3/banner-3.jpg")} alt=""/>
                                        </a>
                                    </div>
                                    <div class="banner-right-bottom-2">
                                        <a href="https://m.me/DENUVOCURACAO">
                                            <img src={require("../../images/demo/banner/home-3/banner-4.jpg")} alt=""/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="so-spotlight2"> 
                    <div class="collections container-fluid"> 
                        <div class="collection collection-1"> 
                            <div class="img-collection"> 
                                <img src={require("../../images/demo/collections/home-5/collection-1.jpg")} alt=""/> 
                            </div>                             
                            <div class="info-collection"> 
                                <h3><a href="" style={{fontWeight: "normal", fontFamily: "Mr Dafoe", fontSize: "66px", textTransform: "capitalize"}}>For Her</a></h3> 
                                <ul> 
                                    <li>
                                        <a href="cosmetics.html">Eyelashes</a>
                                    </li>                                     
                                    <li>
                                        <a href="cosmetics.html">Eyebrows</a>
                                    </li>                                     
                                    <li>
                                        <a href="facials.html">Facials</a>
                                    </li>                                     
                                    <li>
                                        <a href="hair-removal.html">Hair Removal</a>
                                    </li>                                     
                                    <li>
                                        <a href="peelings.html">Peelings</a>
                                    </li>                                     
                                </ul>                                 
                            </div>                             
                        </div>
                        <div class="collection collection-3"> 
                            <div class="img-collection"> 
                                <img src={require("../../images/demo/collections/home-5/collection-3.jpg")} alt=""/> 
                            </div>                             
                        </div>                         
                        <div class="collection collection-2"> 
                            <div class="img-collection"> 
                                <img src={require("../../images/demo/collections/home-5/collection-2.jpg")} alt=""/> 
                            </div>                             
                            <div class="info-collection"> 
                                <h3><a style={{fontWeight: "normal", fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "66px"}}>For Him</a></h3> 
                                <ul> 
                                    <li>
                                        <a href="#" style={{fontWeight: 900}}>Facials</a>
                                    </li>                                     
                                    <li>
                                        <a href="pedicure.html">Pedicure</a>
                                    </li>                                     
                                    <li>
                                        <a href="teethwhitening">Teeth-Whtening</a>
                                    </li>                                     
                                    <li>
                                        <a href="massages.html">Massage</a>
                                    </li>                                     
                                    <li>
                                        <a href="peelings.html">Peelings</a>
                                    </li>                                     
                                </ul>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </section>                 
                <section class="so-spotlight5" style={{marginTop: "25px", marginBottom: "25px"}}> 
                    <div class="container"> 
                        <div class="row"> 
                            <div class="col-sm-12 col-xs-12"> 
                                <div class="owl-testimonials"> 
                                    <div class="owl-carousel owl-loaded owl-drag" data-nav="no" data-loop="yes" data-margin="0" data-dots="yes" data-items_xs="1" data-items_sm="1" data-items_md="1"> 
                                                                    
                                    <div class="owl-stage-outer"><div class="owl-stage" style={{transform: "translate3d(-3420px, 0px, 0px)", transition: "all 0s ease 0s", width: "12540px"}}><div class="owl-item cloned" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Excelente me encanta por su atencion y el trato de su grupo de chicas que me atienden</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "29px", fontWeight: "normal", color: "#1a1432"}}>Elsi Maria Primera</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item cloned" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Awe mi a bishita Casmara saliña pami pedicure
I mi a haña un servisio super bn</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", fontSize: "29px", fontWeight: "normal", textTransform: "capitalize", color: "#1a1432"}}>Shadilyne Martha</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item cloned" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Just did my pedicure at Casmara. Mi ta hopi kontentu ku e resultado, trahadonan super servisial i profeshonal den un esferera hopi relax. Masha danki pe servisio</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", fontSize: "29px", fontWeight: "normal", textTransform: "capitalize", color: "#1a1432"}}>Jo-Ann Crozier Phelipa</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item active" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>I’m overwhelmed with my full body wax treatment. Staff is friendly, professional and puts you at ease. The place is clean, décor and Overall ambiance is delightful</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "39px", fontWeight: "normal", color: "#1a1432"}}>Shana Simon</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Great vibes, excellent service,.. royal vip treatment. Will return for sure to conitnue to try all the various services!!!</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", fontWeight: "normal", fontSize: "29px", textTransform: "capitalize", color: "#1a1432"}}>Sabrina Evertsz</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Excelente me encanta por su atencion y el trato de su grupo de chicas que me atienden</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "29px", fontWeight: "normal", color: "#1a1432;"}}>Elsi Maria Primera</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Awe mi a bishita Casmara saliña pami pedicure
I mi a haña un servisio super bn</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "29px", fontWeight: "normal", color: "#1a1432;"}}>Shadilyne Martha</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Just did my pedicure at Casmara. Mi ta hopi kontentu ku e resultado, trahadonan super servisial i profeshonal den un esferera hopi relax. Masha danki pe servisio</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "29px", fontWeight: "normal", color: "#1a1432;"}}>Jo-Ann Crozier Phelipa</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item cloned" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>I’m overwhelmed with my full body wax treatment. Staff is friendly, professional and puts you at ease. The place is clean, décor and Overall ambiance is delightful</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "39px", fontWeight: "normal", color: "#1a1432;"}}>Shana Simon</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item cloned" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Great vibes, excellent service,.. royal vip treatment. Will return for sure to conitnue to try all the various services!!!</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "29px", fontWeight: "normal", color: "#1a1432;"}}>Sabrina Evertsz</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div><div class="owl-item cloned" style={{width: "1140px"}}><div class="item"> 
                                            <p class="client-comment" style={{fontFamily: "Montserrat"}}>Excelente me encanta por su atencion y el trato de su grupo de chicas que me atienden</p> 
                                            <div class="info-client"> 
                                                <span style={{fontFamily: "Mr Dafoe", textTransform: "capitalize", fontSize: "29px", fontWeight: "normal", color: "#1a1432;"}}>Elsi Maria Primera</span> 
                                                <p style={{fontFamily: "Montserrat"}}>Happy Customer</p> 
                                            </div>                                             
                                        </div></div></div></div><div class="owl-nav disabled"><div class="owl-prev"></div><div class="owl-next"></div></div><div class="owl-dots"><div class="owl-dot active"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div><div class="owl-dot"><span></span></div></div></div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                    </div>                     
                </section>                 
                <hr/>
                <section class="so-spotlight7"> 
                    <div class="container" style={{marginTop: "19px", marginBottom: "19px"}}> 
                        <div class="row"> 
                            <div class="col-sm-12 col-xs-12"> 
                                <h4 class="modtitle4" style={{fontFamily: "Montserrat"}}>Personal Care happens by appointment</h4>
                                <h3 class="modtitle4" style={{fontFamily: "Montserrat"}}>It's time to feel like</h3> 
                                <div class="text"> 
                                    <p style={{fontSize: "141px", transform: "rotate(-4deg)", color: "#3300ff", marginTop: "62px"}} class="mrdafoe top40">Magic</p> 
                                </div>                                 
                                <div style={{textAlign: "center", marginTop: "116px"}}> 
                                    <a href="tel:+59994652333">
                                        <button class="btn btn-default btn-lg" type="Book" name="book" style={{backgroundColor: "#222222", color: "#ffffff", fontFamily: "Montserrat"}}>Book Now</button>
                                    </a>                                     
                                </div>
                            </div>                             
                        </div>                         
                    </div>                     
                </section>
            </div>
        )
    }
}
export default Main;