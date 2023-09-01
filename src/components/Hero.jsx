import hero from '../assets/herog.png'

const Hero = () => {
  return (
    <section className="section bg-center bg-cover  bg-fixed  bg-hero w-screen h-screen  flex justify-center items-center ">
      

      <div className='w-full h-full bg-black/70 flex flex-col justify-center items-center'>
          <h1 className='text-white text-3xl font-bold'>Agelgil Eco Packaging</h1>
          <p className='text-white'>Packaging with Consideration</p>
      </div>


       

      {/* <svg
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
      </svg> */}
    </section>
  );
}

export default Hero