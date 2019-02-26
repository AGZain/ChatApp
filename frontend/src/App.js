import React, { Component } from "react";
import axios from "axios"; 
import Sidebar from "react-sidebar";
import { Button, FormGroup, FormControl, ControllLabel } from "react-bootstrap"; 
import Login from './Login';
import "./assets/style.css";

var ScrollArea = require("react-scrollbar");

const login = {
  color:'green',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      data: '',
      sidebarOpen: true,
      loginImg: require("./assets/loginBtn.png"),
      isHovering: false
    }
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
  mouseOver(){
    this.setState(this.toggleHovering);
  }
  toggleHovering(){
    return{
      isHovering: !this.state.isHovering
    };
  }
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount = () => {
    console.log("mounted");
    fetch("http://localhost:3001/api/getData")
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
      this.setState({
        data:responseJson
      })
    })
    .catch((error) => {
          console.error(error);
       });
  }

  render() {
    return (
      <div>
      <Sidebar
        sidebar={ <b>Sidebar content</b> }
        open={ this.state.sidebarOpen }
        onSetOpen={ this.onSetSidebarOpen }
        styles={{ sidebar: { background: "white" } }}
      >
       {/* <div> info: hello { this.state.data.text } </div> */}
       <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>

      <div clasName="login" style={login}>
        <div>
          {/* <h1>{this.state.loginImg}</h1> */}
          <img src={this.state.loginImg}
            onMouseOver={()=>{
              // this.setState({
              //   loginImg: require("./assets/loginBtnDark.png")
              // }),
              this.mouseOver()

            }}
            onMouseOut={()=>{
              // this.setState({
              //   loginImg: require("./assets/loginBtn.png") 
              // }),
              // this.mouseOver()
            }}
          />
        </div>
        {
          this.state.isHovering &&
          <div>
            <Login/>
          </div>
        }
      </div>
      </div>
    );
  }
}
export default App;
