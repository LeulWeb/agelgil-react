import {useState, useEffect, useRef} from 'react'
import { Link, redirect } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import {Icon} from '@iconify/react'
import gsap from 'gsap'

const Nav = () => {
  const [showMenu, setShowMenu]= useState(false)  //using string for bool
   const [scrolling, setScrolling] = useState(false);
  const navRef = useRef(null);
  const linkRef = useRef(null);

useEffect(() => {
    const nav = navRef.current;
    const link = linkRef.current;
    const tline = gsap.timeline();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    // Gsap animation
    tline.set(nav, {
      autoAlpha: 0,
      x:-50,
    }).to(nav, {
      autoAlpha: 1,
      x:0,
      delay: 1,
      transition: 1
    })

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav   id='nav'  className={`z-30 nav fixed md:mb-3 top-0 w-screen text-white ${
        scrolling ? 'backdrop-filter backdrop-blur-lg bg-black/40' : 'bg-transparent'
      }`}>
      <div ref={navRef} className="container flex justify-between items-center ">
        {/* Logo */}
        <Link to="/">
          <div  className='flex flex-col items-center custom_font'>
            <p className="font-medium text-3xl">Agelgil</p>
            <p className='font-medium text-xl'>አግልግል</p>
          </div>
        </Link>

        <div ref={linkRef}  className="space-x-5  max-lg:hidden font-medium text-lg">
          <Link to='/news'>News</Link>
          <Link to='/product'>Product</Link>
          <Link to="/impact">Impact</Link>
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
