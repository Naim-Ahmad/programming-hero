import { useEffect, useState } from 'react';

export default function TimerAndCount() {
    const [time, setTime] = useState(new Date())
    const [count, setCount] = useState(0)
    
    const handleCount = () => {
        const plusOne = count + 1
        setCount(plusOne)
    }
    useEffect(() => {
        console.log('title changed')
        document.title = count;   
    }, [count])

    useEffect(() => {
        const tick = () => {
            console.log('date updated')
            setTime(new Date())
        }
        const interval = setInterval(tick, 1000)

        return ()=> clearInterval(interval)
    }, [])

  return (
      <div>
          <p>Time: {time.toLocaleTimeString()}</p>
          <p>Count: {count}</p>
          <button onClick={handleCount}>Click</button>
          
    </div>
  )
}
