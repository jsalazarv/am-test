import "./styles.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import {faBookmark as faBookmarkSolid} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCharacterToFavorites, removeCharacterFromFavorites} from "../../redux/characters/actions";

const CharacterCard = (props) => {
    const {character, onFavoriteClick = () => null} = props;
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.characterState.favorites);
    const aliveStatus = character.alive ? "VIVO" : "MUERTO";
    const category = character.hogwartsStaff ? "STAFF" : "ESTUDIANTE";
    const [favoriteIcon, setFavoriteIcon] = useState(faBookmark);
    const houseClassColor = {
        Gryffindor: "gryffindor",
        Slytherin: "slytherin",
        Hufflepuff: "hufflepuff",
        Ravenclaw: "ravenclaw"
    };

    const favoriteClickHandler = () => {

        if(favorites.includes(character)) {
            setFavoriteIcon(faBookmark);
            dispatch(removeCharacterFromFavorites(character));
        } else {
            if(favorites.length < 5) {
                setFavoriteIcon(faBookmarkSolid);
                dispatch(addCharacterToFavorites(character));
            }
        }
        onFavoriteClick(character);
    };

    return (
        <div className="character-card">
            <div className={`character-card-header ${houseClassColor[character.house]}`}>
                <img className="character-card-header-avatar" src={character.image} alt={character.name}/>
            </div>
            <div className="character-card-body">
                <h3 className="character-card-body-title">{character.name}</h3>
                <div className="character-card-body-info">
                    <p><strong>Cumpleaños: </strong>{character.dateOfBirth}</p>
                    <p><strong>Género: </strong>{character.gender}</p>
                    <p><strong>Color de ojos: </strong>{character.eyeColour}</p>
                    <p><strong>Color de pelo: </strong>{character.hairColour}</p>
                </div>
                <div className="character-card-body-additional-info">
                    <div className="col info">
                        <span>{aliveStatus}</span>
                        <span>{category}</span>
                    </div>
                    <div className="col favorite">
                        <FontAwesomeIcon onClick={favoriteClickHandler} className="icon" icon={favoriteIcon} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterCard;
