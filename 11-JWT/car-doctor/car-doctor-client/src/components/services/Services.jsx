/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Banner from "../shared/banner/Banner";
import CardWithNoImage from "../shared/card/CardWithNoImage";
import ServiceList from "./ServiceList";

export default function Services() {
  const services = useLoaderData();
  const [service, setService] = useState(services[0]);
  const { id: paramsID } = useParams();
  // console.log(params);

  const handleShowServiceByName = (id) => {
    const result = services.find((ser) => ser._id === id);
    setService(result);
  };

  useEffect(() => {
    if (paramsID) {
      handleShowServiceByName(paramsID);
    }
  }, []);

  return (
    <div>
      <Banner img={service.img} title="Services Details" />
      <main className="grid grid-cols-1 lg:grid-cols-4 my-16 gap-x-4 max-w-7xl mx-auto px-6">
        <section className="lg:col-span-3">
          <div className="mb-6">
            <figure>
              <img
                className="w-full rounded-2xl max-h-[80vh]"
                src={service.img}
                alt=""
              />
            </figure>
            <h1 className="text-3xl font-bold mt-10 mb-6">{service.title}</h1>
            <p>{service.description}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {service.facility.map((facility, ind) => (
              <CardWithNoImage key={ind}>
                <h1>{facility.name}</h1>
                <p>{facility.details}</p>
              </CardWithNoImage>
            ))}
          </div>
        </section>
        <aside>
          <section className="bg-[#F3F3F3] p-10 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Services</h2>
            <ul className="space-y-2">
              {services.map((ser, ind) => (
                <ServiceList
                  key={ind}
                  data={ser}
                  active={ser.title === service.title}
                  handler={handleShowServiceByName}
                />
              ))}
            </ul>
          </section>
          <div className="my-10 p-10 space-y-2">
            <p className="text-2xl font-bold">Price: ${service.price}</p>
            <Link
              to={`/checkOut/${service._id}`}
              className="btn btn-error btn-block"
            >
              Proceed Checkout
            </Link>
          </div>
        </aside>
      </main>
    </div>
  );
}
