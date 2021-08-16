import {useDispatch, useSelector} from "react-redux";
import {useLayoutEffect} from "react";
import axios from "axios";
import config from "../../config";
import {setCharacterList} from "../../redux/characters/actions";
import "./styles.sass";
import CharacterCard from "../CharacterCard";

const CharacterList = () => {

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        axios.get(`${config.api.host}/hp-characters`)
            .then((response) => dispatch(setCharacterList(response.data)));
    }, []);

    const {list} = useSelector(state => state.characterState);
    return (
        <div className="container-character-list">
            {list.map((character, index) => <CharacterCard character={character}/>)}
        </div>
    );
}

export default CharacterList;
