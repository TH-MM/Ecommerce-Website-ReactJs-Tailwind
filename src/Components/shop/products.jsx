import ProductsList from "./productList"
import ProductsListByCategory from "./productListByCategory"
import Category from "./categoryList"
import smallWindow from "../../smallWindow"
import { useParams } from "react-router-dom"

const Products = () => {
    const {category} = useParams()

    return(
        <div className=" relative p-5 flex justify-center top-20 mb-20 h-auto">
            <div className="w-[140vh] flex flex-col lg:flex-row gap-10">
                {category == null?(<><Category />
                <ProductsList /></> ) :<><Category />
                <ProductsListByCategory /></>  }
                 
            </div>
        </div>
    )
}

export default Products