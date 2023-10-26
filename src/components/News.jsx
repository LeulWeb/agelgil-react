import news from '../data/news.js'
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { BsNewspaper } from 'react-icons/bs'

const News = () => {


  return (
    <>
      <section className="section my-4 py-7">
        <div className="container">
          <p className="custom_font custom_title">What is New?</p>
          <p className="muted py-7">
            Explore our news feed for the most recent updates, insights, and
            trends in the packaging world. From sustainable advancements to
            industry breakthroughs, our curated news section keeps you informed
            and inspired. Join us in shaping the future of packaging innovation.
          </p>

          <div className="grid  md:grid-cols-3 gap-3">
            {news.map((item, index) => {
              if (index < 3) {

                return (
                  <Link to={`/news/${item.id}`}>
                    <div className="card shadow-lg min-h-96 max-h-96 p-2">
                      <div className="h-[30vh] max-h-[30vh] overflow-hidden">
                        <img src={item.image} alt="" className="object-cover" />
                      </div>
                      <p className="text-md">{item.title}</p>

                      <div className="flex space-x-3 items-center">
                        <Icon icon="fluent:news-16-filled text-brown" />
                        <div className="text-brown flex items-center space-x-3">

                          <BsNewspaper />
                          <span className="mx-2">read more</span>

                        </div>
                      </div>
                    </div>
                  </Link>
                )
              }
            })}
          </div>

          <div className="w-full flex justify-end ">
            <Link to="/news">
              Explore what is new in Agelgil
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default News