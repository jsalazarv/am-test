import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import axios from "axios";
import config from "../../config";
import {setCharacterList} from "../../redux/characters/actions";
import "./styles.sass";
import CharacterCard from "../CharacterCard";

const CharacterList = () => {
    const dispatch = useDispatch();
    const [params, setParams] = useState({});

    useEffect(() => {
        axios.get(`${config.api.host}/hp-characters`, {params})
            .then((response) => dispatch(setCharacterList(response.data)));
    }, [params]);

    const filterStudents = () => setParams({hogwartsStudent: true});
    const filterStaff = () => setParams({hogwartsStaff: true});
    const filterDeceased = () => setParams({alive: false});

    const {list} = useSelector(state => state.characterState);
    return (
        <div>
            <div className="container-title">
                <img src="logo_hp.svg" alt=""/>
                <h1>Selecciona tu filtro</h1>
            </div>
            <div className="filters-container">
                <button
                    className={`filter-button ${params.hogwartsStudent && "active"}`}
                    onClick={filterStudents}>
                    ESTUDIANTES
                </button>
                <button
                    className={`filter-button ${params.hogwartsStaff && "active"}`}
                    onClick={filterStaff}>
                    STAFF
                </button>
                <button className={`filter-button ${params.hogwartsDeceased && "active"}`}
                        onClick={filterDeceased}>
                    FINADOS
                </button>
            </div>
            <div className="container-character-list">
                {list.map((character, index) => <CharacterCard character={character}/>)}
            </div>
        </div>
    );
}

export default CharacterList;
