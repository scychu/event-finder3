import axios from 'axios';
import swal from 'sweetalert';
import {BOOK_EVENT} from '../actions/types'


const URL = 'https://event-finder-team-c.herokuapp.com/api/v1/booking';

export const bookEvent = (data) => {
    return (dispatch) => {
      // dispatch({
      //   type:PROCESS
      // })
      return axios({
        method: "POST",
        url:`${URL}/create`,
        data
      })
      //   method: "POST",
      //   url:`${URL}/create`,
      //   data
      // })
      .then((res) => {
        console.log(res)
        dispatch({
          type: BOOK_EVENT
        })
        swal("","Successfully booked the event","success");
        return true
      })
      .catch((err) => {
        console.log(err, "ERROR");
        swal("","Input invalid","error");
        return false
      });
    };
};