import Swal from "sweetalert2";
import Form from "../shared/Form";
import Input from "../shared/Input";

export default function AddProduct() {
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const photoURL = form.photoURL.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const productInfo = {
      name: productName,
      brandName,
      type,
      price,
      image: photoURL,
      rating,
      description,
    };

    fetch(`https://tech-pulse-pro-server.vercel.app/products`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Successfully Added Your Product",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed",
            text: "Failed To Add Your Product",
          });
        }
      });
  };
  return (
    <Form
      title="Add Your Product"
      submitValue="Add Product"
      handleSubmit={handleAddProduct}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Product Name"
          label="Product Name"
          name="productName"
          required
        />
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <select
            name="brandName"
            defaultValue="pickOne"
            className="select select-bordered select-accent"
          >
            <option disabled value="pickOne">
              Pick one
            </option>
            <option value="Google">Google</option>
            <option value="Microsoft">Microsoft</option>
            <option value="Apple">Apple</option>
            <option value="Sony">Sony</option>
            <option value="Samsung">Samsung</option>
            <option value="Xiaomi">Xiaomi</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input placeholder="Type" label="Type" name="type" required />
        <Input
          type="number"
          placeholder="Price"
          label="Price"
          name="price"
          required
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Photo URL"
          label="Product Image URL"
          name="photoURL"
          required
        />
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <select
            name="rating"
            className="select select-bordered select-accent"
            defaultValue="pickOne"
          >
            <option value="pickOne" disabled>
              Pick one
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Product Description</span>
        </label>
        <textarea
          name="description"
          className="textarea textarea-bordered textarea-accent h-16"
          placeholder="Description"
        ></textarea>
      </div>
    </Form>
  );
}
