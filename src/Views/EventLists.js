import React,{useEffect,useState} from 'react';
import moment from 'moment';
import '../style/sass/LandingPage.scss';
import {Button,Card, CardImg, CardBody,CardSubtitle, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {getEvent,getCategories,getSpecific,getFreeEvent,getPaidEvent} from '../store/actions/events';
import {useSelector, useDispatch} from "react-redux";

export default function EventLists() {
    const catList = useSelector(state=>state.events.categories)
    const eventList = useSelector(state=>state.events.event)
    const pages = useSelector(state=>state.events.pages)
    const dispatch = useDispatch();
    const [id,setId]= useState()
    useEffect(() => {
        dispatch(getEvent(1));
    },[dispatch]);
    
    useEffect(() => {
        dispatch(getCategories());
    },[dispatch]);
    
    const findCategory=(id)=>{
        dispatch(getSpecific(id,1));
        setId(id)
    }
    const getAllEvents = async () => {
		await dispatch(getEvent())
	}

    const moneyConvert =(num)=> {
        var str = num.toString();
        let array = [];
        var chuncks =str.split('');
        var reverse_value = chuncks.reverse();
        let join = reverse_value.join('');
        for(let i = 0, len = join.length; i < len; i += 3) {
            array.push(join.substr(i, 3))
        }
        let arr_result = array.join(',')
        let arr_res = arr_result.split('');
        let rev_res = arr_res.reverse();
        let result = rev_res.join('')
        return result
    }
    const categories = catList && catList.map(item=>
        <Button key={item.id}color="link"onClick={()=>{findCategory(item.id)}}>{item.name}</Button>
    )
        
    const event = eventList && eventList.map(item=>
        <Card className="event" key={item.id}>
            <a href={`/detail/${item.title}/${item.id}`}>
                <CardImg src={item.image} alt="Event image"/>
            </a>
            {item.fee=== 0 ? <p className="price">FREE</p>: <p className="price">SGD{moneyConvert(item.fee)}</p>}
            {/* <p className="price">SGD{moneyConvert(item.fee)}</p> */}
            <p className={item.status ==='available'?"available":"closed"}>{item.status}</p>
            <CardBody>
            <div className="event-desc_time">
                <h4>{moment(item.dateTimeStart).format('DD')}</h4>
                <h4>{moment(item.dateTimeStart).format('MMM')}</h4>
                <h4>{moment(item.dateTimeStart).format('YYYY')}</h4>
            </div>
            <div>
                <CardSubtitle><h6 style={{fontWeight:"bold"}}>{item.title}</h6></CardSubtitle>
                <CardSubtitle className="test"><h6>{item.description}</h6></CardSubtitle>
                <CardSubtitle><h6>{item.location}</h6></CardSubtitle>
            </div>
        </CardBody>
        <div id="event-tag">
            {item.categoryInfo.name}
        </div>
      </Card>
    )
    const nextPage=(page)=>{
        dispatch(getSpecific(id,page));
    }
    const freeEvent = ()=> {
        dispatch(getFreeEvent());
    }
    const paidEvent = ()=> {
        dispatch(getPaidEvent());
    }
    return (
        <div className="event-lists">
            <h1>Upcoming Events</h1>
            <ul id="categories">
            <Button color="link"onClick={getAllEvents}>All</Button>
                {categories}
            <Button color="link"onClick={freeEvent}>Free</Button>
            <Button color="link"onClick={paidEvent}>Paid</Button>
                
            </ul> 
            <div className="events">
                {event}
            </div>
            <Pagination aria-label="Page navigation example">
                {[...Array(pages)].map((item,index)=>{
                    return(
                        <PaginationItem key={index}>
                            <PaginationLink onClick={()=>nextPage(index+1)}>
                                {index+1}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
            </Pagination>
        </div>
    )
}
