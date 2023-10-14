import Swal from "sweetalert2";
import Form from "./Form";
import Input from './Input';


export default function AddCoffee() {

    const handleAddCoffee = e => {
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

        const coffeeData = {name, chef, supplier, taste, details, category, photo, price}

        // send data to server
        fetch('http://localhost:5000/coffee', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success', 
                        title: 'Success',
                        text: 'Coffee Added Successful!',
                    })
                } else {
                    Swal.fire({
                        icon: 'error', 
                        title: 'Failed',
                        text: "Can't insert coffee!",
                    })
                }
            })
    }

  return (
      <Form
          title="Add Coffee"
          description="It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
          handleSubmit={handleAddCoffee}
          value="Add Coffee"
      >
            <Input label="Name" placeholder="Enter coffee name" />
            <Input label="Chef" placeholder="Enter coffee chef" />
            <Input label="Supplier" placeholder="Enter coffee supplier" />
            <Input label="Taste" placeholder="Enter coffee taste" />
            <Input label="Category" placeholder="Enter coffee category" />
            <Input label="Details" placeholder="Enter coffee details" />
            <Input label="Price" placeholder="Enter coffee price" />
            <Input label="Photo" placeholder="Enter photo URL" />
      </Form>
  )
}
