import '../styles/auth.css';
import { NavLink } from "react-router-dom";
import React from 'react';
export default function Register (){
        const signUp = async (e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault(); 
            var formEventData:HTMLFormControlsCollection = e.currentTarget.elements;
            var name = (formEventData[0] as HTMLInputElement).value; 
            var email = (formEventData[1] as HTMLInputElement).value;
            var password = (formEventData[2] as HTMLInputElement).value;
            var re_password = (formEventData[3] as HTMLInputElement).value;
            var url:RequestInfo = e.currentTarget.getAttribute('action') as RequestInfo;
            var response = await fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    name:name,
                    email:email,
                    password:password
                }),
                headers:{
                    "Content-Type": "Application/json"
                }
            })
            var data = await response.json();
            console.log(data);
        }
        return (
            <div className="auth-box">
                <form action="/api/auth/register" method="post" onSubmit={(e) => signUp(e)}>
                    <div className="form-entry-group">
                        <input type="text" name="name" id="name" placeholder="enter your name" required/>
                    </div>
                    <div className="form-entry-group">
                        <input type="email" name="email" id="email" placeholder="enter your email"  required/>
                    </div>
                    <div className="form-entry-group">
                        <input type="password" name="password" id="password" placeholder="enter your password" required/>
                    </div>
                    <div className="form-entry-group">
                        <input type="password" name="re_password" id="re_password" placeholder="confirm your password" required/>
                    </div>
                    <div className="form-entry-group">
                        <input type="submit" value="Register" />
                    </div>
                    <div className="links">
                        <NavLink to="/Login">Already have an Account?</NavLink>
                    </div>
                </form>
            </div>
        );
}