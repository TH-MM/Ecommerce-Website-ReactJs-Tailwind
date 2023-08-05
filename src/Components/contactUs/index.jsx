

const ContactUs = () => {
    return (
        <>
        <div className="h-14 md:h-20"></div>
        <div className=" relative flex justify-center mb-10 lg:mb-52 mt-14">
            <div className="container grid grid-cols-1 lg:grid-cols-2 shadow-lg">
                <div>
                    <form className="grid grid-cols-1 gap-4 p-10 h-items-center" action="">
                        <h1 className="pl-5 text-3xl font-bold mb-2">Contact Form</h1>
                        <input className="h-12 bg-zinc-100 pl-3 rounded-md text-lg border-none outline-none" type="text" placeholder="Enter your Name" />
                        <input className="h-12 bg-zinc-100 pl-3 rounded-md text-lg border-none outline-none" type="text" placeholder="Enter your email" />
                        <textarea className="block  bg-zinc-100 pl-3 rounded-md text-lg border-none outline-none pt-2" name="message" id="message" cols="30" rows="5" placeholder="Enter your message"></textarea>
                        <button className="w-44 h-12 bg-zinc-900 text-white text-lg hover:w-48 duration-300">Submit</button>
                    </form>
                </div>
                <div className="relative overflow-hidden bg-zinc-900 grid grid-cols-1 grid-rows-3 p-8 text-white h-[500px]">
                    <div className="h-auto">
                        <h1 className="text-3xl font-bold mb-2">Contact Informations</h1>
                        <a className="text-xl opacity-80" href="#">Fill up the form and our Team will get back to you within 24 hours.</a>
                    </div>
                    <div className="grid items-center">
                        <p className="text-xl mb-2 font-lato font-semibold"><i class="fa-solid fa-phone mr-3"></i> +0123 4567 8910</p>
                        <p className="text-xl mb-2 font-semibold"><i class="fa-solid fa-envelope mr-3"></i>info@Kira.com</p>
                        <p className="text-xl mb-2 font-semibold"><i class="fa-solid fa-location-dot mr-3"></i>4976 Fulton Street San Francisco, CA 94121</p>
                    </div>
                    <div className="flex gap-4 items-end">
                        <i className="fa-brands fa-instagram text-2xl"></i>
                        <i className="fa-brands fa-x-twitter text-2xl"></i>
                        <i className="fa-brands fa-linkedin-in text-2xl"></i>
                    </div>
                    <div className="absolute -bottom-24 -right-24 bg-zinc-200 rounded-full w-72 h-72"></div>
                    <div className="absolute bottom-28 right-28 bg-zinc-500 rounded-full w-20 h-20 lg:w-24 lg:h-24 opacity-70"></div>
                </div>

            </div>
        </div>
        </>
    )
}

export default ContactUs