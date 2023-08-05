import earbuds from '../../images/earbuds_05.png'
import headphone from '../../images/headphones_03.png'
import speaker from '../../images/speaker_01.png'
import powerbank from '../../images/powerbank_04.png'
import { Link } from 'react-router-dom'

const ShopByCategory = () => {
    return (
        <div className="w-full flex justify-center py-8">
            <div className="flex flex-col items-center 2xl:items-start py-10 w-[140vh]">
                <h1 className="font-bold text-2xl md:text-4xl  mb-10" >Shop By Chategory</h1>
                <div className='flex flex-wrap justify-center gap-8 mb-10'>
                    <article className="bg-zinc-100 w-[320px] h-[350px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl relative overflow-hidden transform hover:scale-95 duration-300 cursor-pointer">
                        <div className='w-full'>
                            <h1 className='w-full font-semibold text-lg md:text-2xl'>Earbuds</h1>
                            <p className='text-sm md:text-md font-semibold text-gray-500 mt-1 w-60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quis vel quidem corporis architecto sapiente!</p>
                            <Link to="/store/earbuds" className='text-zinc-700 flex mt-3 text-sm md:text-lg '>View Earbuds</Link>
                        </div>
                        <img className='absolute -right-20 -bottom-20 w-[90%] mb-4 p-5 opacity-70' src={earbuds} alt="" />
                    </article>
                    <article className="bg-zinc-100 w-[320px] h-[350px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl relative overflow-hidden transform hover:scale-95 duration-300 cursor-pointer">
                        <div className='w-full'>
                            <h1 className='w-full font-semibold text-lg md:text-2xl'>Headphones</h1>
                            <p className=' font-semibold text-sm md:text-md text-gray-500 mt-1 w-60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quis vel quidem corporis architecto sapiente!</p>
                            <Link to="/store/headphones" className='text-zinc-700 flex mt-3 text-sm md:text-lg '>View Headphones</Link>
                        </div>
                        <img className='absolute -right-20 -bottom-20 w-[90%] mb-4 p-5 opacity-70' src={headphone} alt="" />
                    </article>
                    <article className="bg-zinc-100 w-[320px] h-[350px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl relative overflow-hidden transform hover:scale-95 duration-300 cursor-pointer">
                        <div className='w-full'>
                            <h1 className='w-full font-semibold text-lg md:text-2xl'>Speakers</h1>
                            <p className=' font-semibold text-sm md:text-md text-gray-500 mt-1 w-60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quis vel quidem corporis architecto sapiente!</p>
                            <Link to="/store/speakers" className='text-zinc-700 flex mt-3 text-sm md:text-lg '>View Speakers</Link>
                        </div>
                        <img className='absolute -right-20 -bottom-20 w-[90%] mb-4 p-5 opacity-70' src={speaker} alt="" />
                    </article>
                    <article className="bg-zinc-100 w-[320px] h-[350px] flex flex-col justify-between items-center gap-1 p-5 rounded-2xl relative overflow-hidden transform hover:scale-95 duration-300 cursor-pointer">
                        <div className='w-full'>
                            <h1 className='w-full font-semibold text-lg md:text-2xl'>Accessories</h1>
                            <p className=' font-semibold text-sm md:text-md text-gray-500 mt-1 w-60'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa quis vel quidem corporis architecto sapiente!</p>
                            <Link to="/store/Powerbanks" className='text-zinc-700 flex mt-3 text-sm md:text-lg '>View Accessories</Link>
                        </div>
                        <img className='absolute -right-20 -bottom-20 w-[90%] mb-4 p-5 opacity-70' src={powerbank} alt="" />
                    </article>
                </div>
            </div>
        </div>
    )
}

export default ShopByCategory