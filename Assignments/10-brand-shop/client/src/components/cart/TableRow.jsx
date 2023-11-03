import PropTypes from 'prop-types'
import { MdDelete } from 'react-icons/md'


function TableRow({ data, handleRemoveCardItem }) {
    
    
  return (
    <tr>  
        <td>
        <figure>
            <img className='w-28 h-20' src={ data?.image } alt={ data?.name } />
        </figure>
        </td>
        <td>
        {data?.name}
        <br/>
          <span className="badge badge-ghost badge-sm">{ data?.brandName}</span>
        </td>
          <td>{ data?.quantity}</td>
        <th>
        <button onClick={()=> handleRemoveCardItem(data?._id)} className="btn btn-ghost btn-sm"><MdDelete className='text-2xl'/></button>
        </th>
    </tr>
  )
}

TableRow.propTypes = {
    data: PropTypes.object,
    handleRemoveCardItem: PropTypes.func
}

export default TableRow
