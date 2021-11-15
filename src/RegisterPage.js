import React from 'react';
import Webs from './Web.css';
import top_circle from './img/top_circle.svg';
import bottom_circle from './img/bottom_circle.svg';


const RegisterPage = () => {
    return (
        <div className = "container">
        <div className = "mobile_frame">
            <div className = "top_nav">
                <a href = "login.html">
                <div class = "top_nav_btn">LOGIN</div>
                </a>
            </div>
            <img className = "top_circle" src={top_circle} alt="circlebackground"/>
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
                <input type="text" name="email" placeholder="Enter Email" className = "register_input"/>
                <label>
                    First Name
                </label>
                <input type="text" name = "first_name" placeholder="Enter First Name" className = "register_input"/>
                <label>
                    Last Name
                </label>
                <input type="text" name = "last_name" placeholder="Enter Last Name" className = "register_input"/>
                <label>
                    Password
                </label>
                <input type="password" name = "password" placeholder="Enter Password" className = "register_input"/>
            </div>
            <img className = "bottom_circle" src={bottom_circle} alt="circlebackground"/>
            <a>
            <button class = "register_btn">
                REGISTER
            </button>
            </a>
        </div>
        </div>
        </div>
        
    )
}
export default RegisterPage;
