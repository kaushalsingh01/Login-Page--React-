import React from "react";
import "./loginpage.css"


//fonts
import "../fonts/Oswald-Bold.ttf";
import "../fonts/Oswald-Regular.ttf";
import "../fonts/Oswald-Medium.ttf";
import "../fonts/Oswald-Light.ttf";

const LoginPage = () => {
    return ( 
        <div className="login-div">
            <h1 className="head">Login</h1>
            <input type="text" name="u-name" id="u-name" placeholder="Username"/>
            <input type="password" name="" id="" placeholder="Password"/>
            <button type="submit" className="login-btn">Login</button>
            <p className="text"> or login using</p>
            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google"></div>
            </div>
            <p className="text">Create an account?<a href="*"> Sign Up</a></p>
        </div>
     );
}
 
export default LoginPage;