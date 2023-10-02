import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
      <header className="container">
        <Navbar />
      </header>
      <main className='container'>
        <Outlet/>
      </main>
    </>
  )
}

export default App
