export const SET_CHARACTER_LIST = "character:set-character-list";
export const ADD_CHARACTER_TO_LIST = "character:add-character-to-list";

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

const testObject = {test:"test"};
export default testObject;
