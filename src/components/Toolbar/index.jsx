import "./styles.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark, faUserPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import {useModal} from "react-simple-hook-modal";
import AppModal from "../Modal";
import CharacterForm from "../CharacterForm";
import {useDispatch, useSelector} from "react-redux";
import {removeCharacterFromFavorites} from "../../redux/characters/actions";
import {useState} from "react";

const Toolbar = () => {
    const { isModalOpen, openModal, closeModal } = useModal();
    const favorites = useSelector((state) => state.characterState.favorites);
    const dispatch = useDispatch();
    const [favoriteListOpen, setFavoriteListOpen] = useState(false);
    return (
      <div className="toolbar">
          <button className="toolbar-button" onClick={() => setFavoriteListOpen(!favoriteListOpen)}>
              FAVORITOS
              <FontAwesomeIcon className="icon" icon={faBookmark} />
          </button>
          <button className="toolbar-button" onClick={openModal}>
              AGREGAR
              <FontAwesomeIcon className="icon" icon={faUserPlus} />
          </button>
          <ul className={`favorite-list ${favoriteListOpen && "open"}`}>
              {favorites.map((character, index) => (
                  <li key={index}>
                      <span>
                          <img className="favorite-list-avatar" src={character.image} alt={character.name}/>
                          {character.name}
                      </span>
                      <FontAwesomeIcon
                          className="icon"
                          icon={faTrash}
                          onClick={() => dispatch(removeCharacterFromFavorites(character))}
                      />
                  </li>
              ))}
          </ul>
          <AppModal isOpen={isModalOpen} onClose={closeModal} title="Agregar personaje">
              <CharacterForm onSave={closeModal}/>
          </AppModal>
      </div>
    );
}

export default Toolbar;
