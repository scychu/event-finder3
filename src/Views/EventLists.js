import React,{useEffect} from 'react';
import '../style/sass/LandingPage.scss';
import {Card, CardImg, CardBody, CardSubtitle, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
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
    // const findCategory=(id)=>{
    //     dispatch(getSpecific(id));
    //     console.log(id)
    // }
    const categories = catList && catList.map(item=>
        <a href={`/categories/$`}key={item.id}>{item.name}</a>
        // <Button onClick={()=>{findCategory(item.id)}}>{item.name}</Button>
    )
    const event = eventList && eventList.map(item=>
        <Card className="event" key={item.id}>
            <a href={`/detail/${item.title}/${item.id}`}>
                <CardImg src={item.image} alt="Project image"/>
            </a>
            <p className="price">{item.fee}</p>
            <p className={item.status==='available'?"available":"closed"}>{item.status}</p>
        <CardBody>
            <div className="event-desc_time">
                <h4>14</h4>
                <h4>Sept</h4>
            </div>
            <div>
          <CardSubtitle><h6 style={{fontWeight:"bold"}}>{item.title}</h6></CardSubtitle>
          <CardSubtitle className="test"><h6>{item.description}</h6></CardSubtitle>
          <CardSubtitle><h6>{item.location}</h6></CardSubtitle>
            </div>
        </CardBody>
      </Card>
    )
    return (
        <div className="event-lists">
            <h1>Upcoming Events</h1>
            <div className="filters">
                <li>By Date</li>
                <li>By Price</li>
            </div>
            <ul id="categories">
                <a href={`/categories/$`}>All</a>
                {categories}
            </ul> 
            <div className="events">
                {event}
            </div>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink first href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    1
                    </PaginationLink>
                </PaginationItem> 
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>
    )
}
