import React from 'react'
import home1 from '../img/home1.jpg'

const AboutSection = () => {
    return (
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We Work To Make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Contact Us For Any Editing Ideas That You Have.We have professionals with amazing skills</p>
            </div>
            <div className="img">
                <img src={home1} alt="Home" />
            </div>
        </div>
    )
}

export default AboutSection
