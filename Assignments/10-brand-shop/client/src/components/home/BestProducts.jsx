const BestProducts = () => {
  return (
    <section className="my-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-3">
        Our <span className="text-green-500">Best</span> product
      </h2>
      <div className="card my-10 max-w-7xl mx-auto  lg:card-side bg-base-100 shadow-xl">
        <figure data-aos="fade-right" className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lfGVufDB8fDB8fHww"
            alt="Album"
          />
        </figure>
        <div data-aos="fade-left" className="card-body flex-1">
          <h1 className="text-xl font-bold mb-2">
            High-Performance Audiophile{" "}
            <span className="text-green-500">Headphones</span>
          </h1>
          <div>
            <p className=" text-gray-700">
              Experience the ultimate in sound quality with our high-performance
              audiophile headphones. These premium headphones are meticulously
              engineered to deliver unparalleled audio precision and clarity,
              making them the perfect choice for discerning music enthusiasts
              and professionals.
            </p>
            <div className="my-4">
              <h2 className="text-xl font-semibold mb-3">Key Features:</h2>
              <ul className="text-left text-gray-700 list-disc ps-9">
                <li className="">Crystal Clear Sound</li>
                <li className="">Noise Isolation</li>
                <li className="">Comfortable Fit</li>
                <li className="">Premium Materials</li>
                <li className="">Wired and Wireless</li>
                <li>Sleek Design</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
