import { combineReducers } from 'redux';
import events from './events';
import book from './book';

export default combineReducers({
    events,
    book
})
