import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"


export default function Home() {
    const userInfo = useContext(AuthContext)
    
  return (
      <div>Name: { userInfo.displayName}</div>
  )
}
