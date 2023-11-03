import { useState } from "react"
import { useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"
import NoItem from "./NoItem"
import TableRow from "./TableRow"


export default function Cart() {
  const loadedCarts = useLoaderData()
  const [carts, setCarts] = useState(loadedCarts)

  const handleRemoveCardItem = id => {
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
        fetch(`https://tech-pulse-pro-server-sz1lbn1zh-naim-ahmads-projects.vercel.app/carts/${id}`, {
          method: 'delete'
      })
          .then(res => res.json())
          .then(data => {
              if (data.deletedCount) {
                setCarts(carts.filter(card=> card._id !== id))
                Swal.fire(
                  'Removed!',
                  'Item Removed Successfully!',
                  'success'
                )
          }
      })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
}
  return (
    <section>
      {carts.length ? <div className="max-w-7xl min-h-screen mx-auto px-6 my-10">
      <h1 className="text-2xl lg:text-5xl font-bold text-center mb-8">My Cart</h1>
      <div className="">
        {/* {carts.map(data=> <Card data={data} key={data._id}/>)} */}
        <div className="overflow-x-auto">
          <table className="table table-xs sm:table-sm md:table-md lg:table-lg">
            {/* head */}
            <thead>
              <tr>
                <th>Product Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {carts.map(data => <TableRow
                key={data._id}
                data={data}
                handleRemoveCardItem={handleRemoveCardItem}
              />)}
            </tbody>
            
          </table>
        </div>
      </div>
      </div>
    : <NoItem/>  
  }
  </section>
  )
}
