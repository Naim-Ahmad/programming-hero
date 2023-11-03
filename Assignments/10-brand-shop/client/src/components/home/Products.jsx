import { useLoaderData } from "react-router-dom"
import Card from "../shared/Card"


export default function Products() {
    const loadedBrands = useLoaderData()
  
    return (
        <section className="max-w-7xl mx-auto px-6 py-10">
            <h2 className="text-4xl font-bold text-center mb-3">Tech <span className="text-green-500">Brands</span></h2>
            <p className="mb-8 text-center sm:w-1/2 mx-auto text-sm sm:text-base">Explore tech excellence with six leading brands. From Google's innovation to Apple's iconic style, experience cutting-edge technology all in one place.</p>
            <div data-aos="fade-left    " className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    loadedBrands.map(brand=> <Card key={brand._id} data={brand}/>)
                }
            </div>
        </section>
  )
}
