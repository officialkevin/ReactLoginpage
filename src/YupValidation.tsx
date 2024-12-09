import * as Yup from "yup";

export const signUpSchema= Yup.object({
 
    name:Yup.string().min(2).max(25).required("please enter your name"),
    email:Yup.string().email().required("please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
    confirmpassword:Yup.string().oneOf([Yup.ref("password")],"Password not match").required("conform password is required")

});