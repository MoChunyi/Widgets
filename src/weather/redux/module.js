import { weatherReducer } from './reducer';
import { weatherSaga } from './sagas';

export function getWeatherModule() {
    return {
        id: 'weather',
        reducerMap: {
            weatherState: weatherReducer
        },
        sagas: [weatherSaga]
    }
}