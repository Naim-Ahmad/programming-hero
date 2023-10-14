
import { useLoaderData } from 'react-router-dom'

export default function PhoneDetails() {
    const phone = useLoaderData()
    console.log(phone)
  return (
    <div>PhoneDetails</div>
  )
}
