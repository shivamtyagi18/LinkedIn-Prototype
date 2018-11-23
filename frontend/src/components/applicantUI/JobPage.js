import React, {Component} from 'react';
import '../../App.css';
import axios from 'axios';
import cookie from 'react-cookies';
import {Redirect} from 'react-router';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';
//import Footbar from '../LandingPage/Footbar';
import { isMoment } from 'moment';
import { format } from 'util';
//import NavbarResult from '../LandingPage/NavbarResult';
import ReactDOM from "react-dom";
//import Inbox from '../User/inbox';

// import { sendMessage } from "../../actions";
// import { fetchMessage } from "../../actions";
import { connect } from "react-redux";
import _ from "lodash";

const ROOT_URL = "http://localhost:3001";
var moment = require("moment");



class Property extends Component {

    constructor(props){
        super(props);
        this.state = {  
            Properties : [],
            authFlag : false,
            bookFlag : false,
            imageView : [],
            propertyname : "",
            location : "",
            checkin : "",
            checkout : "",
            guests :"",
            total :"",
            sender:localStorage.getItem("email"),
            message : "",
            description: '',
            selectedFile: '',
            message : "",
            messageFlag:""
        }
        this.book = this.book.bind(this);
        this.checkinChangeHandler = this.checkinChangeHandler.bind(this);
        this.checkoutChangeHandler = this.checkoutChangeHandler.bind(this);
        this.guestsChangeHandler = this.guestsChangeHandler.bind(this);
        this.totalChangeHandler = this.totalChangeHandler.bind(this);
       // this.sendMessageHandler = this.sendMessageHandler.bind(this);
       // this.openInbox = this.openInbox.bind(this);
        
    } 
    
