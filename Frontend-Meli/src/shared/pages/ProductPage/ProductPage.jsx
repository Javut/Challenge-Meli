import React, { useEffect, useContext } from 'react'
import ProductList from '../../components/ProductList/ProductList';
import Search from '../../components/SearchBar/SearchBar';
import styles from './ProductPage.module.scss';
import {useItemListContext} from '../../../context/ItemListContext'


const ProductPage =  () => {

  const {categories,getCategories} = useItemListContext();

  useEffect(() => {
    
    getCategories('Motorola');
   
  }, [])
  


  return (
    <>
      <Search />
      <div className={styles.container}>
        <h1>Hola mis productos son: </h1>

        {
            categories.map(cat => (
              <p href="">{cat.name}</p>
            ))
          }
       
        
        {/* <h1>Hola mundo</h1>
        <h1>Hola mundo</h1>
        <h1>Hola mundo</h1>
        <h1>Hola mundo</h1>
        <h1>Hola mundo</h1> */}
      </div>
    </>
  )
}

export default ProductPage;
