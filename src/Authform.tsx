import React, {useState} from "react";

import { useFormik } from "formik";
import { signUpSchema } from "./YupValidation";
import { error } from "console";
export default function Authform(){
    



    const[isLogin,setIsLogin]=useState(true);

// formik
    interface FormValues {
        name: string;
        email: string;
        password:string;
        confirmpassword:string;
      }
    const initialValues: FormValues = {
        name: "",  
        email: "",
        password:"",
        confirmpassword:"" 

      };
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik<FormValues>({
        initialValues,
        validationSchema:signUpSchema,
        onSubmit: (values,action) => {
          console.log(values);
          action.resetForm();
        },
      });
      console.log(errors);
// formik




    return(
        <div className="container">

            <div className="form-container">
                <div className="form-toggle">
                <button className={isLogin? 'active':""}onClick={()=>setIsLogin(true)}>Login</button>
                <button className={!isLogin?'active':""}onClick={()=>setIsLogin(false)}>Signup</button>
                </div>
                {isLogin? <>

                    <form onSubmit={handleSubmit}>
                <div className="form">
                
                    <h2>Login Form</h2>
                    { errors.email && touched.email?<p className="form-error">{errors.email}</p>:""}
                    <input type="email" placeholder="Email"/>
                   
                    { errors.password && touched.password?<p className="form-error">{errors.password}</p>:""}
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot Password</a>
                    <button>Login</button>
                    <p  className="p">New Member? <a href="#" onClick={()=>setIsLogin(false)}>Signup now</a></p>
                    
                </div>
                </form> 
                </>: <>
                <form onSubmit={handleSubmit}>
                <div className="form">
                
                    <h2>Sign up Form</h2>

                    <div className="formgroup"> 
                    { errors.name && touched.name?<p className="form-error">{errors.name}</p>:""}
                    <input type="text" placeholder="Name" name="name" value={values.name} onChange={handleChange}onBlur={handleBlur}/>
                    </div>

                    { errors.email && touched.email?<p className="form-error">{errors.email}</p>:""}
                    <input type="email" placeholder="Email" name="email" value={values.email} onChange={handleChange}onBlur={handleBlur}/>
                    { errors.password && touched.password?<p className="form-error">{errors.password}</p>:""}
                    <input type="password" placeholder="Password" name="password"  value={values.password} onChange={handleChange}onBlur={handleBlur}/>

                    { errors.confirmpassword && touched.confirmpassword?<p className="form-error">{errors.confirmpassword}</p>:""}
                    <input type="password" placeholder="Confirm Password" name="confirmpassword"  value={values.confirmpassword} onChange={handleChange}onBlur={handleBlur} />
                   
                    <button type="submit">Signup</button>
                    <p className="p">Aldready a member? <a href="#" onClick={()=>setIsLogin(true)}>Login now</a></p>
               
                
                </div>
                </form>
                </>
                }

            </div>

        </div>
    )
}