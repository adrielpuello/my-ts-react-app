import React from "react";

const Portfolio: React.FC = () => {

    const redirectToFBOC = () => {
        window.open('https://fboc.vercel.app/', '_blank')
      };

    return (
        <div className="project-container">
            <button className='portfolio-button' id='fboc' onClick={redirectToFBOC}></button>
            <div className="footer"></div>
            <div className="footer"></div>
            <div className="footer"></div>
        </div>
    );
};

export default Portfolio;