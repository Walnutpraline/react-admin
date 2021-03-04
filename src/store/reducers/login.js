import {
    ADD_NUMBER,
    SUB_NUMBER
} from '../action-types';

export function loginReducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, counter: state.counter + action.num };
        case SUB_NUMBER:
            return { ...state, counter: state.counter - action.num };
        default:
            return state;
    }
}