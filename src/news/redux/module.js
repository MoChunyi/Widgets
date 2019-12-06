import {newsReducer} from './reducer';
import {newsSaga} from './sagas'

export function getNewsModule() {
    return {
        id: 'news',
        reducerMap: {
            hackerNews: newsReducer,
        },
        sagas: [newsSaga]
    }
}