import {GET_EVENT,GET_CATEGORIES,GET_DETAIL} from '../actions/types'
import axios from 'axios'
  const URL = 'https://event-finder-team-c.herokuapp.com/api/v1/event';

export const getEvent = (page) => {
    return (dispatch) => {
      axios({
        method: "GET",
        url:`${URL}/all?page=${page}`
      })
      .then((res) => {
        // console.log(res)
        dispatch({
            type: GET_EVENT,
            payload:res.data.data.events,
            pages:res.data.data.page
        })
        
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
    };
};
export const getCategories = () => {
    return (dispatch) => {
      axios({
        method: "GET",
        url:`${URL}/categories`,
      })
      .then((res) => {
        console.log(res)
        dispatch({
            type: GET_CATEGORIES,
            payload:res.data.data.categories
        })
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
    };
};

export const getSpecific = (id,page) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:`${URL}/category/${id}?page=${page}`,
    })
    .then((res) => {
      console.log(res)
      dispatch({
          type: GET_EVENT,
          payload:res.data.data.events,
          pages:res.data.data.page
      })
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
  };
};

export const getEventDetail = (id) => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:`${URL}/one/${id}`,
    })
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_DETAIL,
        payload:res.data.data.event
      })
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
  };
};

export const getFreeEvent = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:`${URL}/all?page=1&fee=free&date=upcoming`,
    })
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_EVENT,
        payload:res.data.data.events,
        // pages:res.data.data.page
      })
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
  };
};

export const getPaidEvent = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url:`${URL}/all?page=1&fee=paid&category=1&date=upcoming`,
    })
    .then((res) => {
      console.log(res)
      dispatch({
        type: GET_EVENT,
        payload:res.data.data.events,
        // pages:res.data.data.page
      })
    })
    .catch((err) => {
      console.log(err, "ERROR");
    });
  };
};

  