import {
    Authed
} from '../action-types';

export function loginReducer(state = { authed: false }, action) {
    switch (action.type) {
        case Authed:
            return { ...state, authed: true };
        default:
            return state;
    }
}