import React, { createContext, useState, useContext, useEffect } from 'react'

const INITIAL_CONTEXT = {
    author: {
        name: "Jaider",
        lastname: "Vergara"
    },
    categories: ['libros'],
    items: [
        {
            id: "",
            title: "",
            price: {
                currency: "",
                amount: "",
                decimals: ""
            },
            picture: "https://us.123rf.com/450wm/outchill/outchill1712/outchill171201487/91259550-ejemplo-texto-escrito-en-sello-con-textura-vintage-de-goma-redonda-amarilla-.jpg?ver=6",
            condition: "",
            free_shipping: ""
        },
    ]
};


export const ItemListContext = createContext();
export const useItemListContext = () => useContext(ItemListContext);

export const ItemListProvider = ({ children }) => {

    const [item, setItem] = useState(INITIAL_CONTEXT);
    const [flag,setFlag] = useState(0);


    const modifyItems = (cate,ite) => {
        setItem({...item, categories: cate, items:ite});
        console.log("Primero hago el contexto y es: "+ item.author.name)
    };

    return (
        <ItemListContext.Provider value={{ item, modifyItems, setFlag }}>
            {children}
        </ItemListContext.Provider>
    );
};



