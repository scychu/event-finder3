import {BOOK_EVENT} from "../actions/types";
  
const initialState = {
    data:""
};
  
const book = (state = initialState, action) => {
    const { type } = action;
    switch (type) {
        default:
        return {
            ...state,
        }
        case BOOK_EVENT: 
            return {
                ...state,
                data:"success"
            }        
    }
};

export default book;
  