import React, { useEffect } from "react";
const countReducer = (count,action) => {
    console.log(count);
    console.log(action);
//   return 22;
switch(action){
    case "INCREMENT":{
      return count+1;
    }
    case "DECREMENT":{
      return count-1;
    }
    case "RESET":{
      return 0;
    }
    default:{
      return count;
    }
}
}
function Counter(){
    // const [state , setState] = React.useState({
    //    count : 22,
    //    name : "guvi"
    // })
    const [count,dispatch] = React.useReducer(countReducer,0);

 
    // const [count,setCount] = React.useState(10);
    // console.log(count);
    // console.log(setCount);
    const increment = () => {
        // setState({...state,count:state.count+1});
        dispatch("INCREMENT");
    }
    
    const decrement = ()=>{
        // setState({...state,count:state.count-1});
        dispatch("DECREMENT");
    }
    const reset = ()=>{
        // setState({...state,count:0});
        dispatch("RESET");
    }
    useEffect(()=>{
        console.log("useEffect1");
        return ()=>{
            console.log("useEffect4");
        }
    },[])
    return(<>
    <p>Count:{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
    {/* <p>{state.name}</p>
    <button onClick={()=>{setState({...state,name:"Tamil"})}}>Change</button> */}
    </>);
}
export default Counter;