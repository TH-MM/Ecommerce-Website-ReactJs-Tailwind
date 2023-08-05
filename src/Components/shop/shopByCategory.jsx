import { useParams } from "react-router-dom"
import Header from "./header"
import Products from "./products"
import ProductsListByCategory from "./productListByCategory"
const ShopByCategory = () => {

    return (
        <>
            <Header />
            <Products />
        </>
    )
}

export default ShopByCategory