export const Types = {
    LOGIN: 'USER_LOGIN'
};

const INITIAL_STATE = {}
export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.LOGIN:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export const Creators = {
    Login: (user) => ({
        type: 'ASYNC_USER_LOGIN',
        payload: user
    }),
};