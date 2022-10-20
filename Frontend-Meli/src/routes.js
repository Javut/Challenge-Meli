import SearchPage from './shared/pages/SearchPage/SearchPage';
import ProductList from './shared/pages/ProductPage/ProductPage';
import ProductDetail from './shared/pages/SearchPage/SearchPage';


const routes = [
  {
    path: "/",
    component: SearchPage,
    exact: true
  },
  {
    path: "/items?Search=",
    component: ProductList,
    exact: true
  },
  {
    path: "/items/:id",
    component: ProductDetail,
    exact: true
  }
];

export default routes;
