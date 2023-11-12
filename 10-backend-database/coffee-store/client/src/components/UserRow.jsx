/* eslint-disable react/prop-types */
import { BiPencil } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';


export default function UserRow({ user, serial, handleDelete }) {
    
    
  return (
      <tr className="hover">
          <th>{ serial}</th>
          <td>{ user.name }</td>
            <td>{user.email}</td>
          <td>{ user.password}</td>
          <td>
                    <Link to={`/editUser/${user._id}`}>
                    <button className="btn bg-[#3C393B] btn-sm"> <BiPencil className='text-white text-xl'/></button>  
                    </Link>
                    <button onClick={()=> handleDelete(user._id)} className="btn bg-[#EA4744] btn-sm"> <MdDelete className='text-white text-xl'/></button>
            </td>
        </tr>
  )
}
