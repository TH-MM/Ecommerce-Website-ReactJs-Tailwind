import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams , Link } from "react-router-dom";

const ProductsListByCategory = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/c2dd7c68-2a6f-4e08-806f-e5cf2b954796');
                setProducts(response.data.data.filter(product => product.category === category));
                console.log(response.data.data);
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();
    }, [category]);

    return (
        <div className="flex justify-center flex-wrap gap-5 mt-8">
            {
                products.map((product) => {
                    return (
                         <Link to={`/product/${product.category}/${product.id}`} className=" bg-gradient-to-t from-zinc-300 relative  w-[200px] md:w-[280px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl transform hover:-translate-y-4 duration-300 cursor-pointer">
                         {/* <img className='w-[80%] mb-4 p-5' src={process.env.PUBLIC_URL +product.image} alt="" /> */}
                         <img className='w-[80%] mb-4 p-5' src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" />
                         <div className='w-full'>
                             <p className='w-full md:font-semibold opacity-50'>{product.category}</p>
                             <h1 className='w-full font-medium md:font-semibold text-lg md:text-xl'>{product.title}</h1>
                             <p className='w-full font-semibold text-zinc-600'>{product.price} $</p>
                         </div>
                     </Link>
                    );
                })
            }
        </div>
    );
};

export default ProductsListByCategory;
