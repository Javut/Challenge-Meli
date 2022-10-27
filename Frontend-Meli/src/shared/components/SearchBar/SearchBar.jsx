import React, { useContext, useEffect, useState } from 'react';
import styles from './SearchBar.module.scss';
import logo from '../../../assets/logo_ml.png';
import search from '../../../assets/search_2x.png';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {useItemListContext} from '../../../context/ItemListContext'


const Search =  () => {

    const {item, modifyItems} = useItemListContext();
    const [value, setValue] = useState("celular");
    const navigate = useNavigate();
   

    const handleSubmit =  (e) => {
        try{

            axios.get(`http://localhost:3000/api/items/?q=${value}`)
            .then((response) => response)
            .then(resp => {
                console.log(resp);
                modifyItems(resp.data.categories[0],resp.data.items);
                console.log("Aqui entre y mi valor es: "+resp.data.author.name)
            })
            console.log("Primero navego");

           

        }catch(error){ 
            console.log("Se origino el siguiente error: "+ error)
        }

        navigate('/items/search');
      
    }  

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        console.log(value);
    }


    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="Search" />
                </div>

                <form className={styles.search_form}>
                    <input
                        type="text"
                        id="searchinput"
                        className={styles.input}
                        placeholder="Nunca dejes de buscar"
                        onChange={onChangeHandler}

                    />

                    <button type='button' className={styles.submit} onClick={handleSubmit}>
                        <img src={search} alt="Search" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;