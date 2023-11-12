/* eslint-disable react/prop-types */

import { AiOutlineClose } from "react-icons/ai";

export default function TableRow({ data, handler }) {
  const { _id, img, serviceName, price, status, date } = data;
  console.log(img)
  console.log(data)
  return (
    <tr>
      <th>
        <button
          onClick={() => handler.handleDelete(_id)}
          className="btn btn-circle"
        >
          <AiOutlineClose />
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          {img && (
            <div className="avatar">
              <div className="w-24 rounded">
                <img src={img} />
              </div>
            </div>
          )}
          <div>
            <div className="font-bold">{serviceName && serviceName}</div>
          </div>
        </div>
      </td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        <button
          onClick={() => handler.handleStatus(_id)}
          className="btn btn-sm btn-error"
        >
          {status}
        </button>
      </th>
    </tr>
  );
}
