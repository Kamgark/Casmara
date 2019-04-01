import React, {Component} from 'react';
import '../header/header.css';
import {Link} from 'react-router-dom';
import fire from '../../config/fire';
class Login extends Component{
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: '',
          message:false
        };
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        this.setState({message:true})
        }).catch((error) => {
            console.log(error);
          });
      }
    render(){
        return(
            <div>
            { this.state.message===false ?
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
                                                            <div className="row"> 
                                                                <div className="col-sm-6 new-customer"> 
                                                                    <div className="well"> 
                                                                        <h2 style={{fontFamily: "Montserrat", fontWeight: 700}}><i className="fa fa-file" aria-hidden="true"></i> New Visitor</h2> 
                                                                        <p style={{fontFamily: "Montserrat", fontSize: "16px"}}>By creating an account you will be able to shop faster, be up to date on an order's status, and keep track of the orders you have previously made.</p> 
                                                                    </div>                                                                     
                                                                    <div className="bottom-form"> 
                                                                        <Link to="/register"><a className="btn btn-default pull-right" style={{fontFamily: "Montserrat"}}>Continue</a></Link> 
                                                                    </div>                                                                     
                                                                </div>                                                                 
                                                                <form action="#" method="post" encType="multipart/form-data" id="formm" role="form"> 
                                                                    <div className="col-sm-12 customer-login"> 
                                                                        <div className="well"> 
                                                                            <h2 style={{fontFamily: "Montserrat", fontWeight: 700}}><i className="fa fa-file-alt" aria-hidden="true"></i> Returning Visitor</h2> 
                                                                            <p><strong style={{fontFamily: "Montserrat", fontSize:"16px"}}>I am a returning customer</strong></p> 
                                                                            <div className="form-group"> 
                                                                                <label className="control-label " for="input-email" style={{fontFamily: "Montserrat"}}>E-Mail Address</label>                                                                                 
                                                                                <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required="" autofocus=""/> 
                                                                            </div>                                                                             
                                                                            <div className="form-group"> 
                                                                                <label className="control-label " for="input-password" style={{fontFamily: "Montserrat"}}>Password</label>                                                                                 
                                                                                <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" required=""/> 
                                                                            </div>                                                                             
                                                                        </div>                                                                         
                                                                        <div className="bottom-form"> 
                                                                            <a href="#" className="forgot" style={{fontFamily: "Montserrat"}}>Forgotten Password</a> 
                                                                            <input type="submit" value="Login" className="btn btn-default pull-right" style={{fontFamily: "Montserrat"}} onClick={this.login}/> 
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
                    </div>
                </div>                 
            </div>:<div className="message-main">
            <h1>You have logged in!</h1>
        </div>
            }</div>
        )
    }
}
export default Login;