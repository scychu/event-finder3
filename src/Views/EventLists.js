import React from 'react'
import '../style/sass/LandingPage.scss';
import img from '../style/image 7.png';

export default function EventLists() {
    return (
        <div className="event-lists">
            <h1>Upcoming Events</h1>
            <div className="filters">
                <li>By Date</li>
                <li>By Price</li>
            </div>
            <ul id="categories">
                <li>All</li>    
                <li>Food & Drinks</li>    
                <li>Hobbies</li>    
                <li>Sports & Fitness</li>    
                <li>Music</li>    
                <li>Science & Tech</li>    
                <li>Others</li>    
            </ul> 
            <div className="events">
                <div className="event">
                    <div className="event-img">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="event-desc">
                        <div className="event-desc_time">
                            <h4>14</h4>
                            <h4>Sept</h4>
                        </div>
                        <div className="event-desc-location">
                            <h5>Event Location</h5>
                            <h6>Event Place</h6>
                            <h6>Event Place</h6>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="event-img">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="event-desc">
                        <div className="event-desc_time">
                            <h4>14</h4>
                            <h4>Sept</h4>
                        </div>
                        <div className="event-desc-location">
                            <h5>Event Location</h5>
                            <h6>Event Place</h6>
                            <h6>Event Place</h6>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="event-img">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="event-desc">
                        <div className="event-desc_time">
                            <h4>14</h4>
                            <h4>Sept</h4>
                        </div>
                        <div className="event-desc-location">
                            <h5>Event Location</h5>
                            <h6>Event Place</h6>
                            <h6>Event Place</h6>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="event-img">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="event-desc">
                        <div className="event-desc_time">
                            <h4>14</h4>
                            <h4>Sept</h4>
                        </div>
                        <div className="event-desc-location">
                            <h5>Event Location</h5>
                            <h6>Event Place</h6>
                            <h6>Event Place</h6>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="event-img">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="event-desc">
                        <div className="event-desc_time">
                            <h4>14</h4>
                            <h4>Sept</h4>
                        </div>
                        <div className="event-desc-location">
                            <h5>Event Location</h5>
                            <h6>Event Place</h6>
                            <h6>Event Place</h6>
                        </div>
                    </div>
                </div>
                <div className="event">
                    <div className="event-img">
                        <img src={img} alt="img"/>
                    </div>
                    <div className="event-desc">
                        <div className="event-desc_time">
                            <h4>14</h4>
                            <h4>Sept</h4>
                        </div>
                        <div className="event-desc-location">
                            <h5>Event Location</h5>
                            <h6>Event Place</h6>
                            <h6>Event Place</h6>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
