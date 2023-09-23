import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);
  const btnRef = useRef(null);
  useEffect(() => {
    // Get a reference to the title element
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const line = lineRef.current;
    const btn = btnRef.current;
    const tline= gsap.timeline();
    

    // Use GSAP to animate the title element
    tline.set(title, { autoAlpha: 0, y: -50 }).set(subtitle,{
           autoAlpha: 0, y: -50 
         }).set(line, {
          height: 0
         }).set(btn, {
          autoAlpha:0,
          y:-50,
         })
         .to(title, {
           autoAlpha: 1,
           y: 0,
           delay: 0.2,
         }).to(subtitle, {
          autoAlpha: 1, // Make the title visible
           y: 0, // Move it back to its original position
           delay: 0.2,
         },'-=0.2').to(line, {
            height: 100,
           delay: 0.2,
         },'-=0.2').to(btn, {
          autoAlpha: 1,
          delay: 0.2,
          y:0,
         });
  }, []);

  return (
    <section className="section bg-center bg-cover bg-fixed bg-hero w-screen h-screen flex justify-center items-center">
      <div className='w-full h-full bg-black/70 flex flex-col justify-center items-center'>
        <h1 ref={titleRef} className="text-white text-4xl  md:text-7xl thin">Agelgil Eco Packaging</h1>
        <p ref={subtitleRef}  className='text-white text-xl  md:text-3xl thin py-4'>Packaging with Consideration</p>
        <div ref={lineRef}  className="line bg-white w-1 h-36"></div>
        <button ref={btnRef}  className='bg-transparent border px-4 py-2 mt-3 text-white'>Contact Us</button>
      </div> 
    </section>
  );
}

export default Hero;
