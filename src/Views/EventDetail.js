import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getEventDetail } from "../store/actions/events";
export default function EventDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getEventDetail(id));
      }, [dispatch, id]);
    
    return (
        <div className="event-detail">
            {id}
        </div>
    )
}
