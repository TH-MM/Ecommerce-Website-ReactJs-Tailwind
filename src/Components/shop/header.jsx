import speaker from '../../images/headphones 05.png'

const Header = () => {
    return (
        <header className=" relative px-5 flex justify-center top-20 mb-10">
            {/* <div className=" bg-gradient-to-b md:bg-gradient-to-r from-zinc-900 py-8 w-[140vh] rounded-3xl relative flex flex-col md:flex-row justify-center items-center md:justify-around ">
                <div className="flex flex-col items-center md:items-start gap-5">
                    <h1 className='font-oxygen font-bold text-4xl text-center md:text-start md:text-5xl px-10 text-white xl:w-[70vh]'>Our Products</h1>
                    <p className='text-white px-10 text-center md:mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ipsam necessitatibus dolore quas. Sequi explicabo quo accusantium aliquid dolorum maiores magni animi. Quibusdam omnis officiis a consequuntur quam! Minus, et.</p>
                </div>
                <div>
                    <img className=" w-[30vh] md:w-[50vh] object-cover filter drop-shadow-2xl mt-5 md:mt-0" src={`${process.env.PUBLIC_URL}/images/earbuds_05.png`} alt="" />
                </div>
                <div className="-z-10 absolute top-0 left-0 w-full h-full rounded-3xl"></div>
            </div> */}
            <div className=" bg-gradient-to-b md:bg-gradient-to-r from-zinc-900 py-8 rounded-3xl grid grid-cols-1 md:grid-cols-3 container md:px-5">
                <div className="col-start-1 col-end-3 flex flex-col justify-center gap-5">
                    <h1 className='font-oxygen font-bold text-4xl text-center md:text-start md:text-5xl px-10 text-white xl:w-[70vh]'>Our Products</h1>
                    <p className='text-white px-10 text-center md:text-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque ipsam necessitatibus dolore quas. Sequi explicabo quo accusantium aliquid dolorum maiores magni animi. Quibusdam omnis officiis a consequuntur quam! Minus, et.</p>
                </div>
                <div className='flex justify-center'>
                    <img className=" w-[300px] object-cover filter drop-shadow-2xl mt-5 md:mt-0" src={`${process.env.PUBLIC_URL}/images/earbuds_05.png`} alt="" />
                </div>
                <div className="-z-10 absolute top-0 left-0 w-full h-full rounded-3xl"></div>
            </div>
        </header>
    )
}


export default Header