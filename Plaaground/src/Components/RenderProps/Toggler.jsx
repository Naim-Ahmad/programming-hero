import { useState } from "react"

export default function Toggler({render}) {
    const [isToggle, setIsToggle] = useState(true)

    const toggleHandler = ()=>{
        setIsToggle(!isToggle)
    }

    return render(isToggle, toggleHandler)
}