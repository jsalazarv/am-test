import {Modal} from "react-simple-hook-modal";
import "./styles.sass";

const AppModal = ({isOpen = false, onClose = () => {}, title, children = null }) => {
    return (
        <Modal id="form-modal" isOpen={isOpen} onBackdropClick={onClose}>
            <div className="modal-header">
                <h3>{title}</h3>
                <button className="button-close" onClick={onClose}>X</button>
            </div>
            <div className="modal-body">
                {children}
            </div>
        </Modal>
    );
}

export default AppModal;
