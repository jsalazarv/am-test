import {useDispatch, useSelector} from "react-redux";
import {useLayoutEffect} from "react";
import axios from "axios";
import config from "../../config";
import {setCharacterList} from "../../redux/characters/actions";
import "./styles.sass";

const CharacterList = () => {

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        axios.get(`${config.api.host}/hp-characters`)
            .then((response) => dispatch(setCharacterList(response.data)));
    }, []);

    const {list} = useSelector(state => state.characterState);
    return (
        <div className="container-character-list">
            {list.map((character, index) => (
                <div>
                    <p>{character.name}</p>
                    <p>{character.hogwartsStudent}</p>
                    <p>{character.dateOfBirth}</p>
                    <p>{character.gender}</p>
                    <p>{character.eyeColour}</p>
                    <p>{character.hairColour}</p>
                </div>
            ))}
        </div>
    );
}

export default CharacterList;
