import { ADD_EVENT, DELETE_ALL_EVENT, CLICK_ALL_EVENT, INCREMENT, DOWN, RESET } from '../actions/index';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body };
            const id = state.length + 1;
            return [...state, { id, ...event }]
        case DELETE_ALL_EVENT:
            return [];
        case CLICK_ALL_EVENT:
            const result = state.filter((data) => data.id !== action.id);
            return result;
        case INCREMENT:
            //一個ずつ上げていく
            return { ...state, count: state.count + 1 };
        case DOWN:
            //一個ずつ下げて行く
            return { ...state, count: state.count - 1 };
        case RESET:
            //全削除
            return { count: 0 };
        default:
            return state;
    }
};

export default reducer;