import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Form from "./Form";
import Input from "./Input";


export default function EditCoffee() {
  const coffee = useLoaderData()
  console.log(coffee)
  const updateCoffee = e => {
    e.preventDefault()
        const form = new FormData(e.target)
        const name = form.get('name')
        const chef = form.get('chef')
        const supplier = form.get('supplier')
        const taste = form.get('taste')
        const category = form.get('category')
        const details = form.get('details')
        const photo = form.get('photo')
        const price = form.get('price')

    const coffeeData = { name, chef, supplier, taste, details, category, photo, price }
    
    fetch(`https://server-indol-iota.vercel.app/coffee/${coffee._id}`, {
      method: 'put',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(coffeeData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount) {
          Swal.fire({
              icon: 'success', 
              title: 'Success',
              text: 'Updated Successfully!',
          })
      } else {
          Swal.fire({
              icon: 'error', 
              title: 'Failed',
              text: "Can't update coffee!",
          })
      }
    })
  }
  return (
    <Form
      title="Update Existing Coffee Details"
      description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
      value="Update Coffee Details"
      handleSubmit={updateCoffee}
    >
      <Input defaultValue={coffee.name} label="Name"  placeholder="Enter coffee name" />
      <Input defaultValue={coffee.chef} label="Chef" placeholder="Enter coffee chef" />
      <Input defaultValue={coffee.supplier} label="Supplier" placeholder="Enter coffee supplier" />
      <Input defaultValue={coffee.taste} label="Taste" placeholder="Enter coffee taste" />
      <Input defaultValue={coffee.category} label="Category" placeholder="Enter coffee category" />
      <Input defaultValue={coffee.details} label="Details" placeholder="Enter coffee details" />
      <Input defaultValue={coffee.price} label="Price" placeholder="Enter coffee price" />
      <Input defaultValue={coffee.photo} label="Photo" placeholder="Enter photo URL" />
    </Form>
  )
}
