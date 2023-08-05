import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Experience  = () => {

    return (
        <div className="w-full bg-zinc-100 py-8">
            <div className="h-full flex flex-col items-center justify-between py-14">
                <h1 className="font-bold text-center text-3xl md:text-3xl xl:text-4xl mb-14 px-5" >Experience Streamlined Shopping with Kira</h1>
                <div className='flex flex-wrap justify-center gap-16 mb-10 container'>
                    <div className="w-[35vh] flex flex-col items-center">
                        <FontAwesomeIcon className='text-4xl md:text-5xl text-zinc-500 mb-8' icon={faTruck} />
                        <h1 className="text-2xl font-bold text-zinc-800 mb-5" >Free Delivery</h1>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo fugit inventore sunt facere reprehenderit. Aliquam?</p>
                    </div>
                    <div className="w-[35vh] flex flex-col items-center">
                        <FontAwesomeIcon className='text-4xl md:text-5xl text-zinc-500 mb-8 ' icon={faBagShopping} />
                        <h1 className="text-2xl font-bold text-zinc-800 mb-5" >Self Pickup</h1>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo fugit inventore sunt facere reprehenderit. Aliquam?</p>
                    </div>
                    <div className="w-[35vh] flex flex-col items-center">
                        <FontAwesomeIcon className='text-4xl md:text-5xl text-zinc-500 mb-8' icon={faShieldHalved} />
                        <h1 className="text-2xl font-bold text-zinc-800 mb-5" >Warranty</h1>
                        <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo fugit inventore sunt facere reprehenderit. Aliquam?</p>
                    </div>
                </div>
                <button className='h-12 md:h-16 bg-zinc-600 text-white w-44 md:w-52 rounded-lg text-lg md:text-2xl mt-5'>See All Products</button>
            </div>
        </div>
    )
}

export default Experience ;