import {useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import {Icon} from '@iconify/react'



const Nav = () => {
  const [showMenu, setShowMenu]= useState('false')






  return (
    <nav className=" font-poppins py-3 md:mb-3 sticky top-0 w-screen bg-white">
      <div className="container flex justify-between items-center ">
        {/* Logo */}
        <Link to="/">
          {/* <img src={logo} width={150} alt="" /> */}
          <p className="font-bold text-3xl">Agelgil</p>
        </Link>

        {/* nav link for large screens */}
        <div className="space-x-5  max-lg:hidden font-medium text-lg">
          <Link className="hover:border-b-brown" to="/product">
            Our products
          </Link>
          <Link to="/impact">Our Impact</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        {/* Working with Mobile version of nav  */}

        <div className="lg:hidden">
          <button
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <Icon icon="ic:round-menu" width={30} />
          </button>
        </div>

        {/* Menu to be toggled */}
      </div>

      {showMenu && (
        <div className=" block md:hidden font-medium text-lg container">
          <div>
            <Link className="hover:border-b-brown" to="/product">
              Our products
            </Link>
          </div>
          <div>
            <Link to="/impact">Our Impact</Link>
          </div>
          <div>
            <Link to="/about">About Us</Link>
          </div>
          <div>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav