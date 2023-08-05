import speaker from '../../images/headphones 05.png'

const Header = () => {
    return (
        <header className=" relative p-5 flex justify-center top-20 mb-10">
            <div className=" bg-gradient-to-b md:bg-gradient-to-r from-zinc-900 py-8 w-[140vh] rounded-3xl relative flex flex-col md:flex-row justify-center items-center md:justify-around ">
                <div className="flex flex-col items-center md:items-start gap-5">
                    <h1 className='font-oxygen font-bold text-4xl text-center md:text-start md:text-5xl px-10 text-white xl:w-[70vh]'>Xbox Wireless Headset Limited Edition</h1>
                    <p className='text-white px-10 text-center md:mb-10'>Embark on an epic journey</p>
                    <button className='w-40 bg-white md:ml-10 h-14 font-bold relative text-xl text-purple-900 rounded-lg'>Buy Now </button>
                </div>
                <div>
                    <img className=" w-[30vh] md:w-[50vh] object-cover filter drop-shadow-2xl mt-5 md:mt-0" src="images/headphones_03.png" alt="" />
                </div>
                <div className="-z-10 absolute top-0 left-0 w-full h-full rounded-3xl"></div>
            </div>
        </header>
    )
}

export default Header