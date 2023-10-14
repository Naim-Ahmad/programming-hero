import { useLoaderData } from "react-router-dom"


export default function ViewDetails() {
    const { name, chef, supplier, taste, details, category, photo, price } = useLoaderData()
  return (
    <div className="card card-side bg-gray-03 shadow-xl p-6 max-w-5xl mx-auto mt-10">
          <figure className='flex-1'><img src={photo} alt={ name } /></figure>
        <div className="card-body ml-10">
              <div> <span className='font-bold'>Name:</span> { name }</div>
              <div> <span className='font-bold'>Chef:</span> { chef }</div>
              <div> <span className='font-bold'>Price:</span> {price}</div>
              <div> <span className='font-bold'>Supplier:</span> {supplier}</div>
              <div> <span className='font-bold'>Taste:</span> {taste}</div>
              <div> <span className='font-bold'>Details:</span> {details}</div>
              <div> <span className='font-bold'>Category:</span> {category}</div>
        </div>
    
    </div>
  )
}
