import { useState } from "react"

export const HooksApp = () => {

    const [counters, setCounters] = useState({
        c1: 10,
        c2: 20,
        c3: 30
    })
    const {c1, c2, c3} = counters

    return (
    <>
        <h1>Hello world from HooksApp</h1>
        <hr></hr>
        <h3>Counter 1: {c1}</h3>
        <h3>Counter 2: {c2}</h3>
        <h3>Counter 3: {c3}</h3>
        <hr></hr>

       <button className="btn" onClick={ () => setCounters({ ...counters, c1: c1 + 1}) }>+1</button> 
    </>)
}