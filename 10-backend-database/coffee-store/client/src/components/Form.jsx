/* eslint-disable react/prop-types */



function Form({title, description, handleSubmit, children, value}) {
  return (
    <div className="bg-gray-03 rounded-lg max-w-5xl py-16 px-28 mx-auto mt-10">
          <h1 className="font-title text-dark-01 text-4xl text-center">{ title }</h1>
          <p className="text-center mt-6">{ description }</p>
          <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-x-4 my-5 font-medium">
              {children}
            </div>
                <input type="submit" value={value} className="btn btn-neutral w-full font-title capitalize"/>
          </form>
    </div>
  )
}

export default Form
