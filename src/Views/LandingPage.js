import React from 'react'
import '../style/sass/LandingPage.scss';
import { Button } from 'reactstrap';
import img from '../style/image 7.png';
import EventLists from './EventLists';

export default function LandingPage() {
    return (
        <div className="landing-page_wrapper">
            <div className="landing-page_container">
                <img src={img}/>
                <div className="text">
                    <h2>CREATE EVENT APP</h2> 
                    <h5>Search for your favourite events near you!</h5>
                    <Button color="secondary" size="lg">Find Here</Button>
                </div>
            </div>
            <EventLists/>
        </div>
    )
}
