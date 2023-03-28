import { useState } from "react"

export const CounterUseState= () => {
    const [counters, setCounters] = useState({
        c1: 10,
        c2: 20,
        c3: 30,
    })
    const {c1, c2, c3} = counters

    return (
    <>
        
        <hr></hr>
        <h3>Counter that uses useState</h3>
        <p>Counter 1: {c1}</p>
        <p>Counter 2: {c2}</p>
        <p>Counter 3: {c3}</p>
        
       <button className="btn" onClick={ () => setCounters({ ...counters, c1: c1 + 1}) }>+1</button> 
    </>)
}