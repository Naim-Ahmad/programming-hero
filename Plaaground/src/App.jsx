import './App.css'
import Toggle from './Components/HOC/Toggle'
import withToggle from './Components/HOC/withToggle'
import Toggler from './Components/RenderProps/Toggler'

function App() {
  const TogglerComp = withToggle(Toggle)

  return (
    <>
      <TogglerComp/>
      <Toggler render={(isToggle, toggleHandler)=>{
        return <div>
          <h1>Toggle with Render Props</h1>
          <button onClick={toggleHandler}>{isToggle ? 'ON': 'OFF'}</button>
        </div>
      }}/>
    </>
  )
}

export default App
