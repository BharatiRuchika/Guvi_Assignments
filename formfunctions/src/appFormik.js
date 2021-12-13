import {Formik,Form,Field,ErrorMessage} from "formik";
const validateEmail = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
function appformik(){
    return(
    <Formik initialValues={{
        fullName:"",
        email:""
    }}
    validate={(values)=>{
      console.log(values);
      const errors={};
      if(values.fullName.length<=5){
        errors.fullName = "full name should be atleast 5 characters";
      }else
      if(values.email.length<=5){
        errors.email = "email should be atleast 5 characters";
      }else
      if(!validateEmail.test(values.email)){
        errors.email = "email is invalid";
      }

       return errors;
    }} 
    onSubmit={(values)=>{
      console.log("form submitted");
      console.log(values);
    }}>
    {
        ({values,errors}) =>{
            return(<>
             <p>My Form</p>
           <Form>
              <div>
                <label>FullName</label>
                {/* <input type="text" name="fullName" value={values.fullName} onChange={handleChange}/> */}
                <Field type="text" name="fullName" ></Field>
              </div>
              {/* <span>{errors.fullName}</span> */}
              <ErrorMessage name="fullName"/>
              <br></br>
              <div>
                <label>Email</label>
                {/* <input type="email" name="email" value={values.email} onChange={handleChange}/> */}
              <Field type="email" name="email"></Field>
              </div>
              {/* <span>{errors.email}</span> */}
              <ErrorMessage name="email"/>
              <div>
                <button type="submit">Submit</button>
              </div>
              </Form>
              </>)
        }
    }
    </Formik>
    )
}
export default appformik;