import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import Blog from "./Blog"

export default function Blogs({addBookMarkHandler, addReadingTimeHandler, isBookMarked}) {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blogsData => setBlogs(blogsData))
    },[])
  return (
    <section className="w-3/4 my-6">
          {
              blogs.map(blog => <Blog
                  key={blog.id}
                  blog={blog}
                  addBookMarkHandler={addBookMarkHandler}
                  addReadingTimeHandler={addReadingTimeHandler}
                  isBookMarked={isBookMarked}
              />)
          }
    </section>
  )
}

Blogs.propTypes = {
    addBookMarkHandler: PropTypes.func.isRequired,
    addReadingTimeHandler: PropTypes.func.isRequired,
    isBookMarked: PropTypes.bool
}
