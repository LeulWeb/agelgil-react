import hero from '../assets/herog.png'

const Hero = () => {
  return (
    <section className=".section ">
      <div className=" md:flex gap-4 container items-center ">
        <div className="md:w-4/12 ">
          <p className="font-bold text-3xl my-3 py-3 text_gradient text-center md:text-start">
            Agelgil Eco Packaging
          </p>
          <p className="font-light text-gray-700">
            Explore eco-friendly packaging solutions that safeguard your
            products and the planet. From thoughtful designs to sustainable
            materials, we're here to showcase your brand's values while
            minimizing your ecological impact.
          </p>
        </div>

        <div className='md:w-8/12'>
          <img src={hero} alt="" />
        </div>
      </div>

      <svg
        class="frame-decoration fill-stone-200"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1920 192.275"
      >
        <defs>
          
        </defs>
        <title>frame-decoration</title>
        <path
          class=""
          d="M0,158.755s63.9,52.163,179.472,50.736c121.494-1.5,185.839-49.738,305.984-49.733,109.21,0,181.491,51.733,300.537,50.233,123.941-1.562,225.214-50.126,390.43-50.374,123.821-.185,353.982,58.374,458.976,56.373,217.907-4.153,284.6-57.236,284.6-57.236V351.03H0V158.755Z"
          transform="translate(0 -158.755)"
        />
      </svg>
    </section>
  );
}

export default Hero