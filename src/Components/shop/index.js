import Header from "./header"
import ProductsList from "./productList"
import ProductsListByCategory from "./productListByCategory"
import Products from "./products"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
const Shop = () => {


    return (
        <>
            <Header />
            <Products />
            
        </>
    )
}

export default Shop