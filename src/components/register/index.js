import React, { Component } from 'react';
import '../header/header.css';
import fire from '../../config/fire';
class Register extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: '',
          firstname:'',
          lastname:'',
          telephone:'',
          password1:''
        };
      }
      
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value});
      }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)
            alert("you have been registered please click on the login button")})
        .catch((error) => {
            console.log(error);
          })
      }
    render() {
        let {firstname, lastname,password,password1}= this.state
        console.log("user data",firstname, lastname,password,password1)
      return (
        <div className="content-main" style={{marginTop: "75px", marginBottom: "75px"}}> 
                <div className="main-container container">
                    <div className="row">
                        <div id="content " className="col-md-12 col-sm-12 type-3">
                            <div className="product-view row">
                                <div className="left-content-product col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <div className="row">
                                        <div className="main-container container"> 
                                            <div className="row" style={{fontFamily: "Montserrat"}}> 
                                                <div id="content" className="col-sm-12"> 
                                                    <h2 className="title" style={{fontWeight: 700}}>Register Account</h2> 
                                                    <p style={{fontSize:"16px"}}>If you already have an account with us, please login at the <b><a href="login.html">login page</a></b>.</p> 
                                                    <form action="#" method="post" enctype="multipart/form-data" className="form-horizontal account-register clearfix"> 
                                                        <fieldset id="account"> 
                                                            <legend style={{fontWeight: 600}}>Your Personal Details</legend>                                                             
                                                            <div className="form-group required" style={{display: "none"}}> 
                                                                <label className="col-sm-2 control-label">Customer Group</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <div className="radio"> 
                                                                        <label> 
                                                                            <input type="radio" name="customer_group_id" value="1" checked="checked"/> Default
                                                                        </label>                                                                         
                                                                    </div>                                                                     
                                                                </div>                                                                 
                                                            </div>                                                             
                                                            <div className="form-group required"> 
                                                                <label className="col-sm-2 control-label" for="input-firstname">First Name</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <input value={this.state.firstname} onChange={this.handleChange} type="text" name="firstname" placeholder="First Name" id="input-firstname" className="form-control"/> 
                                                                </div>                                                                 
                                                            </div>                                                             
                                                            <div className="form-group required"> 
                                                                <label className="col-sm-2 control-label" for="input-lastname">Last Name</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <input value={this.state.lastname} onChange={this.handleChange} type="text" name="lastname" placeholder="Last Name" id="input-lastname" className="form-control"/> 
                                                                </div>                                                                 
                                                            </div>                                                             
                                                            <div className="form-group required"> 
                                                                <label className="col-sm-2 control-label" for="input-email">E-Mail</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" placeholder="E-Mail" aria-describedby="emailHelp"/> 
                                                                </div>                                                                 
                                                            </div>                                                             
                                                            <div className="form-group required"> 
                                                                <label className="col-sm-2 control-label" for="input-telephone">Telephone</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <input value={this.state.telephone} onChange={this.handleChange} type="number" name="telephone" placeholder="Telephone" id="input-telephone" className="form-control"/> 
                                                                </div>                                                                 
                                                            </div>                                                                                                                          
                                                        </fieldset>                                                                                                                  
                                                        <fieldset> 
                                                            <legend style={{fontWeight: 600}}>Your Password</legend>                                                             
                                                            <div className="form-group required"> 
                                                                <label className="col-sm-2 control-label" for="input-password">Password</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <input value={this.state.password1} onChange={this.handleChange} type="password" name="password1" placeholder="Password" id="input-password" className="form-control"/> 
                                                                </div>                                                                 
                                                            </div>                                                             
                                                            <div className="form-group required"> 
                                                                <label className="col-sm-2 control-label" for="input-confirm">Password Confirm</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password Confirm" required=""/> 
                                                                </div>                                                                 
                                                            </div>                                                             
                                                        </fieldset>                                                         
                                                        <fieldset> 
                                                            <legend style={{fontWeight: 600}}>Inbox Specials Subscription</legend>                                                             
                                                            <div className="form-group"> 
                                                                <label className="col-sm-2 control-label">Subscribe</label>                                                                 
                                                                <div className="col-sm-10"> 
                                                                    <label className="radio-inline"> 
                                                                        <input type="radio" name="newsletter" value="1"/> Yes
                                                                    </label>                                                                     
                                                                    <label className="radio-inline"> 
                                                                        <input type="radio" name="newsletter" value="0" checked="checked"/> No
                                                                    </label>                                                                     
                                                                </div>                                                                 
                                                            </div>                                                             
                                                        </fieldset>                                                         
                                                        <div className="buttons"> 
                                                            <div className="pull-right">I have read and agree to the 
                                                                <a href="service.html" className="agree"><b>Terms of service</b></a> 
                                                                <input className="box-checkbox" type="checkbox" name="agree" value="1"/> &nbsp;
                                                                <a href="register2.html" className="btn btn-default pull-right" style={{fontFamily: "Montserrat"}} onClick={this.signup}>Continue</a> 
                                                            </div>                                                             
                                                        </div>                                                         
                                                    </form>                                                     
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
      );
    }
  }
  
  export default Register;