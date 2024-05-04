import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer'; // Подставьте свой корневой редюсер

const store = configureStore({
    reducer: rootReducer, // Передайте корневой редюсер
    middleware: getDefaultMiddleware => {
        // Добавьте middleware (например, thunk)
        return getDefaultMiddleware();
    },
    devTools: process.env.NODE_ENV !== 'production', // Включите Redux DevTools
});

export default store;
