// import { Component } from "react";
import reactDom from "react-dom";
import React,{Component} from "react";
// import 'bootstrap/css/bootstrap.min.css';
// import {Table} from "react-bootstrap"; 
import { Table } from "react-bootstrap";
import App from "./App";
import Appwrapper from "./Appwrapper"
import AppFormik from "./Appformik";
import AppFunc from "./App_functional";
import PostApp from "./postAppFunction";
import Counter from "./Counter";
const students = [1,2,3,4,5,6,7];
// class App extends Component{
//     render(){
//         return <p>Hello test</p>
//     }
// }
// reactDom.render(
//     <p>Hello {students.map((st)=>
//     st*2)}</p>,document.getElementById("root")
// )
// reactDom.render(<App name={"Guvi"} age={25} students={[1,2,3,4,5]} address={{name:"test"}} active={true}/>,document.getElementById("root"));
function Test(){
    const [show,setShow] = React.useState(true);
    return (<>
     
        <button onClick={()=>{
            setShow(!show)}}>Hide/Show</button>
        {show ? <Counter/> : <></>}
        </>) ;
}   
    


reactDom.render(<PostApp/>,document.getElementById("root"))