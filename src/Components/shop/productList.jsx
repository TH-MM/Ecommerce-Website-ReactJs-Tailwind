import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams , Link } from "react-router-dom";
import ReactPaginate from "react-paginate"
const ProductsList = () => {
    const [products, setproducts] = useState([])
    const [pageNumber, setPageNumber] = useState(0);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://mocki.io/v1/c2dd7c68-2a6f-4e08-806f-e5cf2b954796')
                setproducts(response.data.data)
            } catch (error) {
                console.log(error.message)
            }

        }

        fetchData();
    }, [])

    const handlePageChnage = ({ selected }) => {
        setPageNumber(selected)
    }

    const startindex = pageNumber * itemsPerPage;
    const endindex = startindex + itemsPerPage;
    const currentItems = products.slice(startindex, endindex)

    console.log(products.length)
    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-5">
                {
                    currentItems.map((product) => {
                        return (<Link to={`/product/${product.category}/${product.id}`} className=" bg-gradient-to-t from-zinc-300 relative  w-[200px] md:w-[280px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl transform hover:-translate-y-4 duration-300 cursor-pointer">
                            <img className='w-[80%] mb-4 p-5' src={product.image} alt="" />
                            <div className='w-full'>
                                <p className='w-full md:font-semibold opacity-50'>{product.category}</p>
                                <h1 className='w-full font-medium md:font-semibold text-lg md:text-xl'>{product.title}</h1>
                                <p className='w-full font-semibold text-zinc-600'>{product.price} $</p>
                            </div>
                        </Link>)

                    }

                    )

                }

            </div>
            <ReactPaginate className="flex items-center text-xl gap-3 mt-10"
                previousLabel={<a href="#" class="flex items-center justify-center px-4 h-10 mr-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:text-white hover:bg-zinc-800  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white duration-300">
                    <svg class="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Previous
                </a>}
                nextLabel={<a href="#" class="flex items-center justify-center px-4 h-10 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:text-white hover:bg-zinc-800 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white duration-300">
                    Next
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>}
                breakLabel={'...'}
                pageCount={Math.ceil(products.length / itemsPerPage)}
                marginPagesDisplayed={1}
                pageRangeDisplayed={5}
                onPageChange={handlePageChnage}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    )
}

export default ProductsList