import { Fold } from '../action-types';

export const foldCollapsed = (status) => ({
    type: Fold,
    value: status
});