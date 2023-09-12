

import { useState } from 'react'
import './App.css'
import UserInfo from './components/UserInfo'

function App() {
 
  const usersInfo = [
  { id: 1, name: 'naim', phone: '01727379283' },
  { id: 2, name: 'John', phone: '1234567890' },
  { id: 3, name: 'Alice', phone: '9876543210' },
  { id: 4, name: 'Bob', phone: '5555555555' },
  { id: 5, name: 'Emily', phone: '4444444444' },
  { id: 6, name: 'David', phone: '9999999999' },
  { id: 7, name: 'Sarah', phone: '3333333333' },
  { id: 8, name: 'Michael', phone: '6666666666' },
  { id: 9, name: 'Olivia', phone: '7777777777' },
  { id: 10, name: 'Ella', phone: '8888888888' }
  ]
  const [data, setData] = useState(usersInfo)

  const handleRemove = (id) => {
    const copyData = [...data]
        const index = copyData.findIndex(obj => obj.id === id)
        copyData.splice(index, 1)
        setData(copyData)
    
    // const newData = data.filter(obj => obj.id !== id)
    // setData(newData)
    }

  return (
    <>
      
      {data.map(obj => <UserInfo key={obj.id} {...obj} handleRemove={handleRemove} />)}
      <button onClick={()=>setData([])}>Remove All</button>

    </>
  )
}

export default App
