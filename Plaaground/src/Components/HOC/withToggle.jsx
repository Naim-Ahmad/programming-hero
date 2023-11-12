/* eslint-disable react/display-name */
import { useState } from "react"

export default function withToggle(TogglerComp) {
    return function (props){
        const [isToggle, setIsToggle] = useState(true)
    
        const toggleHandler = ()=>{
            setIsToggle(!isToggle)
        }
        return <TogglerComp {...props} isToggle={isToggle} toggleHandler={toggleHandler}/>
    }
}