import { ADD_EVENT, DELETE_ALL_EVENT, CLICK_ALL_EVENT, INCREMENT, DOWN, RESET, PLUS } from '../actions/index';

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

        case PLUS:
            //3の倍数の時+10する
            if (state.count === 0) {
                return { ...state, count: state.count };
            }
            else if (state.count % 3 === 0) {
                return { ...state, count: state.count + 10 };
            } else {
                return { ...state, count: state.count };
            }
        default:
            return state;
    }
};

export default reducer;