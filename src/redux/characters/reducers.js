import {SET_CHARACTER_LIST, ADD_CHARACTER_TO_LIST} from "./actions";

const initialState = {
    list: [
        {
            id: 1,
            name: "John"
        }
    ]
}

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTER_LIST: {
            return {...state, list: action.payload.list};
        }
        case ADD_CHARACTER_TO_LIST: {
            const newList = [...state.list, action.payload.character];

            return {...state, list: newList}
        }
        default:
            return state;
    }
}

export default characterReducer;
