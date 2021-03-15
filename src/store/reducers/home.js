import {
    Fold
} from '../action-types';

//按钮折叠
export function FoldCollapsed(state = { collapsed: false }, action) {
    switch (action.type) {
        case Fold:
            return { ...state, collapsed: action.value };
        default:
            return state;
    }
}