import { useEffect, useState } from 'react'
import Navigation from '../leftSide/Navigation'
import News from './News'

function NewsSection() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('/data/news.json')
      .then(res => res.json())
      .then(data => setNews(data))
    .catch(err => console.error(err))
  },[])
  
  return (

    <>
      <Navigation></Navigation>
        <div className="col-span-2">
          <div className='px-5'>
            {
              news.map(newsObject => <News key={newsObject._id} news={newsObject}/>)
            }
          </div>
        </div>
    </>
  )
}

export default NewsSection
