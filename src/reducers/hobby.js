const initialState = {
    list: [],
    activeId: null,
}

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY':
            return {
                ...state, // giữ lại các state hiện tại cụ thể là 'activeId'
                list: [...state.list, action.payload],
            }
        case 'SET_ACTIVE_HOBBY':
            return {
                state
            }
        default:
            break;
    }
    return state;
}

export default hobbyReducer;