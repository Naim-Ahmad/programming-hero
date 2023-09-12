
export default function UserInfo({ id, name, phone, handleRemove }) {
    // console.log(data, setData)
    
  return (
      <div>
          <h2>{name}</h2>
          <h4>{phone}</h4>
          <button onClick={()=> handleRemove(id)}>Remove</button>
    </div>
  )
}
