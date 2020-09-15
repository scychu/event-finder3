import React from 'react'
import '../style/sass/LandingPage.scss';
import img from '../style/image 7.png';
import {Button} from 'reactstrap';
import EventLists from './EventLists';

export default function LandingPage() {
    return (
        <div className="landing-page_wrapper">
            <div className="landing-page_container">
                <img src={img} alt="landingpage"/>
                <div className="text">
                    <h2>CREATE EVENT APP</h2> 
                    <h5>Search for your favourite events near you!</h5>
                    <Button href="#eventlist">Find Here</Button>
                </div>
            </div>
            <div id="eventlist">
                <EventLists/>
            </div>
        </div>
    )
}
