import React from 'react';
import top_circle from './img/top_circle2.svg';
import Star from './img/star.svg';
import EmptyStar from './img/empty_star.svg';

function HomePage() {
    return (
        <div className ="container">
        <div className ="mobile_frame">
            <div className = "top_nav">
                <a href="/register.html"> 
                <div className = "top_nav_btn">
                HOME
                </div></a>
            </div>    
                <img className = "top_circle" src= {top_circle} alt="circlebackground"/>
            <div className = "home_container">
                <div className = "user_card">
                    <div className = "top_info">
                        <div>
                            <h3 id = "username" >Hey sandy</h3>
                            <p>
                                Welcome back to Ewa hut,<br/>
                                where life is not a pot of beans
                            </p>
                        </div>
                        <div className = "fun_facts">
                            Fun Facts!
                        </div>
                    </div>
                    <hr className = "horizontal_time"/>
                    <div className = "info_bottom">
                        <div className = "last_order">
                            <p>Last Order</p>
                            <div className = "last_order_date">
                                20/12/2021
                            </div>
                        </div>
                        <div className = "last_order">
                            <p>Last Order</p>
                            <div className = "last_order_date">
                                20/12/2021
                            </div>
                        </div>
                    </div>
                </div>
            <div className = "ranking_container">
                <div className = "ewa_ranking">
                    <h3>Ewa Ranking</h3>
                    <p>Your Present Ewa Ranking is</p>
                    <div>Agba Ewa</div><br/>
                    <img className = "star" src={Star} alt="star"/>
                    <img className = "star" src={Star} alt="star"/>
                    <img className = "star" src={Star} alt="star"/>
                    <img className = "star" src={Star} alt="star"/>
                    <img className = "empty-star" src={EmptyStar} alt="empty-star"/>
                </div>
                <div className = "ewa_point_score">
                    <p>Ewa points</p>
                    <div className = "score"> 10 </div>
                    <span>Beans</span>
                </div>
            </div>
            <div className = "order_container">
                <img className = "worldglobe" src="assets/globe.svg" alt="globe"/>
                <div className = "order_beans"> 
                    <h3>Order your Beans</h3>
                    <p>Delicious beans with class!</p>
                </div>
                <div className = "order_beans_plate">
                    <img className = "plate" src="assets/plate.svg" alt="plate"/>
                </div>
            </div>
            <div className = "balloon_container">
            <img className = "balloon" src="assets/balloon.svg" alt="ballon"/>
            </div>
        </div>
        <img className = "bottom_circle2" src="assets/bottom_circle2.svg" alt="bottom_circle2"/>
        <footer className = "footer">
            <img className = "home" src="assets/home.svg" alt="home"/>
            <img className = "user" src="assets/person.svg" alt="user"/>
        </footer>
    </div>
    </div>
    )
}

export default HomePage
