/* eslint-disable react/prop-types */

export default function Toggle({isToggle, toggleHandler}) {

    return (
        <div>
            <h1>Toggle With HOC</h1>
            <button onClick={toggleHandler}>{isToggle ? 'ON': 'OFF'}</button>
        </div>
    )
}