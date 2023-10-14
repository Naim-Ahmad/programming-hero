
import PropTypes from 'prop-types'
import Author from './Author'
import NewsBody from './NewsBody'

function News({ news }) {
  return (
      <div>
          <Author author={news.author} />
          <NewsBody news={news}/>
    </div>
  )
}

News.propTypes = {
    news: PropTypes.object
}

export default News
