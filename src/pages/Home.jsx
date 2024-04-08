//import React, { Component } from 'react';
import {useNavigate} from "react-router-dom";



function Home () {
    const navigate = useNavigate();
    return (
        <div className = "home">
            <h1>
                Hi, I am <span>Hoang</span>
            </h1>
            <h3>
                Unviersity Student/Web Developer
            </h3>
            <p>
                Hoang Bao Phuc Chau, or being known as Peter, is a student at Swinburne University of Technology.
                I am a second-year Computer Science student seeking employment. I am enthusiastic about
                programming with a decent knowledge of web development languages and frameworks. Also, serving two
                years as an event team member of two university clubs in both Vietnam and Australia, I developed a positive
                awareness of teamwork, communication and organisation.
            </p>

            <button onClick={() => {
                navigate("/education");
            }}>
                See More
            </button>

        </div>
    )
}

export default Home;