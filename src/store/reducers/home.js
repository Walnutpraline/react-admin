import {
    Fold
} from '../action-types';

//按钮折叠
export function FoldCollapsed(state = { collapsed: true }, action, status) {
    console.log(status,"status")
    switch (action.type) {
        case Fold:
            return { ...state, collapsed: status };
        default:
            return state;
    }
}