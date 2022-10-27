import React from 'react'
import styles from './SearchPage.module.scss';
import Search from '../../components/SearchBar/SearchBar'
import {useItemListContext} from '../../../context/ItemListContext'

const SearchPage = () => {

  return (
    <div>
        <Search/>
        <h1>Pagina Principal MELI - CHALLENGE</h1>
        <div className={styles.home}>
            <p>
              Millones de publicaciones para descubrir
            </p>
        </div>
    </div>
  )
}

export default SearchPage;
