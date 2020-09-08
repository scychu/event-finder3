import {GET_EVENT,GET_CATEGORIES,GET_DETAIL} from "../actions/types";
  
const initialState = {
    event:[],
    categories:[],
    detail:[]
};
  
const events = (state = initialState, action) => {
    const { type,payload } = action;
    switch (type) {
        default:
        return {
            ...state,
        }
        case GET_EVENT: 
            return {
                ...state,
                event:payload
            }
        
        case GET_CATEGORIES: 
            return {
                ...state,
                categories:payload
            }
        
        case GET_DETAIL: 
            return {
                ...state,
                detail:payload
            }
        
    }
};

export default events;
  