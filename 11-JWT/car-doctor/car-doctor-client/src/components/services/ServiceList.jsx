/* eslint-disable react/prop-types */

import { AiOutlineArrowRight } from "react-icons/ai";

export default function ServiceList({ data, active, handler }) {
  return (
    <li
      className={`py-4 px-2 rounded-lg flex justify-between items-center cursor-pointer ${
        active && "bg-orange-500 text-white"
      }`}
      onClick={() => handler(data._id)}
    >
      {data.title}{" "}
      <AiOutlineArrowRight
        className={`${active || "text-orange-500"} font-bold`}
      />
    </li>
  );
}
