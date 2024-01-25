/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

export default function Services() {
  const loadedServices = useLoaderData() || [];

  const [services, setServices] = useState(loadedServices);

  const handleSort = (e) => {
    const value = e.target.value;
    fetch(`http://localhost:5000/services?sort=${value}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  };

  return (
    <div>
      <div className="space-y-3 md:w-1/2 text-center mx-auto mb-6">
        <h2 className="text-orange-500 font-semibold">Services</h2>
        <h1 className="text-4xl font-bold">Our Service Area</h1>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services?.slice(0, 6).map((service, ind) => (
          <div key={ind} className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
              <img
                src={service.img}
                alt="Shoes"
                className="rounded-xl h-44 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{service.name}</h2>
              <div className="text-orange-500 flex justify-between">
                <p className="font-bold ">Price: {service.price}</p>
                <Link to={`/servicesDetails/${service._id}`}>
                  <AiOutlineArrowRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between py-10">
        <div>
          <select
            onChange={handleSort}
            name="sortByPrice"
            className="select select-bordered w-full max-w-xs"
          >
            <option value="default">Price Default</option>
            <option value="ascending">Price (Low to heigh)</option>
            <option value="descending">Price (heigh to low)</option>
          </select>
        </div>
        <Link to="/servicesDetails" className="btn btn-outline btn-error">
          Show More Services
        </Link>
      </div>
    </div>
  );
}