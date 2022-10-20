import React, { createContext, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types';
import { categoryParser, itemListParser } from '../utils/utils'
import axios from 'axios'


const INITIAL_CONTEXT = {
    listProducts: {
        author: {
            name: "Jaider",
            lastname: "Vergara"
        },
        categories: "",
        items: 
            {
                id: "",
                title: "",
                price: {
                    currency: "",
                    amount: "",
                    decimals: ""
                },
                picture: "",
                condition: "",
                free_shipping: ""
            },
    }
    

};


export const ItemListContext = createContext();
export const useItemListContext = () => useContext(ItemListContext);

export const ItemListProvider = ({children}) => {

    // const [categoryList, setCategoryList] = useState(INITIAL_CONTEXT.categories);
    // const [itemList, setItemList] = useState(INITIAL_CONTEXT.items);
    // const [author, setAuthor] = useState(INITIAL_CONTEXT.author);
    const [categories, setCategories] = useState(['Tecnologia']);
    // const [query, setQuery] = useState('');
    // const [request, saveRequest] = useState(false);
    // const { children } = props;

    // const modifyItem = (parameter, value, parameter2, value2) => {
    //     parameter2 ? setAuthor({ ...author, [parameter]: value, [parameter2]: value2}) : setAuthor({ ...author, [parameter]: value});
    // };

    const getCategories = async () => {
         const res  = await axios.get('https://api.mercadolibre.com/sites/MLA/categories')
         console.log(res.data);
         setCategories([res.data]);
         
    }

   

    // const getItems = () => {

    // }

    return (
        <ItemListContext.Provider value={{categories, getCategories}}>
            {children}
        </ItemListContext.Provider> 
    );
};



