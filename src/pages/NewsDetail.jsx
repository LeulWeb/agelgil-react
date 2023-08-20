import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import news from "../data/news"

const NewsDetail = () => {
    const {id}= useParams()
    const [newsDetail, setNewsDetail] = useState({})


    useEffect(() => {
        let currentNews = news.filter(obj=> obj.id == id)
        setNewsDetail(currentNews[0])
    },[])

    
        console.log(newsDetail.body);


    return (
      <>
          <div className="container">
                <p className="text_gradient font-semibold text-2xl text-center my-3">{ newsDetail.title }</p>
                    <img src={newsDetail.image} alt="" />
                <p className="muted my-5">{ newsDetail.body }</p>
          </div> 
      </>
  )
}

export default NewsDetail