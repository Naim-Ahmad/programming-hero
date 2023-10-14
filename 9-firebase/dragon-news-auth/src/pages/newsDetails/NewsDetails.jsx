import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function NewsDetails() {
  const [news, setNews]= useState({})
  const { id } = useParams()
  
  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => {
        const findNews = data.find(newsObject => newsObject._id == id)
        setNews(findNews)
        console.log(findNews)
      })
    .catch(err=>console.error(err))
  }, [])

  return (
      <div className=" col-span-3 mr-6 ">
          <div className="space-y-4">
              <figure>
                  <img src={news.image_url} alt="" />
              </figure>
          <h1 className="text-2xl text-dark-02 font-bold">{ news.title }</h1>
          <p className="text-dark-03">{ news.details}</p>
          </div>
    </div>
  )
}
