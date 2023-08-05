import smallWindow from "../../smallWindow"
import {Link} from 'react-router-dom'

const Category = () => {
    const isSmall = smallWindow()
    console.log(isSmall)
    return(
        <div className="flex flex-row justify-center gap-2 lg:gap-0 lg:flex-col lg:px-8  lg:min-w-[300px] rounded-2xl lg:h-96 bg-zinc-100">
            {isSmall?null: <h1 className="md:text-lg flex items-center lg:text-2xl font-bold mt-5 mb-4">Categories </h1>}
            <Link className="h-20 flex items-center text-sm md:text-md lg:text-lg lg:hover:bg-zinc-200 px-3 hover:text-lg duration-300 md:hover:text-lg lg:hover:text-xl" to="/store">All</Link>
            <Link className="h-20 flex items-center text-sm md:text-md lg:text-lg lg:hover:bg-zinc-200 px-3 hover:text-lg duration-300 md:hover:text-lg lg:hover:text-xl" to="/store/headphones">Headphone</Link>
            <Link className="h-20 flex items-center text-sm md:text-md lg:text-lg lg:hover:bg-zinc-200 px-3 hover:text-lg duration-300 md:hover:text-lg lg:hover:text-xl" to="/store/earbuds">Earbuds</Link>
            <Link className="h-20 flex items-center text-sm md:text-md lg:text-lg lg:hover:bg-zinc-200 px-3 hover:text-lg duration-300 md:hover:text-lg lg:hover:text-xl" to="/store/speakers">Speakers</Link>
            <Link className="h-20 flex items-center text-sm md:text-md lg:text-lg lg:hover:bg-zinc-200 px-3 hover:text-lg duration-300 md:hover:text-lg lg:hover:text-xl" to="/store/Powerbanks">Powerbanks</Link>
        </div>
    )
}

export default Category