import React, { useEffect, useState } from 'react'
import styles from './ProductPage.module.scss';
import { useItemListContext } from '../../../context/ItemListContext'
import { set } from 'ramda';
import axios from 'axios';
import Search from '../../components/SearchBar/SearchBar';
import { useNavigate } from "react-router-dom";

const ProductPage = () => {

  const { item, modifyItems } = useItemListContext();
  const [author, setAuthor] = useState('Default');
  const navigate = useNavigate();

  const handleSubmit = () => {
    try{
      console.log(item.items.id)
      axios.get(`http://localhost:3000/api/items/MLA703995599/description`)
      .then((response) => response)
      .then(resp => {
          console.log("Esta es mi respuesta"+resp)
      })
      console.log("Primero navego");

     

  }catch(error){ 
      console.log("Se origino el siguiente error: "+ error)
  }
    navigate('/items/id');
  }

  

  return (
    <>
      <Search />
      <div className={styles.container}>
        {item.items.map((iterador, i) => {
          console.log(iterador)
          return (
            <>
            <div className={styles.secondcontainer}>
              <div className={styles.firstsection}>
                <div className={styles.picture}>
                  <img src={iterador.picture} alt="Error image" onClick={handleSubmit}/>
                </div>
                <div className={styles.descriptionsection}>
                  <h3>{`$${iterador.price.amount}`}</h3>
                  <p>{iterador.title}</p>
                </div>
              </div>
              <div className={styles.secondsection}>
                <p>{iterador.price.currency}</p>
              </div>
            </div>
            <hr className={styles.splitline}></hr>
            </>
          )
        })}
      </div>
    </>
  )
}

export default ProductPage;
