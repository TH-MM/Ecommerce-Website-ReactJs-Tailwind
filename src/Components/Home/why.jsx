const Why = () => {
    return (
        <div className="flex flex-col items-center pb-10">
            <h1 className="text-center text-4xl font-bold mt-14">Why Kira ?</h1>
            <div className="relative container lg:w-[1250px] flex flex-col it lg:grid lg:grid-cols-3 p-20 g">
                <div className="lg:col-start-1 lg:col-end-2 ">
                    <h1 className="font-bold text-3xl text-zinc-600">Exceptional Sound Quality</h1>
                    <p className="text-black text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam labore atque a adipisci porro. Quidem beatae iste aliquid nulla consectetur.</p>
                </div>
                <div className="lg:col-start-3 lg:col-end-4 mt-14 ">
                    <h1 className="font-bold text-3xl text-zinc-600">Innovative Design</h1>
                    <p className="text-black text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam labore atque a adipisci porro. Quidem beatae iste aliquid nulla consectetur.</p>
                </div>
                <div className="lg:col-start-1 lg:col-end-2 mt-14 lg:mt-24">
                    <h1 className="font-bold text-3xl text-zinc-600">Superior Build and Durability</h1>
                    <p className="text-black text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam labore atque a adipisci porro. Quidem beatae iste aliquid nulla consectetur.</p>
                </div>
                <div className="lg:col-start-3 lg:col-end-4  mt-14 lg:mt-24">
                    <h1 className="font-bold text-3xl text-zinc-600">Versatile and User-Friendly</h1>
                    <p className="text-black text-lg">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam labore atque a adipisci porro. Quidem beatae iste aliquid nulla consectetur.</p>
                </div>
                <img className="lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 object-cover lg:mt-0 mt-14 self-center" src="images/earbuds_01.png" alt="" width={350} />
            </div>
            <button className='h-12 md:h-16 bg-zinc-600 text-white w-44 md:w-52 rounded-lg text-lg md:text-2xl mt-5'>Shop Now</button>
        </div>
    )
}

export default Why