import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEventDetail } from "../store/actions/events";
import {Button,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import moment from 'moment';
import ModalBooking from "./ModalBooking";

export default function EventDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [modalBookOpen, setModalBookOpen] = useState(false);
    const details = useSelector((state)=>state.events.detail);
    const fee = useSelector((state)=>state.events.fee);
    const catId = useSelector((state)=>state.events.id);
    const category = useSelector((state)=>state.events.category);
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
    useEffect(() => {
        dispatch(getEventDetail(id));
    }, [dispatch, id]);

    const bookEvent = ()=>{
        // console.log("aa")
        setModalBookOpen(true)
    }

    return (
        <div className="event-detail">
            <div>
                <Breadcrumb tag="nav" listTag="div">
                    <BreadcrumbItem tag="a" href="/">Home</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href="/categories">Categories</BreadcrumbItem>
                    <BreadcrumbItem tag="a" href={`/categories/${category}/${catId}`}>{category}</BreadcrumbItem>
                    <BreadcrumbItem active tag="span">{details.title}</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="detail-wrapper">
                <div className="event-image">
                    <img src={details.image} alt="detail"/>
                    <h5 className={details.status==='available'?"available":"closed"}>{details.status}</h5>
                </div>
                <div className="event-more_detail">
                    {modalBookOpen? <ModalBooking setModalBookOpen={setModalBookOpen}/> : ""}
                    <p>{moment(details.dateTimeStart).format('DD MMM YYYY')} - {moment(details.dateTimeEnd).format('DD MMM YYYY')}</p>
                    <h3>{details.title}</h3>
                    <h4>{details.location}</h4>
                    <div id="event-tag">
                        {category}
                    </div>
                    <p>{details.description}</p>
                    {details.fee=== 0 ? 
                    <Button color="link"disabled>FREE</Button>: 
                    <Button color="link"disabled>SGD{moneyConvert(fee)}</Button>
                    }
                    {/* <Button color="link"disabled>SGD{moneyConvert(fee)}</Button> */}
                    <Button color="danger" className={details.status==='unavailable' ? "cant": ""}onClick={bookEvent}>Book Now</Button>
                </div>
            </div>
        </div>
    )
}
