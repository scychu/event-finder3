import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEventDetail } from "../store/actions/events";
import {Button} from 'reactstrap';
export default function EventDetail() {
    const { id } = useParams();
    const details = useSelector((state)=>state.events.detail)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getEventDetail(id));
    }, [dispatch, id]);

    return (
        <div className="event-detail">
            <div className="detail-wrapper">
                <div className="event-image">
                    <img src={details.image}/>
                    <h5 className={details.status==='available'?"available":"closed"}>{details.status}</h5>
                </div>
                <div className="event-more_detail">
                    <p>{details.dateTimeStart} - {details.dateTimeEnd}</p>
                    <h3>{details.title}</h3>
                    <h4>{details.location}</h4>
                    <p>{details.description}</p>
                    <Button color="link"disabled>{details.fee}</Button>
                    <Button color="primary">Book Now</Button>
                </div>
            </div>
        </div>
    )
}
