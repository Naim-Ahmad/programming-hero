/* eslint-disable react/prop-types */
export default function Banner({ img, title }) {
  return (
    <div
      style={{
        backgroundImage: `url('${img}')`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="carousel-item relative w-full h-[300px]"
    >
      <div
        style={{
          background: `linear-gradient(90deg, #151515 0%, rgba(21, 21, 21, 0.00) 100%)`,
        }}
        className="hero-overlay bg-opacity-60 flex items-center"
      >
        <div className="space-y-6 text-white  ml-20">
          <h1 className="text-4xl font-bold">{title}</h1>
        </div>
      </div>
    </div>
  );
}
