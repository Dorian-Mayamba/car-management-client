import React from "react";
import '../styles/auth.css';
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useIsAuth, useAuth, isAuthContextType, authContextType } from "../contexts/contexts";
export default function Login() {

    const navigate = useNavigate();
    const {setAuthenticated} = useIsAuth() as isAuthContextType;
    const {setCurrentUser} = useAuth() as authContextType;
    const HandleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData:HTMLInputElement[] = (Array.from(e.currentTarget.elements) as HTMLInputElement[]);
        const [email, password] = formData;

        try {
            var response = await fetch('api/auth/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            });
            var data = await response.json();
            if(data?.statusCode == 401 && data?.message === 'incorrect email or password'){
                alert(data?.message);
            }else{
                setAuthenticated(true);
                setCurrentUser({
                    id:data?.id,
                    isAdmin:()=>data?.roleType === "admin",
                    name:data?.name
                })
                navigate('/', {replace:true});
            }
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className="auth-box">
            <form action="/api/auth/login" method="post" onSubmit={(e) => HandleLogin(e)}>
                <div className="form-entry-group">
                    <input type="email" name="email" id="email" placeholder="enter your email" required />
                </div>
                <div className="form-entry-group">
                    <input type="password" name="password" id="password" placeholder="enter your password" required />
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
