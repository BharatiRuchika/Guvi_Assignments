import React, { Component } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import reactDom from "react-dom";
class PostApp extends Component{
    constructor(props){
        // console.log(this.props);
        super(props);
        this.state = {
            posts : [],
            id : "",
            userId:"",
            body:"",
            title:""
        };
    }
    getPost = async()=>{
        try{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
            //    const data = await response.json();
               console.log(data);
               this.setState({posts:data})
        }catch(error){
          console.error("Error fetching data from server",error);
        }
       
    }
    createPost = async() =>{
     console.log(this.state);
     try{
        const {userId,title,body} = this.state;
        const {data:post} = await axios.post("https://jsonplaceholder.typicode.com/posts",{
            userId,
            title,
            body
        });
        console.log(post);
        let posts = [...this.state.posts];
        posts.push(post);
        this.setState({posts,userId:"",title:"",body:""});
     }catch(err){
         console.log("creating data",err);
         
     }
    }
    updatePost = async()=>{
    //   console.log(postId);
    try{
      const {id,userId,title,body} = this.state;
      console.log("id",id);
      console.log("userId",userId);
      const {data:post} = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
          userId,
          title,
          body
      });
      console.log(post);
      const posts = [...this.state.posts];
      const index= posts.findIndex((post)=>post.id===id);
      posts[index] = post;
      this.setState({posts,id:"",userId:"",title:"",body:""});
      console.log(index);
    }catch(err){
      console.log("error in update",err);
    }
    }
    selectPostToUpdate = (post)=> {
        console.log("post",post);
        this.setState({...post});
    }
   
    deletePost = async(postId) => {
       console.log("postId" +postId);
       try{
          await `https://jsonplaceholder.typicode.com/posts/${postId}`;
          console.log(`${postId} deleted`);
          let posts=[...this.state.posts];
          posts = posts.filter((post)=>post.id!==postId)
          this.setState({posts});
       }catch(err){
        console.log("error in deleteing the data",err);
       }
    }
    componentDidMount(){
        this.getPost();
    }
    handleSubmit = (e) => {
      e.preventDefault();
      if(this.state.id){
        this.updatePost();
      }else{
        this.createPost();
    }
}
    handleChange = ({target:{name,value}})=>{
      this.setState({[name]:value});
    };
render(){
  return (<>
  <form onSubmit={this.handleSubmit}>
      <div>
      <label>UserId</label>
      <input type="text" name="userId" onChange={this.handleChange} value={this.state.userId}></input>
      </div>
      <br/>
      <div>
      <label>Title</label>
      <input type="text" name="title" onChange={this.handleChange} value={this.state.title}></input>
      </div>
      <br/>
       <div>
      <label>Body</label>
      <input type="text" name="body" onChange={this.handleChange} value={this.state.body}></input>
      </div>
      <br/>
     
      <div>
      <button type="submit">Submit</button>
      </div>

  </form>
  <br/>
  <Table striped bordered hover>
  <thead>
      <tr>
         
      <th>postId</th>
      <th>userId</th>
      <th>Title</th>
      <th>Body</th>
      <th>Actions</th>
     
      </tr>
      </thead>
      <tbody>
      {this.state.posts.map((post)=>{
         
          return(<tr>
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><button onClick={()=>{this.selectPostToUpdate(post)}}>Update</button></td>
              <td><button onClick={()=>{this.deletePost(post.id)}}>Delete</button></td>
              </tr>)
             
      })}
       </tbody>
     
      </Table></>);
}
}
export default PostApp;