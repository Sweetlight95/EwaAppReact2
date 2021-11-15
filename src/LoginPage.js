import React from 'react';
import Webs from './Web.css';
import top_circle2 from './img/top_circle2.svg';
import bottom_circle2 from './img/bottom_circle2.svg';

function LoginPage() {
    return (
        <div className = "container">
        <div className = "mobile_frame">
            <div className = "top_nav">
                <a href = "register.html" >
                <div className = "top_nav_btn">REGISTER</div></a>
            </div>
            <img className = "top_circle2" src= {top_circle2} alt="circlebackground"/>
            <div className = "frame_container">
                <div className = "intro_text">
                    <h3>Welcome To Ewa</h3>
                    <p>Where your cravings 
                        for beans are 
                        satisfied</p>
                </div>
            <div className = "input_container">
                <label>
                    Email
                </label>
                <input type="text" name="email" placeholder="Enter Email" className = "login_input"/>
                <label>
                    Password
                </label>
                <input type="password" name = "password" placeholder="Enter Password" className = "login_input"/>
            </div>
            <img className = "bottom_circle2" src= {bottom_circle2} alt="circlebackground"/>
            <a><button className = "login_btn">
                LOGIN
            </button></a>
        </div>
    </div>
</div>
    )
}

export default LoginPage


