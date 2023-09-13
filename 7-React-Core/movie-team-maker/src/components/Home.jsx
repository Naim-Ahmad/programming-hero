import { useState } from "react";
import Swal from "sweetalert2";
import Cards from "./Cards";
import Carts from "./Carts";

export default function Home() {
    const [selected, setSelected] = useState([])
    const [cost, setCost] = useState(0)
    const [remaining, setRemaining] = useState(20000)
    
    const selectActor = (actor) => {
        const isExist = selected.find(obj=> obj.id === actor.id)
        if (isExist) {
            return Swal.fire({
                icon: 'error',
                title: 'The Member is Already selected!'
            })
        } else {
            const selectedArray = [...selected, actor]
            const totalCost = selectedArray.reduce((a, b) => a += b.salary, 0)
            const totalRemaining = 20000 - totalCost;
            if (totalRemaining < 0) {
                return Swal.fire({
                    icon: 'error',
                    title: 'Budget Over!'
                })
            } else {
                setCost(totalCost)
                setRemaining(totalRemaining)
            }
            setSelected(selectedArray)
        }
    }
  return (
      <>
        <header className="container">
        <h1>Movie maker Team</h1>
        </header>
        <hr />
        <main className="container flex">
              <Cards selectActor={ selectActor } />
              <Carts
                  selected={selected}
                  cost={cost}
                  remaining={remaining}
              />
        </main>
    </>
  )
}
