export const SET_CHARACTER_LIST = "character:set-character-list";
export const ADD_CHARACTER_TO_LIST = "character:add-character-to-list";
export const ADD_CHARACTER_TO_FAVORITES = "character:add-character-to-favorites";
export const REMOVE_CHARACTER_FROM_FAVORITES = "character:remove-character-from-favorites";

export const setCharacterList = (list = []) => {
    return {
        type: SET_CHARACTER_LIST,
        payload: {list}
    };
};

export const addCharacterToList = (character) => {
    if(!character) {
        throw new Error("Character is required");
    }
    return {
        type: ADD_CHARACTER_TO_LIST,
        payload: {character}
    }
};

export const addCharacterToFavorites = (character) => {
    if(!character) {
        throw new Error("Character is required");
    }
    return {
        type: ADD_CHARACTER_TO_FAVORITES,
        payload: {character}
    }
};

export const removeCharacterFromFavorites = (character) => {
    if(!character) {
        throw new Error("Character is required");
    }
    return {
        type: REMOVE_CHARACTER_FROM_FAVORITES,
        payload: {character}
    }
};
