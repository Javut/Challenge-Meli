import React from 'react'
import { useItemListContext } from '../../../context/ItemListContext'
import styles from './ProductPage.module.scss';

const ProductList  = () => {

  const { item, modifyItems } = useItemListContext();

    console.log(item.items);
    item.items.map((item, i) => {
      
      return (
        <div>
            <div className={styles.secondcontainer}>
            <div className={styles.firstsection}>
              <div>
                <img></img>
              </div>
              <div className={styles.descriptionsection}>
                <p><b>$1.980</b></p>
                <p>Apple ipod 5g 15gb Negro igual a Nuevo Completo Unico</p>
              </div>
            </div>
            <div className={styles.secondsection}>
              <p>Capital federal</p>
            </div>
          </div>
          <hr></hr>
        </div>
      )

    })

    

  }

  

 


export default ProductList;
