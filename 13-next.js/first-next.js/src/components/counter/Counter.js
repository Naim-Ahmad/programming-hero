'use client'

import { useState } from "react"

export default function Counter() {
    const [counter, setCounter] = useState(0)
  return (
    <div>
        <div>Counter: {counter}</div>
        <div>
            <button className="btn btn-primary" onClick={()=> setCounter(counter + 1)}>Increment</button>
            <button onClick={()=> setCounter(counter +- 1)}>Decrement</button>
        </div>
    </div>
  )
}