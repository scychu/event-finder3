import {GET_EVENT,GET_CATEGORIES,GET_DETAIL} from "../actions/types";
  
const initialState = {
    event:[],
    categories:[],
    detail:[],
    fee:0,
    pages:0,
    category:"",
    id:0
};
  
const events = (state = initialState, action) => {
    const { type,payload,pages } = action;
    switch (type) {
        default:
        return {
            ...state,
        }
        case GET_EVENT: 
            return {
                ...state,
                event:payload,
                pages:pages
            }
        
        case GET_CATEGORIES: 
            return {
                ...state,
                categories:payload
            }
        
        case GET_DETAIL: 
            return {
                ...state,
                detail:payload,
                fee:payload.fee,
                category:payload.categoryInfo.name,
                id:payload.categoryInfo.id
            }
        
    }
};

export default events;
  