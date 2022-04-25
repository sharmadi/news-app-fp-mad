import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import * as c from './constants';

export const addNewsItemsToStoreAction = (headlines) => ({
    type: c.HEADLINES_AVAILABLE,
    headlines
});

let initialState = {
    headlines: {}
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case c.HEADLINES_AVAILABLE: {
            let { headlines } = action;

            return {...state, headlines};
        }

        default:
            return state;
    }
};

const enhancer = compose(applyMiddleware(thunk));
const reducers = combineReducers({ newsReducer });

export default createStore(reducers, enhancer);