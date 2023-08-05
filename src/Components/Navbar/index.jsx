import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Cart from '../Home/cart';
import Menu from './menu';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu , setMenu] = useState(false)
  const [cart , setCart] = useState(false)

  const handlEnableMenu = () => {
    setMenu(true)
  } 

  const handlDisableMenu = () => {
    setMenu(false)
  } 

  const handlEnableCart = () => {
    setCart(true)
  } 

  const handlDisableCart = () => {
    setCart(false)
  } 

  return (
    <nav className="flex justify-between items-center  bg-white h-14 z-10 px-8 fixed w-full top-0 md:px-8 md:justify-around md:h-20 duration-200" >
      <div>
        <h1 className="text-2xl font-bold text-black font-quote">Kira</h1>
      </div>
      <div className="hidden font-semibold md:flex space-x-8">
        <Link to='/'>Home</Link>
        <Link to='/store'>Store</Link>
        <Link to='/contactus'>Contact Us</Link>
      </div>
      <div className=' items-center hidden gap-5 md:flex'>
        <button>
          <FontAwesomeIcon onClick={handlEnableCart} className='text-xl text-black ' icon={faCartShopping} />
        </button>


      </div >
      <div  className='flex items-center gap-5 md:hidden' >
        <FontAwesomeIcon onClick={handlEnableCart} className='text-xl text-black ' icon={faCartShopping} />

        <button onClick={handlEnableMenu} className=" text-black text-2xl rounded-md  ">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>


      <Cart cart={cart} childClick={handlDisableCart} />
      <Menu menu={menu} disable={handlDisableMenu} />
    </nav>
  );
};

export default Navbar;
