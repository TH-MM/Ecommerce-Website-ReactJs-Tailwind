import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Add from '../../../redux/actions/add';
import Cart from "../../Home/cart";

const Product = () => {
    const [selectedColor, setSelectedColor] = useState('');
    const [Products, setProduct] = useState([])
    const { productId } = useParams()
    const [cart, setCart] = useState(false);

    const dispatch = useDispatch();

    const handlDisableCart = () => {
        setCart(false);
      };
    
      const handleParentClick = () => {
        setCart(true);
      };

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://mocki.io/v1/c2dd7c68-2a6f-4e08-806f-e5cf2b954796');
            setProduct(response.data.data.filter(product => product.id == productId))
        }

        fetchData()
    }, [Products])
    return (
        <div className=" relative md:p-5 flex justify-center h-auto top-20 mb-10">
            {
                Products.map((product) => {
                    return (
                        <div className="container grid grid-cols-1 lg:grid-cols-2 px-5 lg:px-14 ">
                            <div className="flex justify-center p-10 bg-zinc-100 rounded-3xl lg:max-h-[580px]">
                                <img src={`${process.env.PUBLIC_URL}/${product.image}`} className="object-cover" alt="" />
                            </div>
                            <div className="grid grid-cols-1 grid-rows-2 py-10 pl-2 lg:pl-14 lg:max-h-[520px] xl:max-h-[580px]">
                                <div className="grid grid-cols-1">
                                    <p className="font-semibold opacity-60">{product.category}</p>
                                    <h1 className="font-bold text-4xl lg:text-5xl xl:text-7xl">{product.title}</h1>
                                    <p className="text-md md:text-xl lg:text-lg xl:text-xl opacity-70">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, numquam optio quas odit facilis perspiciatis eaque non suscipit, nihil placeat nesciunt quidem dolores nisi ducimus.</p>
                                    <p className=" text-zinc-700 text-3xl font-bold font-lato mt-5">{product.price} USD</p>
                                </div>
                                <div className="flex flex-col gap-5 mt-10 lg:mt-0 lg:justify-end ">
                                    <div className="flex gap-2">
                                        <label htmlFor="color1" className={`bg-red-500 w-10 h-10 rounded-md cursor-pointer flex justify-center items-center`}>{selectedColor == "red" ? <FontAwesomeIcon className="text-white font-bold text-xl" icon={faCheck} /> : null}</label>
                                        <label htmlFor="color2" className={`bg-blue-500 w-10 h-10 rounded-md cursor-pointer flex justify-center items-center`}>{selectedColor == "blue" ? <FontAwesomeIcon className="text-white font-bold text-xl" icon={faCheck} /> : null}</label>
                                        <label htmlFor="color3" className={`bg-black w-10 h-10 rounded-md cursor-pointer flex justify-center items-center`}>{selectedColor == "black" ? <FontAwesomeIcon className="text-white font-bold text-xl" icon={faCheck} /> : null}</label>
                                        <input type="radio" value='red' name="color" id="color1" hidden onChange={(e) => setSelectedColor(e.target.value)} />
                                        <input type="radio" value='blue' name="color" id="color2" hidden onChange={(e) => setSelectedColor(e.target.value)} />
                                        <input type="radio" value='black' name="color" id="color3" hidden onChange={(e) => setSelectedColor(e.target.value)} />
                                    </div>
                                    <button onClick={() => {
                                        dispatch(Add({
                                            id: product.id,
                                            product: product
                                        }));
                                        handleParentClick();
                                    }} className="rounded-md lg:w-72 h-16 bg-zinc-700 text-white p-3 text-xl hover:text-2xl duration-200">Add to Cart</button></div>
                            </div>
                        </div>
                    )
                })
            }
        <Cart cart={cart} childClick={handlDisableCart} />
        </div>
    )
}
export default Product