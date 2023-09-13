import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [time, setTime] = useState(new Date())
  const [color, setColor] = useState('lightcoral')

  useEffect(() => {
    const tickTick = () => {
      setTime(new Date())
    }
    setInterval(tickTick, 1000)
    return ()=> clearInterval(tickTick)
  }, [])
  
  const handleChange = (event) => {
    setColor(event.target.value)
  }

  return (
    <>
      <h2>Let&apos;s see Colorful Time</h2>
      <label htmlFor="color-picker">Pick a color</label>
      <select onChange={handleChange} name="color-picker">
        <option value="lightcoral">lightcoral</option>
        <option value="midnightblue">midnightblue</option>
        <option value="rebeccapurple">rebeccapurple</option>
      </select>
      <h3 style={{color: color}}>{ time.toLocaleTimeString() }</h3>
    </>
  )
}

