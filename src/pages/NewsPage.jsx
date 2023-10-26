import React from 'react'
import news from '../data/news'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Mentions from '../components/Mentions'


import { BsNewspaper } from 'react-icons/bs'



const NewsPage = () => {
  return (
    <>
      <section className="w-screen mt-20">
        <Mentions></Mentions>
        <div className="container py-7">

          {/* Featured  Carousel */}

          <div>
          </div>



          <p className="custom_font custom_title py-4">Explore More</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3  gap-5">

            {/* News array */}

            {news.map((item, index) => (

              <Link to={`/news/${item.id}`}>
                <div className="card shadow-lg">
                  <div className="h-[20vh] max-h-[20vh] overflow-hidden">
                    <img src={item.image} alt="" className="object-cover" />
                  </div>
                  <p className="text-lg">{item.title}</p>
                  <p>{item.body.substring(0, 200)}</p>
                  <div className="text-brown flex items-center space-x-3">

                    <BsNewspaper />
                    <span className="mx-2">read more</span>

                  </div>
                </div>
              </Link>
            ))}


            {/* End of News */}

          </div>
        </div>
      </section>
    </>
  )
}

export default NewsPage