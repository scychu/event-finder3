import {GET_EVENT,GET_CATEGORIES,GET_DETAIL} from '../actions/types'
import axios from 'axios'
  const URL = 'https://event-finder-team-c.herokuapp.com/api/v1/event';

export const getEvent = () => {
    return (dispatch) => {
      axios({
        method: "GET",
        url:`${URL}/all?page=1`,
      })
      .then((res) => {
        console.log(res)
        dispatch({
            type: GET_EVENT,
            payload:res.data.data.events
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
        // console.log(res)
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

  