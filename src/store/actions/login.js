import { ADD_NUMBER, SUB_NUMBER } from '../action-types';


export const addAction = (count) => ({
    type: ADD_NUMBER,
    num: count
});

export const subAction = (count) => ({
    type: SUB_NUMBER,
    num: count
})