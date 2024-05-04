// userReducer.js

// Начальное состояние редюсера
const initialState = {
    user: null, // Здесь может быть объект с данными о пользователе или null, если пользователь не вошел в систему
    isLoggedIn: false, // Флаг, указывающий, вошел ли пользователь в систему
};

// Обработчики действий для редюсера
const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true,
            };
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                isLoggedIn: false,
            };
        default:
            return state;
    }
};

export default userReducer;
