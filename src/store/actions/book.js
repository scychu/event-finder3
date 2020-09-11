// import {BOOK_EVENT} from '../actions/types'
import axios from 'axios'
  const URL = 'https://event-finder-team-c.herokuapp.com/api/v1/booking';

export const bookEvent = (data) => {
    return (dispatch) => {
      axios({
        method: "POST",
        url:`${URL}/create`,
        data
      })
      .then((res) => {
        console.log(res)
        // dispatch({
        //     type: GET_EVENT,
        //     payload:res.data.data.events,
        //     pages:res.data.data.page
        // })
        
      })
      .catch((err) => {
        console.log(err, "ERROR");
      });
    };
};