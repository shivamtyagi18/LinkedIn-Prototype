import React, { Component } from "react";

import cookie from "react-cookies";
import { Redirect } from "react-router";
import "../../App.css";
import Navbar1 from "./Navbar1";
import axios from "axios";
import __ from "lodash";

class ReceiverInbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authFlag: false,
      messages: [],
      reply: "",
      messageFlag: false
    };
  }

  replyChangeHandler = e => {
    this.setState({
      message: e.target.value
    });
  };

  componentWillMount() {
    this.setState({
      authFlag: false
    });
    const data = {
      receiveremail: localStorage.getItem("email")
    };
    console.log(data);
    if (localStorage.getItem("email")) {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3001/applicant/profile/receiverInbox", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.data.code == 200) {
            this.setState({
              authflag: true,
              messages: response.data.value //propArray: response.data
            });
          } else {
            this.setState({
              authFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ authFlag: false });
          console.log(err);
        });
    } else {
      this.setState({
        authflag: false
      });
    }
  }

  handleChange = e => {
    this.setState({
      receiveremail: e.target.getAttribute("data-value1")
    });
  };

  sendMessage = senderemail => {
    const data = {
      senderemail: localStorage.getItem("email"),

      message: this.state.message,
      receiveremail: this.state.receiveremail
    };
    console.log(data);
    if (localStorage.getItem("email")) {
      axios.defaults.withCredentials = true;
      axios
        .post("http://localhost:3001/applicant/profile/messagefromsender", data)
        .then(response => {
          console.log("Status Code : ", response.status);
          console.log(response.data);
          if (response.data.code == 200) {
            this.setState({
              messageFlag: true
              //propArray: response.data
            });
          } else {
            this.setState({
              messageFlag: false
            });
          }
        })
        .catch(err => {
          this.setState({ messageFlag: false });
          console.log(err);
        });
    } else {
      this.setState({
        check: true
      });
    }
  };

  componentDidMount() {}

  render() {
    var redirect = null;
    // if (!localStorage.getItem("type")) {
    //   redirect = <Redirect to="/login" />;
    // }

    if (this.state.messageFlag) {
      window.alert("Message sent successfully");
      this.state.messageFlag = false;
    }
    let message1 = Object.keys(this.state.messages).map(
      message => this.state.messages[message]
    );
    console.log(message1);
    let inbox = message1.map(message => {
      const senderemail = message.senderemail;
      const receiveremail = message.receiveremail;
      console.log(message.senderemail);
      console.log("test");
      console.log(message.receiveremail);
      return (
        <div class="askbutton " style={{ width: "30%", marginLeft: "500px" }}>
          <h5 style={{ marginTop: "40px", textAlign: "center" }}>
            Message from <strong>{message.senderemail}</strong>
          </h5>
          <textarea
            type="text"
            className="messageText"
            name="message"
            id="message"
            value={message.message}
            //onChange={this.replyChangeHandler}
            style={{
              width: "400px",
              height: "200px"
            }}
          />
          <button
            type="button"
            class="btn-primary btn-lg  "
            data-toggle="modal"
            data-target="#inboxModal"
            data-value1={message.senderemail}
            data-value={message.receiveremail}
            onClick={this.handleChange}
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              marginLeft: "35%"
            }}
          >
            Reply
          </button>

          <div
            class="modal fade"
            id="inboxModal"
            role="dialog"
            position="relative"
            tabIndex="-1"
          >
            <div
              class="modal-dialog modal-dialog-centered"
              role="document"
              position="relative"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal">
                    &times;
                  </button>
                  <h4 class="modal-title">Send your reply </h4>
                </div>
                <div class="modal-body">
                  <div class="travelerinbox-area">
                    <textarea
                      type="text"
                      className="messageText"
                      name="message"
                      id="message"
                      onChange={this.replyChangeHandler}
                      style={{ width: "500px", height: "200px" }}
                    />
                  </div>
                </div>
                <div class="modal-footer" style={{ textAlign: "center" }}>
                  <button
                    type="button"
                    class="askbtn1 btn-sm"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    class="askbtn1 btn-sm"
                    data-dismiss="modal"
                    onClick={() => this.sendMessage(senderemail, receiveremail)}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
    //  renderMessages(){
    //   var messages = Object.keys(this.state.messages)
    //   return messages.map(message => {
    //     return
    //   })

    //  }

    return (
      <React.Fragment>
        {redirect}
        <div>
          <Navbar1 navdata={this.props.navdata} />
        </div>
        <div style={{ backgroundColor: "silver" }}>
          <div style={{ textAlign: "center", fontSize: "30px" }}>
            Welcome, {localStorage.getItem("email")}
          </div>
          {inbox}
        </div>
      </React.Fragment>
    );
  }
}

export default ReceiverInbox;