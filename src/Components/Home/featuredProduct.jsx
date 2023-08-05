import axios from 'axios'
import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
const FeaturedProduct = () => {

    const [products, setData] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/c2dd7c68-2a6f-4e08-806f-e5cf2b954796'); // Replace this URL with your API endpoint
                setData(response.data.data); // Update the state with the fetched data
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, [])

    console.log(products)

    return (
        <div className="w-full flex justify-center py-8">
            <div className="flex flex-col items-center py-10 container">
                <h1 className="font-bold text-2xl md:text-4xl mb-14" >Featured Products</h1>
                <div className='flex flex-wrap justify-center gap-8 mb-10'>
                    {
                        products.map((product) => {
                            if (product.featured) {
                                return (
                                    <Link to={`/product/${product.category}/${product.id}`} className="flex-none bg-gradient-to-t from-zinc-200 relative  w-[300px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl transform hover:-translate-y-4 duration-300 cursor-pointer">
                                        <img className='w-[90%] mb-4 p-5' src={`${process.env.PUBLIC_URL}/${product.image}`} alt="" />
                                        <div className='w-full'>
                                            <p className='w-full font-semibold opacity-50'>{product.category}</p>
                                            <h1 className='w-full font-semibold text-xl text-zinc-900'>{product.title}</h1>
                                            <p className='w-full font-semibold text-zinc-600'>{product.price} $</p>
                                        </div>
                                    </Link>
                                )
                            }
                        })
                    }
                    {/* <article className=" bg-gradient-to-t from-purple-200 w-[32vh] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl">
                        <img className='w-[90%] mb-4 p-5' src={earbuds} alt="" />
                        <div className='w-full'>
                            <p className='w-full font-semibold opacity-50'>Category</p>
                            <h1 className='w-full font-semibold text-xl'>Earbud X15482</h1>
                            <p className='w-full font-semibold text-purple-900'>20.50 $</p>
                        </div>
                    </article>
                    <article className="bg-gradient-to-t from-purple-200 w-[32vh] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl">
                        <img className='w-[90%] mb-4 p-5' src={headphone} alt="" />
                        <div className='w-full'>
                            <p className='w-full font-semibold opacity-50'>Category</p>
                            <h1 className='w-full font-semibold text-xl'>Earbud X15482</h1>
                            <p className='w-full font-semibold text-purple-900'>20.50 $</p>
                        </div>
                    </article>
                    <article className="bg-gradient-to-t from-purple-200 w-[32vh] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl">
                        <img className='w-[90%] mb-4 p-5' src={speaker} alt="" />
                        <div className='w-full'>
                            <p className='w-full font-semibold opacity-50'>Category</p>
                            <h1 className='w-full font-semibold text-xl'>Earbud X15482</h1>
                            <p className='w-full font-semibold text-purple-900'>20.50 $</p>
                        </div>
                    </article>
                    <article className="bg-gradient-to-t from-purple-200 w-[32vh] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl">
                        <img className='w-[90%] mb-4 p-5' src={powerbank} alt="" />
                        <div className='w-full'>
                            <p className='w-full font-semibold opacity-50'>Category</p>
                            <h1 className='w-full font-semibold text-xl'>Earbud X15482</h1>
                            <p className='w-full font-semibold text-purple-900'>20.50 $</p>
                        </div>
                    </article> */}
                </div>
                <button className='h-12 md:h-16 bg-zinc-600 text-white w-44 md:w-52 rounded-lg text-lg md:text-2xl mt-5'>See All Products</button>
            </div>
        </div>
    )
}

export default FeaturedProduct;