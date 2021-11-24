import React from 'react'
import serv1 from '../img/serv1.jpg'
import serv2 from '../img/serv2.jpg'
import serv3 from '../img/serv3.jpg'
import serv4 from '../img/serv4.jpg'
import home2 from '../img/home2.jpg'


const ServiceSection = () => {
    return (
        <div className="services">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                            <img src={serv1} alt="icon"/>
                            <h3>Lorem.</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={serv2} alt="icon"/>
                            <h3>Lorem.</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={serv3} alt="icon"/>
                            <h3>Lorem.</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src={serv4} alt="icon"/>
                            <h3>Lorem.</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={home2} alt="icon"/>
            </div>
        </div>
    )
}

export default ServiceSection
