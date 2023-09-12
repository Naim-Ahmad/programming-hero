import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Navbar from './components/Navbar'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0)
  

  const addBookMarkHandler = (blog) => {
    for (const bookmark of bookmarks) {
      if (bookmark.id === blog.id) {
        setBookmarks(bookmarks.filter(bookmark => bookmark.id !== blog.id))
        return
      }
    }
    setBookmarks([...bookmarks, blog])
  }
  const addReadingTimeHandler = (blog) => {
    // console.log(blog)
    const readTimeString = blog.reading_time.split(' ')[0]
    const readTime = Number(readTimeString)
    setReadingTime(readingTime + readTime)
    const remaining = bookmarks.filter(bookmark => bookmark.id !== blog.id)
    setBookmarks(remaining)
  }
  return (
    <>
      <Navbar />
      <main className='max-w-[1200px] mx-auto flex gap-6'>
        <hr />
        <Blogs
          addBookMarkHandler={addBookMarkHandler}
          addReadingTimeHandler={addReadingTimeHandler}
          // isBookMarked={isBookMarked}
        />
        <Bookmarks bookmarks={ bookmarks } reading_time={readingTime}/>
      </main>
    </>
  )
}

export default App
