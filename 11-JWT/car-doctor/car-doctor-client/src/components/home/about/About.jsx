/* eslint-disable react/no-unescaped-entities */
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

export default function About() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content w-full flex-col lg:flex-row">
        <div className="text-center md:flex-1 lg:text-left">
          <div className="relative">
            <img className="w-[480px] rounded-lg" src={person} alt="" />
            <img
              className="absolute right-10 -bottom-12 w-1/2 border-4 border-white rounded-xl"
              src={parts}
              alt=""
            />
          </div>
        </div>
        <div className="space-y-6 md:flex-1">
          <h1 className="text-orange-500 font-semibold">About Us</h1>
          <h2 className="text-4xl font-bold">
            We are qualified & of experience in this field
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="btn btn-error">Get More Info</button>
        </div>
      </div>
    </div>
  );
}
