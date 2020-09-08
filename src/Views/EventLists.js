import React,{useEffect,useState} from 'react';
import '../style/sass/LandingPage.scss';
import img from '../style/image 7.png';
import {
    Card, CardImg, CardBody, Button,
    CardTitle, CardSubtitle, Col,Row,
    UncontrolledDropdown, DropdownToggle, DropdownMenu
  } from 'reactstrap';

import {getEvent,getCategories} from '../store/actions/events';
import {useSelector, useDispatch} from "react-redux";
export default function EventLists() {
    const catList = useSelector(state=>state.events.categories)
    const eventList = useSelector(state=>state.events.event)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEvent());
    },[dispatch]);
    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);
    
    const categories = catList && catList.map(item=>
        <li key={item.name}>{item.name}</li>
    )
    const event = eventList && eventList.map(item=>
        <Card className="event" key={item.id}>
            <a href={`/${item.title}/${item.id}`}>
            <CardImg src={item.image} alt="Project image"/>
            </a>
        <CardBody>
            <div className="event-desc_time">
                <h4>14</h4>
                <h4>Sept</h4>
            </div>
            <div>
          <CardSubtitle><h5>{item.title}</h5></CardSubtitle>
          <CardSubtitle className="test"><h6>{item.description}</h6></CardSubtitle>
          <CardSubtitle><h6>{item.location}</h6></CardSubtitle>
            </div>
        </CardBody>
      </Card>

        // <div className="event" key={item.id}>
        //     <div className="event-img">
        //         <img src={item.image} alt={item.title}/>
        //     </div>
        //     <div className="event-desc">
        //         <div className="event-desc_time">
        //             <h4>14</h4>
        //             <h4>Sept</h4>
        //         </div>
        //         <div className="event-desc-location">
        //             <h5>{item.title}</h5>
        //             <h6>{item.description}</h6>
        //             <h6>{item.location}</h6>
        //         </div>
        //     </div>
        // </div>
    )
    return (
        <div className="event-lists">
            <h1>Upcoming Events</h1>
            <div className="filters">
                <li>By Date</li>
                <li>By Price</li>
            </div>
            <ul id="categories">
                {categories}
            </ul> 
            <div className="events">
                {event}
                
                
            </div> 
        </div>
    )
}
