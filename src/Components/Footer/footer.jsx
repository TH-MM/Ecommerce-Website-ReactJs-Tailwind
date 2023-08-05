const Footer = () => {
    return (
        <div className="flex justify-center bg-zinc-100 h-">
            <div className=" container p-5 px-20 text-black mt-5 flex flex-col justify-between">
                <div className="flex justify-center md:justify-start gap-10">
                    <div className="mt-5 mb-10 ">
                        <h1 className="text-xl md:text-2xl font-semibold text-zinc-600">Pages</h1>
                        <a className="block md:text-md mt-5" href="/">Home</a>
                        <a className="block md:text-md mt-2" href="/">About Us</a>
                        <a className="block md:text-md mt-2" href="/">Contact US</a>
                        <a className="block md:text-md mt-2" href="/">Products Page</a>
                    </div>
                    <div className="mt-5 mb-5 ">
                        <h1 className="text-xl md:text-2xl font-semibold text-zinc-600">Categories</h1>
                        <a className="block md:text-mdsm mt-5" href="/">Headphones</a>
                        <a className="block md:text-md mt-2" href="/">Earbuds</a>
                        <a className="block md:text-md mt-2" href="/">Speakers</a>
                        <a className="block md:text-md mt-2" href="/">Powerbanks</a>
                    </div>
                    <div className="mt-5 mb-5 ">
                        <h1 className="text-xl md:text-2xl font-semibold text-zinc-600">Find Us</h1>
                        <a className="block md:text-mdsm mt-5" href="/">Instagram</a>
                        <a className="block md:text-md mt-2" href="/">Linkedin</a>
                    </div>
                </div>
                <div><div className="h-0.5 w-full bg-zinc-400"></div>
                <p className="text-sm">Copyrights 2022-2023</p></div>
                
            </div>

        </div>
    )
}

export default Footer