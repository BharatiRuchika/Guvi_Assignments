import React,{Component} from "react";
import reactDom from "react-dom";
import wrapper from "./wrapper";
class Appwrapper extends Component{
    render(){
        console.log(this.props);
        return (<><p>Hello Guvi</p></>);
    }
}
export default wrapper(Appwrapper);