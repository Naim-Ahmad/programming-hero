/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { AiFillEye } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


function CoffeeCard({ coffee, coffees, setCoffees }) {
    const { _id, name, chef, price, photo } = coffee;
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
              if (result.isConfirmed) {
                  
                fetch(`https://server-indol-iota.vercel.app/coffee/${id}`, {
                    method: 'delete'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== id)
                            setCoffees(remaining)
                        }
                    })
              
            }
          })
    }
  return (
    <div className="card card-side bg-gray-03 shadow-xl p-6">
          <figure className='flex-1'><img src={photo} alt={ name } /></figure>
        <div className="card-body ml-10">
              <div> <span className='font-bold'>Name:</span> { name }</div>
              <div> <span className='font-bold'>Chef:</span> { chef }</div>
              <div> <span className='font-bold'>Price:</span> {price}</div>
        </div>
            <div className="card-actions justify-center items-center">
                <div className='flex flex-col gap-2'>
                  <Link to={`/viewDetails/${_id}`}>
                      <button className="btn bg-[#D2B48C] btn-sm"> <AiFillEye className='text-white text-xl' /></button>
                      </Link>
                  <Link to={`/editCoffee/${_id}`}>
                    <button className="btn bg-[#3C393B] btn-sm"> <BiPencil className='text-white text-xl'/></button>  
                    </Link>
                    <button onClick={()=> handleDelete(_id)} className="btn bg-[#EA4744] btn-sm"> <MdDelete className='text-white text-xl'/></button>
                </div>
            </div>
    </div>
  )
}

CoffeeCard.propTypes = {
    coffee: PropTypes.object
}

export default CoffeeCard
