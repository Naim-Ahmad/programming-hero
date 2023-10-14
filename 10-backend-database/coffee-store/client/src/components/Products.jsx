import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./CoffeeCard"


export default function Products() {
    const loadedCoffees = useLoaderData()
    const [coffees, setCoffees] = useState(loadedCoffees)
    
  return (
      <div className="max-w-7xl mx-auto py-6">
          <h1 className="font-title text-6xl mb-10 text-center">Our Popular Products</h1>
          <div className="grid grid-cols-2 gap-5">
          {
              coffees?.map(coffee => <CoffeeCard key={coffee._id} coffee={ coffee} coffees={coffees} setCoffees={setCoffees} />)
          }
    </div>
      </div>
  )
}
