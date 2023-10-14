
import { Button } from 'flowbite-react'
import { Link, useRouteError } from 'react-router-dom'

export default function NotFound() {
    const error = useRouteError()

  return (
      <div className='flex justify-center items-center h-[90vh]'>
          <div className='text-center'>
              <h1 className="text-9xl font-extrabold">{error.status}</h1>
              <p className="text-3xl">{error.statusText}</p>
              <div className="flex justify-center mt-6">
                  <Button><Link to='/'>Go Home</Link></Button>
              </div>
          </div>
    </div>
  )
}
