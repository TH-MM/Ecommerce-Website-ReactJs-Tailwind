import Product from "./product"
import ProductDescription from "./productDescription"
import Experience from "./experience"
import FeaturedProduct from "../../Home/featuredProduct"

const SingleProductPage = () => {
    return(
        <>
            <Product />
            <ProductDescription />
            <Experience />
            <FeaturedProduct />
        </>
    )
}

export default SingleProductPage