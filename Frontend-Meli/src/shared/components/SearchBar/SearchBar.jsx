import React from 'react';
import styles from './SearchBar.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo_ml.png';
import search from '../../../assets/search_2x.png';

const Search = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="Search" />
                </div>

                <form className={styles.search_form}>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Nunca dejes de buscar"
                    />
                    <button type='submit' className={styles.submit}>
                        <img src={search} alt="Search" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Search;