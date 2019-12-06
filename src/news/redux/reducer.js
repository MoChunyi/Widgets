import {GetNews} from './actions';
import produce from "immer";
export const newsReducer = (state = {items: []}, action) => {
    return produce(state, draft => {
        switch (action.type) {
            case GetNews: {
                console.log(action)
                draft.items = action.payload.items;
                break;
            }
            default: {
                return state;
            }
        }
    })
} 