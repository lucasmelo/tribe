export const Types = {
    ADD: 'ADD_NEW_USER'
};

const INITIAL_STATE = {}
export default function register (state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.ADD:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

export const Creators = {
    User: (user) => ({
        type: Types.ADD,
        payload: user
    }),
    
}