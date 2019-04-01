import React, {Component} from 'react';
import '../header/header.css';
class Compare extends Component{

    addtowish(val){
        let {dispatch, wishList}=this.props;
        let wishLists=[...wishList];
        wishLists.push(val);
        dispatch({
            type:'wishList',
            payLoad: wishLists
        })
    }
    render(){
        let {rightcart}= this.props;
        let rightcarts=[...rightcart]
        return(
            <div class="content-main" style={{marginTop: "75px", marginBottom: "75px"}}> 
                <div class="main-container container">
                    <div class="row" style={{fontFamily: "Montserrat"}}>
                        <div id="content" class="col-sm-12">
                            <h2 class="title" style={{fontWeight: 600}}>Comparison</h2>
                            <div class="table-responsive">
                            {
                                            rightcarts && rightcarts.map((item,index)=>{
                                                return(
                                <table class="table table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <td colspan="4"><strong> Details</strong></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Product</td>
                                        {
                                            item.versions.map((items,index)=>{
                                                return(
                                                    <td>
                                                        <a href="product.html">{items.name}</a>
                                                    </td>
                                                )
                                            })
                                        }
                                        </tr>
                                        <tr>
                                            <td>Image</td>
                                            {
                                            item.versions.map((items,index)=>{
                                                return(
                                            <td class="text-center">
                                                <img class="img-thumbnail" title="Laptop Silver black" alt="Laptop Silver black" width="100px" src={require("../../images/demo/shop/product/"+ items.imageUrl)}/>
                                            </td>
                                         )
                                        })
                                             }   
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            {
                                            item.versions.map((items,index)=>{
                                                return(
                                            <td>
                                                <div class="price">
                                                    <span class="price-new">{items.price}</span> 
                                                </div>
                                            </td>
                                             )
                                            })
                                        }  
                                        </tr>
                                        <tr>
                                        <td>Availability</td>
                                        {
                                            item.versions.map((items,index)=>{
                                                return(
                                            <td>{items.availability}</td>
                                            )
                                            })
                                        }  
                                        </tr>
                                        <tr>
                                            <td>Summary</td>
                                            {
                                            item.versions.map((items,index)=>{
                                                return(
                                            <td class="description">{items.summary}</td>
                                            )
                                            })
                                        }  
                                            </tr>
                                    </tbody>
                                    <tbody>
                                        <tr>
                                            <td></td>
                                            {
                                            item.versions.map((items,index)=>{
                                                return(
                                            <td>
                                                <input type="button" onClick={()=> this.addtowish(items)} class="btn btn-primary btn-block" value="Add to Wishlist"/>
                                                {/* <a class="btn btn-danger btn-block" href="#">Remove</a> */}
                                            </td>
                                            )
                                        })
                                    }  
                                        </tr>
                                    </tbody>
                                </table>
                                )})
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <section class="so-spotlight7"> 
                    <div class="container"> 
                        <div class="row"> 
                            <div class="col-sm-12 col-xs-12"> 
                                <h4 class="modtitle4" style={{fontFamily: "Montserrat"}}>Personal Care happens by appointment</h4>
                                <h3 class="modtitle4" style={{fontFamily: "Montserrat"}}>It's time to feel like</h3> 
                                <div class="text"> 
                                    <p style={{fontSize: "141px", transform: "rotate(-4deg)", color: "#3300ff", marginTop: "62px"}} class="mrdafoe top40">Magic</p> 
                                </div>                                 
                                <div style={{textAlign: "center", marginTop: "116px"}}> 
                                    <button class="btn btn-default btn-lg" type="Book" name="book" style={{backgroundColor: "#222222", color: "#ffffff"}}>Book Now</button>                                     
                                </div>
                            </div>                             
                        </div>                         
                    </div>                     
                </section>
            </div>
        )
    }
}
export default Compare;