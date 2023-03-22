import { useState } from "react"

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)
    const incrementCounter = (value = 1) => {
        setCounter(counter + value)
    }
    const decrementCounter = (value = 1) => {
        if (counter === 0) return
        setCounter(counter - value)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    return {
        counter,
        incrementCounter,
        decrementCounter,
        reset
    }
       
}