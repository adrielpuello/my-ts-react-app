import React from "react";

import guitar from './Images/ajcassandraguitar.jpg'
import lake from './Images/ajcassandralake.jpg'
import calzone from './Images/calzone.jpeg'
import prettyplace from './Images/prettyplace.jpg'
import wakeboard from './Images/wakeboarding.jpg'

const About: React.FC = () => {

    return (
        <>
            <div className="main-text">
                    <h1>Mi Vida 🌏</h1>
                    <h2>Who am I?</h2>
                    <p>Well I'm so glad you asked! I was born in the Dominican Republic 🏝️,
                    and moved to the states when I was 7 years old. Since I was a child, I've loved adventures
                    and physical activity of any kind. In my day to day life I enjoy hiking, singing and songwriting, 
                    playing videogames, and spending time with my loved ones. After attending Florida A&M for 3 years,
                    I decided to begin my software engineering journey! I enrolled in an intensive, 6 month coding bootcamp
                    through Flatiron school, in which I became well aquainted with Javascript, React, Ruby on Rails, and a few
                    other languages and technologies. I am currently in the process of learning TypeScript (Check this website's code on my github 😊)!</p>
                    <h2>My Goals</h2>
                    <p>Ultimately, I strive to impact the world in as many positive ways as possible. 
                    That means regardless of the field I work in, and more importantly in spite of all 
                    the adversity life has to offer, doing everything I can to make a difference, no matter how small.
                    My ultimate passion is music, and I someday hope to be able to make a living off of my artistry. 
                    At the same time, I love the challenge the field of software engineering has to offer. 
                    I am all for learning as much as possible, and mastering my craft. On a more personal note, 
                    I hope to someday estbalish a non-profit organization that can provide dependable, trustworthy men
                    to step into the lives of children, specifically young men, who are growing up in our country without a dad.</p>
                </div>
            <div className="about-container">
                <div className="image-container">
                    <div className="image-container-one">
                        <img className="about-image-1" src={guitar} alt='guitar'></img>
                        <img className="about-image-1" src={lake} alt='lake'></img>
                    </div>
                    <div className="image-container-two">
                        <img className="about-image-2" src={prettyplace} alt='prettyplace'></img>
                    </div>
                    <div className="image-container-three">
                        <img className="about-image-3" src={calzone} alt='calzone'></img>
                        <img className="about-image-3" src={wakeboard} alt='wakeboard'></img>
                    </div>      
                </div> 
            </div>
        </>
        
    );
};

export default About;