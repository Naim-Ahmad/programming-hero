
import { Link, Outlet } from 'react-router-dom'

export default function Root() {
  return (
      <div>
          <Link to="/phones">Phones</Link>
          <Outlet></Outlet>
    </div>
  )
}
