import Hero from '../components/Hero'
import Feature from '../components/Feature'
import News from '../components/News'
import Message from '../components/Message'

const Home = () => {
  return (
    <div className=''>
      <Hero />
      <Feature />
      <Message></Message>
      <News/>
    </div>
  )
}

export default Home