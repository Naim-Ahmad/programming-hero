import { useEffect, useState } from 'react'
import Category from './Category'

export default function Navigation() {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('./data/categories.json')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  
  return (
    <div>
        <h2 className="text-xl font-semibold mb-8">All Categories</h2>
        {
          categories.map(category => <Category key={category.id} name={ category.name }></Category>)
        }
        </div>
  )
}


