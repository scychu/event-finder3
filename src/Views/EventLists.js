import React,{useEffect} from 'react';
import moment from 'moment';
import '../style/sass/LandingPage.scss';
import {
    Navbar,
    NavbarBrand,
    Card, CardImg, CardBody, CardSubtitle, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import {getEvent,getCategories} from '../store/actions/events';
import {useSelector, useDispatch} from "react-redux";
export default function EventLists() {
    const catList = useSelector(state=>state.events.categories)
    const eventList = useSelector(state=>state.events.event)
    // const pages = useSelector(state=>state.events.pages)
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
        // <NavbarBrand href={`/categories/${item.name}`}key={item.id}>{item.name}</NavbarBrand>
        <NavbarBrand href={`#categories/${item.name}`}key={item.id}>{item.name}</NavbarBrand>
        // <a href={`/categories/$`}key={item.id}>{item.name}</a>
        // <Button onClick={()=>{findCategory(item.id)}}>{item.name}</Button>
    )
        
    const event = eventList && eventList.map(item=>
        <Card className="event" key={item.id}>
            <a href={`/detail/${item.title}/${item.id}`}>
                <CardImg src={item.image} alt="Project image"/>
            </a>
            <p className="price">SGD{moneyConvert(item.fee)}</p>
            <p className={item.status==='available'?"available":"closed"}>{item.status}</p>
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
      </Card>
    )

    return (
        <>
        <div className="event-lists">
            <h1>Upcoming Events</h1>
            <div className="filters">
                <li>By Date</li>
                <li>By Price</li>
            </div>
            <ul id="categories">
            <Navbar color="light" light expand="md">
            <NavbarBrand href={`/categories/All`}>All</NavbarBrand>
                {categories}
                {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
                {/* <NavbarBrand href="/">reactstrap</NavbarBrand> */}
            </Navbar>
                {/* <a href={`/categories/$`}>All</a> */}
                {/* {categories} */}
            </ul> 
            <div className="events">
                {event}
            </div>
            <Pagination aria-label="Page navigation example">
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">
                    1
                    </PaginationLink>
                </PaginationItem> 
                <PaginationItem>
                    <PaginationLink next href="#" />
                </PaginationItem>
            </Pagination>
        </div>
        </>
    )
}
