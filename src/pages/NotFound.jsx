import logo from '../assets/logo.jpg'
import {Link} from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-center'>
      <p className='text-4xl text-gray-700'>404| page not found</p>
      <img src={logo} width={200} alt="" />
      <Link to='/'>
          <p className='text_gradient font-bold text-2xl'>Go to Agelgil Eco package</p>
      </Link>
    </div>
  )
}

export default NotFound