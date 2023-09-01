import React from 'react'
import news from '../data/news'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Mentions from '../components/Mentions'

const NewsPage = () => {
  return (
    <>
      <section className="w-screen mt-20">
            <Mentions></Mentions>
        <div className="container py-7">

          {/* Featured  Carousel */}

        <div>
        </div>




            <div className="grid grid-cols-3 gap-5">
              
              {/* News array */}

              {news.map((item, index)=>(

                <Link to={`/news/${item.id}`}>
                  <div className="card shadow-lg">
                    <div className="h-[30vh] max-h-[30vh] overflow-hidden">
                      <img src={item.image} alt="" className="object-cover" />
                    </div>
                    <p className="text-lg">{item.title}</p>
                    <p>{item.body.substring(0, 200)}</p>
                    <div className="flex space-x-3 items-center">
                      <Icon icon="fluent:news-16-filled text-brown" />
                      <p className="text-brown">read more</p>
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