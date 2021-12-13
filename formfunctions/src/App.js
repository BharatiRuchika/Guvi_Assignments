import React from "react";
import ReactDom from "react-dom";
const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      fullName:"",
      Email:"",
      Role:"mern",
      CoverLetter:"",
      terms:true,
      errors:{
        fullName:"",
        Email:"",
        CoverLetter:"",
        terms:""
      }
    }
  }

  handleSubmit = (event)=>{
    console.log("Submitted");
    console.log(this.state);
    event.preventDefault();
  }
  handleChange = ({target:{name,value,type,checked}})=>{
    // console.log("im here");
    // console.log(event.target.name);
    // var name = event.target.name;
    if(type=="checkbox"){
      value=checked;
    }
    this.setState({[name]:value})
    const errors = this.state.errors;
    switch(name){
      case "fullName":{
        if(value.length<8){
          errors.fullName="Fullname should be atleast 8 characters";
        }else{
          errors.fullName="";
        }
        break;
    }
    case "Email":{
       if(value.length<=8){
         errors.Email="Email should be atleast 8 characters";
       }else{
         if(!validateEmail.test(value)){
           errors.Email="email is invalid";
         }else
         errors.Email="";
       }
       break;
    }
    case "CoverLetter":{
      if(value.length<=9){
        errors.CoverLetter = "coverletter should be ateast 9 characters";
      }else{
        errors.CoverLetter = "";
      }
    }
case "terms":{
  if(!value){
    errors.terms = "terms should be accepted";
  }else{
    errors.terms = "";
  }
}
    }
  }
  render(){
    return (
         <>
           <p>My Form</p>
           <form onSubmit={this.handleSubmit}>
              <div>
                <label>FullName</label>
                <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange}>
              {/* {(event)=>{ */}
                   {/* this.setState({fullName:event.target.value}) */}
                

                </input>

              </div>
              <span>{this.state.errors.fullName}</span>
              <br></br>
              <div>
                <label>Email</label>
                <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange}>
                {/* {(event)=>{ */}
                  {/* this.setState({Email:event.target.value}) */}
                {/* }}> */}

                </input>
              </div>
              <span>{this.state.errors.Email}</span>
              <br></br>
              <div>
                <label>Role Applied For</label>
                 <select value={this.state.Role} onChange={this.handleChange} name="Role">
                 {/* {(event)=>{ */}
                   {/* this.setState({Role:event.target.value}) */}
                 {/* }}>  */}
                   <option value="react">React</option>
                   <option value="mern">Mern</option>
                   <option value="node">nodejs</option>
                 </select>
              </div>
              <br></br>
              <div>
                <label>CoverLetter</label>
                <input type="textarea" value={this.state.CoverLetter} name="CoverLetter" onChange={this.handleChange}>
                {/* {(event)=>{ */}
                  {/* this.setState({CoverLetter:event.target.value}) */}
                {/* }}> */}
                </input>
              </div>
              <span>{this.state.errors.CoverLetter}</span>
              <br></br>
               <div>
               <input type="checkbox" checked={this.state.terms} name="terms" onChange={this.handleChange}>
               {/* {(event)=>{ */}
                 {/* this.setState({terms:event.target.checked}) */}
               {/* }}> */}

               </input>
                 <label>Terms & conditions</label>
                
               </div>
               <span>{this.state.errors.terms}</span>
               <br/>
               <div>
                 <button type="submit">Submit</button>
               </div>
           </form>
         </>
      );
  }
 
}

export default App;
