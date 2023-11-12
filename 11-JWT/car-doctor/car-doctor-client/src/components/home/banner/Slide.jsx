/* eslint-disable react/prop-types */

function Slide({ index, img }) {
  return (
    <div
      id={`slide${index}`}
      style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="carousel-item relative w-full mt-10"
    >
      <div
        style={{
          background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)`,
        }}
        className="hero-overlay bg-opacity-60 flex items-center"
      >
        <div className="space-y-6 text-white w-1/2 ml-20">
          <h1 className="text-6xl font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p>
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
          <div className="space-x-4">
            <button className="btn btn-error">Discover More</button>
            <button className="btn btn-outline btn-error">
              Latest Project
            </button>
          </div>
        </div>
      </div>

      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-3 gap-4">
        <a href={`#slide${index - 1}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${index + 1}`} className="btn btn-circle btn-error">
          ❯
        </a>
      </div>
    </div>
  );
}

Slide.propTypes = {};

export default Slide;
