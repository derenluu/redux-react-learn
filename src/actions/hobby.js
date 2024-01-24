export const ADD_HOBBY = 'ADD_HOBBY';
export const SET_ACTIVE_HOBBY = 'SET_ACTIVE_HOBBY';

// Trong action creators
export const addNewHobby = (hobby) => ({
    type: ADD_HOBBY,
    payload: hobby,
});

export const setActiveHobby = (hobby) => ({
    type: SET_ACTIVE_HOBBY,
    payload: hobby,
});