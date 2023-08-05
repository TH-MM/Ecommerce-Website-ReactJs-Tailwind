import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import Remove from '../../redux/actions/remove'
import Counter from '../../redux/actions/counter'
import Decriment from '../../redux/actions/decrement'
const Cart = ({ cart, childClick }) => {


    const click = () => {
        childClick();
    }

    const products = useSelector((state) => state = state.products)
    const dispatch = useDispatch();

    return (
        <>
            {cart ? (<><div className='fixed top-0 left-0 bg-black opacity-40 w-full h-[100vh] z-10 duration-500' onClick={click}></div>
                <div className="fixed top-0 right-0 bg-white z-10 p-5 w-full h-[100vh] duration-500 sm:w-[500px]">
                    <div className='flex justify-between px-5 items-center mb-10 h-12 relative'>
                        <h1 className='text-left text-lg font-semibold tracking-wider text-black w-full' >My Cart</h1>
                        <p onClick={click} className='absolute text-white bg-black w-8 h-8 rounded-md cursor-pointer right-0 flex justify-center items-center' ><FontAwesomeIcon className='text-lg font-bold' icon={faXmark} /></p>
                    </div>

                    <div className='flex flex-col gap-5'>
                        {
                            products.map((product) => (
                                <>{console.log(product.image)}
                                <div key={product.product.id} className="flex justify-between items-center bg-slate-100 p-3 h-28">
                                    <div className="flex items-center gap-5 w-[100%] relative h-full">
                                        <img className="w-16 md:w-20" src={`${process.env.PUBLIC_URL}/${product.product.image}`} alt={`${process.env.PUBLIC_URL}/${product.image}`} />
                                        <div className='flex flex-col justify-between h-full gap-4'>
                                            <div className="flex items-center absolute bottom-4 w-36">
                                                <p className=" tracking-wide font-bold text-xs sm:text-sm md-text-lg">$ {product.product.totalPrice.toFixed(2)}</p>
                                                <div className='flex gap-2 items-center absolute right-0'>
                                                    <button onClick={() => { dispatch(Counter(product.product.id)) }}><FontAwesomeIcon className='text-black cursor-pointer text-xs sm:text-sm md-text-lg' icon={faPlus} /></button>
                                                    <p className='text-gray-500 w-10 text-center border-solid border-gray-400 border-2 rounded-md text-xs sm:text-sm md-text-lg'>x {product.product.quantity}</p>
                                                    <button onClick={() => { dispatch(Decriment(product.product.id)) }}> <FontAwesomeIcon className='text-black cursor-pointer text-xs sm:text-sm md-text-lg' icon={faMinus} /></button>

                                                </div>
                                            </div>

                                            <p className="absolute top-4 text-sm sm:text-md">{product.product.title}</p>

                                        </div>
                                    </div>
                                    <FontAwesomeIcon className=' text-2xl absolute right-10 py-1 rounded-md cursor-pointer' onClick={() => { dispatch(Remove(product.product.id)) }} icon={faCircleXmark} />
                                    {/* <FontAwesomeIcon className=' text-2xl absolute right-10 py-1 rounded-md cursor-pointer' onClick={() => { dispatch(Remove(item.product.id)) }} icon={faXmark} /> */}
                                </div>
                                </>
                            ))
                        }

                    </div>
                </div></>) : (<><div className='hidden top-0 left-0 bg-black opacity-40 w-full h-[100vh] z-10 duration-500'></div>
                    <div className="fixed top-0 -right-[500px] bg-white z-10 p-5 w-[500px] h-[100vh] duration-500 "></div></>)}

        </>
    )
}

export default Cart;