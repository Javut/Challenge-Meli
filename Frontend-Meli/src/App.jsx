import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styles from './App.module.scss';
import { ProductDetail } from "./shared/pages/DetailPage/ProductDetail";
import ProductPage from "./shared/pages/ProductPage/ProductPage";
import SearchPage from "./shared/pages/SearchPage/SearchPage";
import {ItemListProvider} from './context/ItemListContext'


function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <ItemListProvider>
        <Routes>
          <Route path='/' element={<SearchPage />} />
          <Route path='/items/search' element={<ProductPage />} />
          <Route path='/items/id' element={<ProductDetail />} />
        </Routes>
        </ItemListProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
