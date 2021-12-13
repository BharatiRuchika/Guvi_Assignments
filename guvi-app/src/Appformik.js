import { Formik,Form,Field,ErrorMessage } from "formik";
const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
function AppFormik(){
 return (<Formik initialValues={{
          FullName:"",
          Email:"",
 }}
  validate={(values)=>{
    console.log(values);
    const errors={};
    if(values.FullName.length<=5){
      errors.FullName="Fullname should be atleast 6 characters";
    }else if(values.Email.length<=5){
      errors.Email="Email should be atleast 6 characters";
    }else if(!validateEmail.test(values.Email)){
      errors.Email="Email is invalid";
    }
      return errors;
  }}
  onSubmit={(values)=>{
    console.log("form submited");
    console.log(values);
  }}>
  {({errors})=>{
      return( <><Form> <div>
        <label>Full Name:</label>
        <Field type="text" name="FullName"/>
         {/* <span>{errors.FullName}</span> */}
         <ErrorMessage name="FullName"/>
       </div> 
       <br></br> 
       
       <div>
       <label>Email Id:</label>
       <Field type="email" name="Email"/>
      {/* <span>{errors.Email}</span> */}
      <ErrorMessage name="Email"/>
       </div><div><button type="submit">Submit</button></div></Form></>)
  }}
 </Formik>
 )}
export default AppFormik;