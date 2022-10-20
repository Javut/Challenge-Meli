import React from 'react';
import styles from './Item.module.scss';


const Item = () => {
    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <img  />
                <div className={styles.item_details}>
                    <span>vendidos</span>
                    <h3>Titulo</h3>
                    <h1>Price</h1>
                    <button type='button'>Comprar</button>
                </div>
            </div>
            <div className={styles.container__row}>
                <div className={styles.description_wrapper}>
                    <h2>Descripción del producto</h2>
                    <p>Aqui va un texto</p>
                </div>
            </div>
        </div>
    )
}

export default Item;