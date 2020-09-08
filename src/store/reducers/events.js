import {GET_EVENT,GET_CATEGORIES} from "../actions/types";
import { getCategories } from "../actions/events";
  
const initialState = {
    event:[],
    categories:[]
};
  
const events = (state = initialState, action) => {
    const { type,payload } = action;
    switch (type) {
        default:
        return {
            ...state,
        };
        case GET_EVENT: {
            return {
                ...state,
                event:payload
            }
        }
        case GET_CATEGORIES: {
            return {
                ...state,
                categories:payload
            }
        }
    }
};

export default events;
  