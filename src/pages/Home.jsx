import Hero from '../components/Hero'
import Feature from '../components/Feature'
import News from '../components/News'
import Message from '../components/Message'
import HoverDevCards from '../components/HoverDevCards'
import backgroundImage from '../../public/n2.jpg'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <HoverDevCards />
      <div className="bg-no-repeat bg-cover bg-center bg-fixed w-screen bg-deal h-screen mt-6" style={{ backgroundImage: `url(${backgroundImage})` }}  ></div>
      {/* <Feature /> */}

      <Message></Message>
      <News />
    </div>
  )
}

export default Home