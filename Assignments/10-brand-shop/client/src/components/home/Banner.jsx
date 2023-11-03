

export default function Banner() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/0qLnM1T/apple-image.jpg)'}}>
        <div className="hero-overlay bg-opacity-80"></div>
        <div data-aos="fade-right" className="hero-content text-center text-neutral-content">
            <div className="max-w-5xl">
            <h1 className="mb-5 text-2xl md:text-3xl lg:text-5xl font-bold">Discover Premium <span className="text-green-500">Brands</span> <br /> and Exclusive <span className="text-green-500">Products</span></h1>
            <p className="mb-5 text-sm sm:text-base">Welcome to Tech Pulse Pro, your gateway to a world of top-tier brands and handpicked products. Explore a curated selection of six distinguished brands, each offering a unique range of high-quality items. Whether you are seeking the latest tech gadgets, stylish fashion, or innovative accessories, you wll find it all here. Take a closer look, add your own products, and create a shopping experience tailored to your preferences. Enjoy a seamless and fully responsive shopping journey at Tech Pulse Pro.</p>
            </div>
        </div>
        </div>
  )
}
