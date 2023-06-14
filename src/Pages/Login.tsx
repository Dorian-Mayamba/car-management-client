import React from "react";
import '../styles/auth.css';
import { NavLink } from "react-router-dom";
export class Login extends React.Component{
    render(): React.ReactNode {
        return(
            <div className="auth-box">
                <form action="/api/auth/login" method="post" onSubmit={(e)=>e.preventDefault()}>
                    <div className="form-entry-group">
                        <input type="email" name="email" id="email" placeholder="enter your email" required/>
                    </div>
                    <div className="form-entry-group">
                        <input type="password" name="password" id="password" placeholder="enter your password" required/>
                    </div>
                    <div className="form-entry-group">
                        <input type="submit" value="Login" />
                    </div>
                    <div className="links">
                        <NavLink to="/Register">Haven't got an account?</NavLink>
                        <NavLink to="#">Forgot your password?</NavLink>
                    </div>
                </form>
            </div>
        );
    }
}