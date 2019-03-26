import React, {Component} from 'react';
import '../header/header.css';
class Account extends Component{
    render(){
        return(
            <div className="content-main" style={{marginTop: "75px", marginBottom: "75px"}}> 
                <div className="main-container container">                      
                    <div className="row">                        
                        <div className="col-sm-9" id="content"> 
                            <h2 className="title" style={{fontFamily: "Montserrat", fontWeight: 800}}>My Account</h2> 
                            <p className="lead" style={{fontFamily: "Montserrat"}}>Hello, <strong>Jhone Cary!</strong> - To update your account information.</p> 
                            <form> 
                                <div className="row" style={{fontFamily: "Montserrat"}}> 
                                    <div className="col-sm-6"> 
                                        <fieldset id="personal-details" style={{fontFamily: "Montserrat"}}> 
                                            <legend style={{fontFamily: "Montserrat", fontWeight: 600}} >Personal Details</legend>                                             
                                            <div className="form-group required"> 
                                                <label for="input-firstname" className="control-label" style={{fontFamily: "Montserrat"}}>First Name</label>                                                 
                                                <input type="text" className="form-control" id="input-firstname" placeholder="First Name" value="" name="firstname" style={{fontFamily: "Montserrat"}}/> 
                                            </div>                                             
                                            <div className="form-group required" style={{fontFamily: "Montserrat"}}> 
                                                <label for="input-lastname" className="control-label">Last Name</label>                                                 
                                                <input type="text" className="form-control" id="input-lastname" placeholder="Last Name" value="" name="lastname"/> 
                                            </div>                                             
                                            <div className="form-group required"> 
                                                <label for="input-email" className="control-label">E-Mail</label>                                                 
                                                <input type="email" className="form-control" id="input-email" placeholder="E-Mail" value="" name="email"/>
                                            </div>                                             
                                            <div className="form-group required"> 
                                                <label for="input-telephone" className="control-label">Telephone</label>                                                 
                                                <input type="tel" className="form-control" id="input-telephone" placeholder="Telephone" value="" name="telephone"/> 
                                            </div>                                                                                          
                                        </fieldset>                                         
                                        <br/> 
                                    </div>                                     
                                    <div className="col-sm-6"> 
                                        <fieldset style={{fontFamily: "Montserrat"}}> 
                                            <legend style={{fontFamily: "Montserrat", fontWeight: 600}}>Change Password</legend>                                             
                                            <div className="form-group required"> 
                                                <label for="input-password" className="control-label" style={{fontFamily: "Montserrat"}}>Old Password</label>                                                 
                                                <input type="password" className="form-control" id="input-password" placeholder="Old Password" value="" name="old-password" style={{fontFamily: "Montserrat"}}/> 
                                            </div>                                             
                                            <div className="form-group required"> 
                                                <label for="input-password" className="control-label" style={{fontFamily: "Montserrat"}}>New Password</label>                                                 
                                                <input type="password" className="form-control" id="input-password" placeholder="New Password" value="" name="new-password"/> 
                                            </div>                                             
                                            <div className="form-group required"> 
                                                <label for="input-confirm" className="control-label">New Password Confirm</label>                                                 
                                                <input type="password" className="form-control" id="input-confirm" placeholder="New Password Confirm" value="" name="new-confirm"/> 
                                            </div>                                             
                                        </fieldset>                                         
                                        <fieldset> 
                                            <legend>Facebook Inbox Specials</legend>                                             
                                            <div className="form-group"> 
                                                <label className="col-md-4 col-sm-4 col-xs-3 control-label">Subscribe</label>                                                 
                                                <div className="col-md-8 col-sm-8 col-xs-9"> 
                                                    <label className="radio-inline"> 
                                                        <input type="radio" value="1" name="newsletter"/> Yes
                                                    </label>                                                     
                                                    <label className="radio-inline"> 
                                                        <input type="radio" checked="checked" value="0" name="newsletter"/> No
                                                    </label>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </fieldset>                                         
                                    </div>                                     
                                </div>                                                                  
                                <div className="buttons clearfix" style={{fontFamily: "Montserrat"}}> 
                                    <div className="pull-right"> 
                                        <input type="submit" className="btn btn-md btn-primary" value="Save Changes"/> 
                                    </div>                                     
                                </div>                                 
                            </form>                             
                        </div>                                       
                        <aside className="col-sm-3 hidden-xs" id="column-right"> 
                            <h2 className="subtitle" style={{fontFamily: "Montserrat"}}>Account</h2> 
                            <div className="list-group"> 
                                <ul className="list-item"> 
                                    <li>
                                        <a href="wishlist.html">Wish List</a> 
                                    </li>
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
                                        <a href="#">Reward Points</a> 
                                    </li>                                                                                                                                                                                         
                                </ul>                                 
                            </div>                             
                        </aside>                        
                    </div>                     
                </div>                 
            </div>
            
        )
    }
}
export default Account;