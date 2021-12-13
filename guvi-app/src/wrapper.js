function wrapper(Appwrapper){
    return (props)=>{
        console.log(props);
        return (<div style={{border:"1px solid"}}>
             <Appwrapper {...props} age={23} roll={7836}/>
        </div>);
    }
}
export default wrapper;