import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
const FeaturedProduct = () => {

    const [products, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/c2dd7c68-2a6f-4e08-806f-e5cf2b954796');
                setData(response.data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])


    return (
        <div className="w-full flex justify-center py-8">
            <div className="flex flex-col items-center py-10 container">
                <h1 className="font-bold text-2xl md:text-4xl mb-14" >Featured Products</h1>
                <div className='flex flex-wrap justify-center gap-8 mb-10'>
                    {
                        products.map((product) => {
                            if (product.featured) {
                                return (
                                    <Link to={`/product/${product.category}/${product.id}`} className=" bg-gradient-to-t from-zinc-300 relative  w-[180px] md:w-[280px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl transform hover:-translate-y-4 duration-300 cursor-pointer">
                                        <img className='mb-4 p-5' src={product.image} alt="" />
                                        <div className='w-full'>
                                            <p className='w-full text-sm md:text-md md:font-semibold opacity-50'>{product.category}</p>
                                            <h1 className='w-full font-medium md:font-semibold text-md md:text-xl'>{product.title}</h1>
                                            <p className='w-full font-semibold text-zinc-600'>{product.price} $</p>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                </div>
                <a href='/store' className='h-12 md:h-16 bg-zinc-600 text-white w-44 md:w-52 rounded-lg text-lg md:text-2xl mt-5 flex justify-center items-center'>See All Products</a>
            </div>
        </div>
    )
}

export default FeaturedProduct;