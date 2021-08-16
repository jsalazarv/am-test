import {addCharacterToList, setCharacterList} from "./actions";

describe("character:actions", () => {
    describe("setCharacterList", () => {
        test("should include expected properties in the actions", () => {
            const action = setCharacterList();

            expect(action).toHaveProperty("type");
            expect(action).toHaveProperty("payload");
        });

        test("should return empty array in payload by default", () => {
            const action = setCharacterList();

            expect(action).toStrictEqual({
                type: "character:set-character-list",
                payload: {
                    list: []
                }
            });
        });

        test("should return an action for set a character list", () => {
           const action = setCharacterList([{}]);

           expect(action).toStrictEqual({
               type: "character:set-character-list",
               payload: {
                   list: [{}]
               }
           });
       });
    });

    describe("addCharacterToList", () => {
        test("should include expected properties in the actions", () => {
            const action = addCharacterToList({});

            expect(action).toHaveProperty("type");
            expect(action).toHaveProperty("payload");
        });

        test("should throw error if a character is not provided", () => {
            expect(addCharacterToList).toThrowError("Character is required");
        });

        test("should return an action for add a character to list", () => {
            const action = addCharacterToList({});

            expect(action).toStrictEqual({
                type: "character:add-character-to-list",
                payload: {
                    character: {}
                }
            });
        });
    });
});
