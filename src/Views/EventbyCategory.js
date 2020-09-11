import React from 'react';
import moment from 'moment';
import {useSelector} from "react-redux";
import {Card, CardImg, CardBody, CardSubtitle, Pagination, PaginationItem, PaginationLink} from 'reactstrap';

export default function EventbyCategory() {
    const eventList = useSelector(state=>state.events.event)
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
        <div>
          <div className="events">
                <div id="categories/Music">
                Music
                </div>
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
                <PaginationItem>
                    <PaginationLink last href="#" />
                </PaginationItem>
            </Pagination>
        </div>
    )
}
