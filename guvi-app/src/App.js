import React,{Component} from "react";
import reactDom from "react-dom";
import AppFunc from "./App_functional";
import {Formik} from "formik";
const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class App extends Component{
    constructor(props){
        super(props);
        // console.log(this.props);
        this.state = {
            FullName : "",
            Email : "",
            Role : "mern",
            coverletter : "",
            gender:"female",
            termsnconditios : true,
            errors:{
                FullName : "",
                Email : "",
                coverletter : "",
                termsnconditios : ""
            }
        };
    }
    handleChange=({target:{name,value,type,checked}})=>{
        console.log(name,value);
        if(type=="checkbox")value=checked;
       
        const errors = this.state.errors;
        switch(name){
            case "FullName":{
              if(value.length<=5){
                  errors.FullName = "Full name should be atleast 6 characters";
              }else{
                  errors.FullName = "";
              }
              break;
            }
            case "coverletter":{
                if(value.length<=9){
                    errors.coverletter = "coverletter should be atleast 9 characters";
                }else{
                    errors.coverletter="";
                }
                break;
            }
            case "termsnconditios":{
                if(!value){
                    errors.termsnconditios = "Terms should be acepted";
                }else{
                    errors.termsnconditios = "";
                }
                break;
            }
            case "Email":{
               if(value.length<=5){
                   errors.Email = "email should be atlest 6 characters";
               }else if(!validateEmail.test(value)){
                   errors.Email = "email is incorrect";
               }else{
                   errors.Email="";
               }
               break;
            }

        }
        console.log(errors);
        this.setState({[name]:value,errors});
        // if(errors.FullName.length<5){

        // }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
       
    }
    // handleCount = (type) =>{
    //    if(type=="INCREMENT"){
    //      this.setState({count:this.state.count+1})
    //    }else if(type=="DECREMENT"){
    //      this.setState({count:this.state.count-1})
    //    }else{
    //       this.setState({count:0})
    //    }
    // }
    // increment=()=>{
    //    console.log("function call");
    //    this.setState({count:this.state.count+1});
    // }
    // decrement=()=>{
    //   this.setState({
    //       count:this.state.count-1
    //   })
    // }
    // reset=()=>{
    //   this.setState({count:0})
    // }
    render(){
        // return <><p>Hello {this.props.address.name}</p><p>{this.state.count}</p>
        // <button onClick={()=>this.handleCount("INCREMENT")}>Increment</button> 
        // <button onClick={()=>this.handleCount("DECREMENT")}>Decrement</button>
        // <button onClick={()=>this.handleCount("RESET")}>Reset</button>

        // <AppFunc/></>
        return <><form onSubmit={this.handleSubmit}>
            <div>
             <label>Full Name:</label>
             <input type="text" name="FullName" value={this.state.FullName} onChange={this.handleChange}></input> 
              <span>{this.state.errors.FullName}</span>
            </div> 
            <br></br> 
            
            <div>
            <label>Email Id:</label>
            <input type="email" name="Email" value={this.state.Email}
            onChange={this.handleChange}></input>
           <span>{this.state.errors.Email}</span>
            </div>
            <br></br> 
            <div>
                <label>Role Applied for:</label>
                <select value={this.state.Role} onChange={this.handleChange} name="Role">
                    <option value="react">React Developer</option>
                    <option value="mern">Mern Developer</option>
                    <option value="java">Java Developer</option>
                </select>
            </div>
            <div>
                <label>Gender:</label>
                <input name="gender" type="radio" value="male" onChange={this.handleChange} checked={this.state.gender === "male"}></input>
                <label>Male</label>
                <input type="radio" name="gender" value="female" onChange={this.handleChange} checked={this.state.gender === "female"}></input>
                <label>Female</label>
                <input type="radio" name="gender" onChange={this.handleChange} value="other" checked={this.state.gender === "other"}></input>
                <label>Other</label>
            </div>
            <br></br> 
            <div>
                <label>Cover Letter:</label>
                <input type="textarea" name="coverletter" value={this.state.coverletter} onChange={this.handleChange} ></input>
              <span>{this.state.errors.coverletter}</span>
            </div>
            <br></br> 
            <div>
            <input type="checkbox" name="termsnconditios" checked={this.state.termsnconditios} onChange={this.handleChange}></input>
            <label>I agree to terms and conditions</label>
            <span>{this.state.errors.termsnconditios}</span></div>
            <br></br>
            <div><button type="submit">Submit</button></div>
        </form></>
    }
}
export default App;