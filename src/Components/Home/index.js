import Header from "./header"
import FeaturedProduct from "./featuredProduct"
import ShopByCategory from "./shopByCategory"
import Experience from "./experience"
import { faHourglass1 } from "@fortawesome/free-solid-svg-icons"
import Footer from "../Footer/footer"
import Why from "./why"
const Home = () => {
    
    
    return(
        <>
        <Header />
        <FeaturedProduct />
        <ShopByCategory />
        <Experience />
        <Why />
        
        </>
    )
}

export default Home