import "./styles.sass";
import {forwardRef, useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import config from "../../config";
import {addCharacterToList} from "../../redux/characters/actions";
import {useDispatch} from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";

const CharacterForm = ({onSave = () => {}}) => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [eyeColour, setEyeColour] = useState("");
    const [hairColour, setHairColour] = useState("");
    const [gender, setGender] = useState("");
    const [position, setPosition] = useState("");
    const [image, setImage] = useState("");
    const [errors, setErrors] = useState({
        name: false,
        dateOfBirth: false,
        eyeColour: false,
        hairColour: false,
        gender: false,
        position: false,
        image: false
    });
    const validate = () => {
        const newErrors = {...errors};
        newErrors.name = !name.length;
        newErrors.dateOfBirth = !dateOfBirth;
        newErrors.gender = !gender.length;
        newErrors.eyeColour = !eyeColour.length;
        newErrors.hairColour = !hairColour.length;
        newErrors.position = !position.length;
        newErrors.image = !image.length;

        setErrors(newErrors);

        return !Object.values(newErrors).includes(true);
    };
    const BirthdayInput = forwardRef(({ value, onClick }, ref) => (
        <input
            id="dateOfBirth"
            className={`text-input ${errors.dateOfBirth && "error"}`}
            type="text"
            autoComplete="off"
            readOnly
            value={value}
            onChange={(event) => setDateOfBirth(event.target.value)}
            onClick={onClick}
            ref={ref}
        />
    ));
    const setAvatar = (event) => {
        if (event.target.files && event.target.files[0]) {
            const FR= new FileReader();

            FR.addEventListener("load", (e) => {
                setImage(e.target.result);
            });
            FR.readAsDataURL(event.target.files[0]);
        }
    }

    const saveHandler = () => {
        if(validate()) {
            axios.post(`${config.api.host}/hp-characters`,
                {
                    id: uuidv4(),
                    name,
                    gender,
                    house: "Gryffindor",
                    dateOfBirth: moment(dateOfBirth).format("DD-MM-YYYY"),
                    eyeColour,
                    hairColour,
                    hogwartsStudent: position === "student",
                    hogwartsStaff: position === "staff",
                    alive: true,
                    image
                })
                .then((response) => {
                    dispatch(addCharacterToList(response.data));
                    onSave(response.data);
                });
        }
    };
    return (
        <div className="character-form">
            <div className="form-group">
                <label htmlFor="name">NOMBRE</label>
                <input
                    id="name"
                    className={`text-input ${errors.name && "error"}`}
                    type="text"
                    autoComplete="off"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="dateOfBirth">CUMPLEAÑOS</label>
                <DatePicker
                    selected={dateOfBirth}
                    onChange={(date) => setDateOfBirth(date)}
                    customInput={<BirthdayInput />}
                    className="datePicker"
                    dateFormat="dd-MM-yyyy"
                />
            </div>
            <div className="form-group">
                <label htmlFor="eyeColour">COLOR DE OJOS</label>
                <input
                    id="eyeColour"
                    className={`text-input ${errors.eyeColour && "error"}`}
                    type="text"
                    autoComplete="off"
                    value={eyeColour}
                    onChange={(event) => setEyeColour(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="hairColour">COLOR DE OJOS</label>
                <input
                    id="hairColour"
                    className={`text-input ${errors.hairColour && "error"}`}
                    type="text" autoComplete="off"
                    value={hairColour}
                    onChange={(event) => setHairColour(event.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="gender">GÉNERO</label>
                <div id="gender" className="radio-input">
                    <label htmlFor="male" className={`no-outline ${errors.gender && "error"}`}>
                        <input
                            id="male"
                            type="radio"
                            value="male"
                            name="gender"
                            onChange={(event) => setGender(event.target.value)}
                        />
                        HOMBRE
                    </label>
                    <label htmlFor="female" className={`no-outline ${errors.gender && "error"}`}>
                        <input
                            id="female"
                            type="radio"
                            value="female"
                            name="gender"
                            onChange={(event) => setGender(event.target.value)}
                        />
                        MUJER
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="position">POSICIÓN</label>
                <div id="position" className="radio-input">
                    <label htmlFor="student" className={`no-outline ${errors.position && "error"}`}>
                        <input
                            id="student"
                            type="radio"
                            value="student"
                            name="position"
                            onChange={(event) => setPosition(event.target.value)}
                        />
                        ESTUDIANTE
                    </label>
                    <label htmlFor="staff" className={`no-outline ${errors.position && "error"}`}>
                        <input
                            id="staff"
                            type="radio"
                            value="staff"
                            name="position"
                            onChange={(event) => setPosition(event.target.value)}
                        />
                        STAFF
                    </label>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="image" className={`no-outline ${errors.image && "error"}`}>
                    FOTOGRAFIA
                    <input
                        id="image"
                        className="image-input"
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={setAvatar}
                    />
                </label>
            </div>
            <div className="button-container">
                <button className="button-save" onClick={saveHandler}>GUARDAR</button>
            </div>
        </div>
    );
}

export default CharacterForm;
