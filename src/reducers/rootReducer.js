import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import userReducer from './userReducer';

// Объединение нескольких редюсеров в один корневой редюсер
const rootReducer = combineReducers({
    weather: weatherReducer,
    user: userReducer,
});

export default rootReducer;
