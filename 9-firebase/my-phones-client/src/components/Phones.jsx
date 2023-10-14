import { useLoaderData } from "react-router-dom"
import Phone from "./Phone"


export default function Phones() {
    const phones = useLoaderData()
    console.log(phones)
  return (
      <div>
          <h1>Phones {phones.length}</h1>
          {
              phones?.map(phone=> <Phone phone={phone} key={phone.id} />)
          }
    </div>
  )
}
