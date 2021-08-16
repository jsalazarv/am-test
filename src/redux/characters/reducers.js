import {
    SET_CHARACTER_LIST,
    ADD_CHARACTER_TO_LIST,
    ADD_CHARACTER_TO_FAVORITES,
    REMOVE_CHARACTER_FROM_FAVORITES
} from "./actions";

const initialState = {
    list: [],
    favorites: []
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
        case ADD_CHARACTER_TO_FAVORITES: {
            const newList = state.favorites.length < 5
                ? [...state.favorites, action.payload.character]
                : state.favorites;

            return {...state, favorites: newList}
        }
        case REMOVE_CHARACTER_FROM_FAVORITES: {
            const newList = [...state.favorites];
            const index = newList.indexOf(action.payload.character);
            newList.splice(index, 1);

            return {...state, favorites: newList}
        }
        default:
            return state;
    }
}

export default characterReducer;