    componentDidMount(){

        this.setState({
            authFlag : false,
        });

        const data = {
            propertyname : this.props.location.state.displayprops,
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        console.log("propertyname :",data)
        //make a post request with the user data
        
        axios.post(`${ROOT_URL}/displayprop`,data)
        .then(response => {
            console.log("Status Code : ",response.status);
            console.log("propertyname :",response.data)
            if(response.status === 200){
                this.setState({
                    authFlag : true,
                    Properties : response.data,
                })
            }else{
                this.setState({
                    authFlag : false,
                    message : "User Already Exist "
                })
            }
        });
                   // window.location.reload(1);
                console.log(this.state.Properties)
        
    }

    checkinChangeHandler = (e) => {
        this.setState({
            checkin : e.target.value
        })
    }

    checkoutChangeHandler = (e) => {
        this.setState({
            checkout : e.target.value
        })
    }

    guestsChangeHandler = (e) => {
        this.setState({
            guests : e.target.value
        })
    }

    totalChangeHandler = (e) => {
        this.setState({
            total : e.target.value
        })
    }

    messageChangeHandler = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    sendMessageHandler = (e) => {
        let data;
        if(this.props.message.sender!=="sender" && this.props.message.sender!=="No Query"){
             data = {
                sender : this.state.sender,
                receiver : this.props.message.sender,
                message : this.state.message,
                time : Date(), 
                property : this.props.location.state.displayprops
            } 
        } 
        else{
             data = {
                sender : this.state.sender,
                receiver : this.state.Properties[0].owner,
                message : this.state.message,
                time : Date(), 
                property : this.props.location.state.displayprops
            } 
        }
        console.log("message details",data)
        this.props.sendMessage(data, () => {
            //this.props.history.push("/home");
             //refreshes the page so redux state is lost
            console.log("tested")
            window.alert("Message sent succesfully")
          });
    }

    openInbox(){
        const data = {
            receiver : localStorage.getItem("email"),
            property : this.props.location.state.displayprops,
        } 
        console.log("message details",data)
        this.props.fetchMessage(data, () => {
            //this.props.history.push("/home");
             //refreshes the page so redux state is lost
            console.log("props",this.props.message)
          });             
    }

    book = (e) => {
        var headers = new Headers();
        //const { description, selectedFile } = this.state;
        console.log("inside booking request")
        let formData = new FormData();
        //prevent page from refresh
        e.preventDefault();

        if(!this.state.checkin || !this.state.checkout || !this.state.guests){
            window.alert("Enter all fields")
        }else{
            const data = {
                propertyname : this.props.location.state.displayprops,
                //propertyname : this.state.propertyname,
                checkin : this.state.checkin,
                checkout : this.state.checkout,
                guests : this.state.guests,
                total : this.state.total,
                customer : this.state.sender,
                owner : this.state.Properties[0].owner,
                img : this.state.Properties[0].img,
                description : this.state.description,
                selectedFile : this.state.selectedFile
            }
            formData.append('description',data.description);
            formData.append('selectedFile',data.selectedFile);
            formData.append('propertyname',data.propertyname);
            console.log("inside booking request",data)
            //set the with credentials to true
            axios.defaults.withCredentials = true;
            //make a post request with the user data
            axios.post(`${ROOT_URL}/booking1`,data)
                .then(response => {
                    console.log("Status Code : ",response.status);
                    if(response.status === 200){
                        this.setState({
                            bookFlag : true,
                            message : "Congratulations! Successfully booked"
                        })
                        axios.post(`${ROOT_URL}/image`, formData)
                        .then((result) => {
                          // access results...
                        });
                    }else{
                        this.setState({
                            authFlag : false,
                            message : "User Already Exist "
                        })
                    }
                });
        }
        
    }

    render(){
        let redirectVar = null; 
        let nav = <Navbar navdata={this.props.navdata}/>
       // let foot = <Footbar footrender={this.props.footrender}/>
        //let inbox = <Inbox inboxrender={this.props.inboxrender}/>

        var date=moment().toDate();
        date = moment(date).format("YYYY-MM-DD");
        var tempout = new Date(this.state.checkout)
        var outdate = tempout.getDate()+1
        var tempin = new Date(this.state.checkin)
        var indate= tempin.getDate()+1
        if(indate && outdate)
            var days = outdate-indate;
        else
            days = 0;

        let errcheckin = null;
        let errcheckout = null;
        let errguests = null;
        if(this.state.checkout!="" && this.state.checkout<this.state.checkin)  {
            errcheckout = <p style={{fontSize:"16px",backgroundColor:"red"}}>Invalid checkout date</p>
        }  
        if(this.state.checkin!="" && this.state.checkin<date)  {
            errcheckin = <p style={{fontSize:"16px",backgroundColor:"red"}}>Invalid checkin date</p>
        }
        if(!this.state.checkin)  {
            errcheckin = <p style={{fontSize:"16px",backgroundColor:"lightblue"}}>Enter checkin date</p>
        }
        if(!this.state.checkout)  {
            errcheckout = <p style={{fontSize:"16px",backgroundColor:"lightblue"}}>Enter checkout date</p>
        }
        if(!this.state.guests)  {
            errguests = <p style={{fontSize:"16px",backgroundColor:"lightblue"}}>Enter guests</p>
        }
        // moment("2018-05-18T04:00:00.000Z").format('DD MMM, YYYY');
        //var indate = this.state.checkin
       // var outdate = Moment(this.state.checkout)
        //let days =  outdate - indate
        console.log("bookFlag" ,this.state.bookFlag);
        
        if(this.state.bookFlag && localStorage.getItem("email")){
            redirectVar = <Redirect to= "/booking"/>
        }else if (!localStorage.getItem("email")){
            redirectVar = <Redirect to= "/login"/>
        }
        
        // let messages = this.props.message.map(message => {
        //     //const imgurl = require(`../Images/bkg.png`);
        //     console.log("messages",message)
        //     return(
        //         <div>
        //             <div>
        //             <input style={{height:"100px",width:"100%",backgroundColor:"white",fontSize:"18px",fontWeight:"400",borderRadius:"20px"}} type="text" class="form-control" name="inbox" placeholder="Received Messages"  value={message.sender +" : "+message.message}/>
        //             </div>
        //             <button type="button" className="btn-danger" style={{borderRadius:"20px",backgroundColor:"#0067db",borderColor:"blue"}} onClick={this.openInbox}> Open Message </button><br></br><br></br>
        //             <div>
        //             <input style={{height:"100px",width:"100%",backgroundColor:"white",fontSize:"18px",fontWeight:"400",borderRadius:"20px"}} onChange = {this.messageChangeHandler} type="text" class="form-control" name="about" placeholder="Reply here" value={this.state.message}/>
        //             </div>
        //             <button type="button" className="btn-primary" style={{borderRadius:"20px",backgroundColor:"#0067db",borderColor:"blue"}} onClick={this.sendMessageHandler}> Send Message </button><br></br>
        //         </div>  
        //             )
        // })
            
        
        
        

        console.log("state transfer" ,this.props.location.state.displayprops);
        let details = this.state.Properties.map(property => {
             
            return(
        <div style={{backgroundColor:"#eee"}}>
                <div style={{height:"60px",backgroundColor:"white",fontSize:"2rem",fontFamily:"Lato, Roboto !important",marginTop:"30px",marginBottom:"30px"}}>
                <h2>{property.name}</h2>
                </div>
            <div class="row main-div-search1">
            <div class="col-sm-2" style={{fontSize:"22px",fontWeight:"bold"}}>Details</div>
                <div class="col-sm-10">
                <div class="col-sm-2" ><div class="col-sm-12" style={{fontSize:"19px",textAlign:"left"}}>Location</div><div class="col-sm-12" style={{fontSize:"26px",fontWeight:"500",textAlign:"left"}}>{property.location}</div></div>
                <div class="col-sm-2"  style={{fontSize:"19px",textAlign:"center"}}><div class="col-sm-12">Sleeps</div><div class="col-sm-12" style={{fontSize:"26px",fontWeight:"500",textAlign:"center"}}>{property.guests}</div></div>
                <div class="col-sm-2"  style={{fontSize:"19px",textAlign:"center"}}><div class="col-sm-12">Bedrooms</div><div class="col-sm-12" style={{fontSize:"26px",fontWeight:"500",textAlign:"center"}}>{property.bedroom}</div></div>
                <div class="col-sm-2"  style={{fontSize:"19px",textAlign:"center"}}><div class="col-sm-12">Bathrooms</div><div class="col-sm-12" style={{fontSize:"26px",fontWeight:"500",textAlign:"center"}}>{property.bathroom}</div></div>
                <div class="col-sm-4"  style={{fontSize:"19px",textAlign:"center"}}><div class="col-sm-12">Minimum Stay</div><div class="col-sm-12" style={{fontSize:"26px",fontWeight:"500",textAlign:"center"}}>{property.minstay}</div></div>
                </div>
            </div>
                

                <div class="row main-div-search1">
                <div class="col-sm-2" style={{fontSize:"22px",fontWeight:"bold"}}>About the Property</div>
                <div class="col-sm-10">
                <div class="col-sm-10" style={{fontSize:"17px",fontWeight:"300"}}>
                There are {property.bedroom} bedrooms downstairs One bedroom has a King Bed Second bedroom has a Queen Bed The last bedroom has 2 Full Size Beds
                We speak both English and Chinese
                Convenient location:
                    3 miles to SFO airport. (Airport easily visible on view)
                    1 Mile to Downtown Millbrae Restaurant
                    15 miles to Downtown SF
                    18 miles to Pier 39 & Golden Gate Bridge
                </div>
                </div>
                </div>

                <div class="row main-div-search1">
                <div class="col-sm-2" style={{fontSize:"22px",fontWeight:"bold"}}>Owner</div>
                <div class="col-sm-10">
                <div class="col-sm-10" style={{fontSize:"17px",fontWeight:"300"}}>
                {property.owner}<br></br>
                <div>
                <input style={{height:"100px",width:"100%",backgroundColor:"white",fontSize:"18px",fontWeight:"400",borderRadius:"20px"}} type="text" class="form-control" name="inbox" placeholder="Received Messages"  value={this.props.message.sender +" : "+this.props.message.message}/>
                </div>
                <button type="button" className="btn-danger" style={{borderRadius:"20px",backgroundColor:"#0067db",borderColor:"blue"}} onClick={this.openInbox}> Open Message </button><br></br><br></br>
                <div>
                <input style={{height:"100px",width:"100%",backgroundColor:"white",fontSize:"18px",fontWeight:"400",borderRadius:"20px"}} onChange = {this.messageChangeHandler} type="text" class="form-control" name="about" placeholder="Reply here" value={this.state.message}/>
                </div>
                <button type="button" className="btn-primary" style={{borderRadius:"20px",backgroundColor:"#0067db",borderColor:"blue"}} onClick={this.sendMessageHandler}> Send Message </button><br></br><br></br>
                </div>
                </div>
                </div>

                <div class="row main-div-search1">
                <div class="col-sm-2" style={{fontSize:"22px",fontWeight:"bold"}}>Amenities</div>
                <div class="col-sm-10">
                <div class="col-sm-10" style={{fontSize:"17px",fontWeight:"300"}}>
                Bedrooms {property.bedroom}<br></br>
                Bathrooms {property.bathroom}<br></br>
                Capacity {property.guests}
                </div>
                </div>
                </div>

        </div>
    
            )
        })



        let image = this.state.Properties.map(property => {
            //const imgurl = require(`../Images/bkg.png`);
           // const imgurl1 = require(`../uploads/${property.img}`);
            const imgurl2 = `https://s3.us-east-2.amazonaws.com/homeawayuploads/${property.img}`;
            return(
                <div>
                <div><img src={imgurl2} width="100%"></img></div>
                </div>
            )
        })

        let price = this.state.Properties.map(property => {
            return(
                <h3 style={{marginTop:"10px",marginLeft:"12px"}}>${property.price} per night</h3>
            )
        })

        let total = this.state.Properties.map(property => {
            var finalprice;
            if(days===NaN){
              finalprice=0  
            }else{
                finalprice=days*property.price;
            }
            this.state.total=finalprice;
            return(
                <h3 style={{marginTop:"10px"}}>Total : ${finalprice}</h3>
                
            )
        })



        console.log("details",this.state.total)
           
        return(
            //<input style={{height:"60px",backgroundColor:"white",fontSize:"18px"}} onChange = {this.totalChangeHandler} type="Number" class="form-control" name="total" placeholder={this.state.total} value={this.state.total}/>
            <div>
                {redirectVar}
                {nav}

                <div class="main-div-book col-sm-8" style={{marginLeft:"30px"}}>
                    <div>
                        {image}       
                    </div>
                    <div >
                            <tbody>
                                {/*Display the Tbale row based on data recieved*/}
                                {details}
                            </tbody>
                            
                    </div> 
                </div>

                <div class="main-div-book col-sm-3" style={{marginLeft:"30px",marginTop:"100px",backgroundColor:"#eee"}}>
                    {price}
                        <div class="table-col">
                            <div class="col-sm-6">
                                <input style={{height:"60px",backgroundColor:"white",fontSize:"18px"}} onChange = {this.checkinChangeHandler} type="Date" class="form-control" name="checkin" placeholder="Check In" required/>
                                {errcheckin}
                            </div>

                            <div class="col-sm-6">
                                <input style={{height:"60px",backgroundColor:"white",fontSize:"18px"}} onChange = {this.checkoutChangeHandler} type="Date" class="form-control" name="checkout" placeholder="Check Out" required/>
                                {errcheckout}
                            </div>
                        </div> <br></br>
                        <div class="col-sm-12">
                                <input style={{height:"60px",backgroundColor:"white",fontSize:"18px"}} onChange = {this.guestsChangeHandler} type="Number" class="form-control" name="guests" placeholder="Guests" required/>
                                {errguests}
                        </div><br></br>
                       
                        <div style={{marginTop:"60px"}}>

                            <div class="col-sm-12">
                                <button onClick = {this.book} style={{backgroundColor:"#0067db",borderColor:"#0067db",fontSize:"18px"}} class="btn btn-primary button-search">Request to Book</button>
                            </div>

                            <div class="col-sm-12" style={{textAlign:"right"}}>
                                {total}
                            </div><br></br>
                        
                        </div>
                        
                        <div class="col-sm-12" style={{marginTop:"80px"}}> 
                            <p style={{color:"black",fontSize:"15px",textAlign:"center"}}><strong>Book Online</strong> or call HomeAway Booking Assistance <strong>888-829-7076</strong></p>
                        </div>
                        
                </div> 
                </div>

            
        )
    
}
}

//export Home Component
// function mapStateToProps(state) {
//     return { property: state.property };
//   }

// function mapStateToProps(state) {
//     return { message: state.message };
//   }
  
//   export default connect(mapStateToProps, { fetchMessage, sendMessage })(Property);
export default Property;