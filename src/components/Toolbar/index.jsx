import "./styles.sass";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBookmark, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {useModal} from "react-simple-hook-modal";
import AppModal from "../Modal";
import CharacterForm from "../CharacterForm";

const Toolbar = () => {
    const { isModalOpen, openModal, closeModal } = useModal();

    return (
      <div className="toolbar">
          <button className="toolbar-button">
              FAVORITOS
              <FontAwesomeIcon className="icon" icon={faBookmark} />
          </button>
          <button className="toolbar-button" onClick={openModal}>
              AGREGAR
              <FontAwesomeIcon className="icon" icon={faUserPlus} />
          </button>
          <AppModal isOpen={isModalOpen} onClose={closeModal} title="Agregar personaje">
              <CharacterForm onSave={closeModal}/>
          </AppModal>
      </div>
    );
}

export default Toolbar;
