import { useContext, useRef, useState } from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../../contexts/AuthProvider';

const getReview = num => {
  const stars = []
  const round = Math.round(Number(num))
  for (let i = 0; i < round; i++){
    stars.push(<BsFillStarFill key={i} className='text-green-500'/>)
  }
  while (stars.length < 5) {
    stars.push(<BsFillStarFill key={stars.length} className='text-gray-300'/>)
  }
  return stars;
}


export default function ProductDetails() {
  const product = useLoaderData()
  const { user } = useContext(AuthContext)
  const quantityRef = useRef()
  const [price, setPrice] =  useState(product?.price)

  const handleAddCart = () => {
    const cart = product;
    cart.user = user.displayName;
    cart.email = user.email;
    cart.quantity = quantityRef.current.value;
    cart.price = price + Number((price < 1000 ? '100' : '50'))
    delete cart.rating
    delete cart.type
    delete cart._id
    
    fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/carts`, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(cart)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Added Cart Successfully!'
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Failed To Add cart!'
          })
      }
    })
  }
  return (
    <div className='max-w-7xl mx-auto px-6'>
      <h2 className='text-xl md:text-2xl lg:text-4xl text-center font-bold mt-10'>Product Details of <span className="text-green-500">{product?.name}</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="">
          <figure>
            <img className='lg:max-h-96 w-full' src={product?.image} alt={ product?.name } />
          </figure>
          {product?.description && <p className='text-4xl font-medium'>{ product?.description }</p>}
        </div>
        <div className="">
          <h2 className='text-2xl md:text-4xl font-bold mb-5'>{product?.name}</h2>
          <span className="text-3xl font-bold">${ product?.price }</span>
          <div className="flex gap-1 my-3 items-center">
            {getReview(product?.rating)}
            <span className="bg-cyan-200 max-w-fit px-2 py-1 ml-2 rounded-lg font-medium"> 
              {product?.rating}
            </span>
          </div>

          <div className='mb-4'>
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>  
            <select ref={quantityRef} onChange={ (e)=> setPrice(product?.price * Number(e.target.value))} name="quantity" className="select select-sm select-bordered max-w-xs">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div>
            <p className='font-medium'>Total Price: <span className='text-xl font-semibold'>${ price}</span></p>
            <p className='font-medium'>Shipping Cost: <span className='text-xl font-semibold'>${ price < 1000 ? '100' : '50'}</span></p>
            <p className='font-medium'>Total Cost: <span className='text-xl font-semibold'>${ price + Number((price < 1000 ? '100' : '50'))}</span></p>
          </div>
          
          <div className='my-5'>
            <button onClick={handleAddCart} className='btn btn-accent capitalize w-full'> Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
