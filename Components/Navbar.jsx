import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='mx-2 flex flex-col justify-center items-center gap-2 md:justify-between md:flex-row md:text-xl py-2'>
        <div className="logo">
            <Link className="title-font font-medium text-yellow-300 text-3xl tracking-widest" href={"/"}>
                shop-ankit
            </Link>
        </div>
        <div className="nav">
            <ul className='flex gap-5 text-xl md:text-2xl'>
                <li>Tshirts</li>
                <li>Hoodies</li>
                <li>Stickers</li>
                <li>Mugs</li>
            </ul>
        </div>
        <div className="flex gap-5 text-xl md:text-2xl items-center justify-center">
            <AiOutlineShoppingCart />
            <button>Login</button>
        </div>
    </div>
  )
}

export default Navbar