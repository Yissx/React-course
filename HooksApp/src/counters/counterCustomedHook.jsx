import { useCounter } from "../hooks/useCounter"

export const CounterCustomedHook = () => {

    const { counter, incrementCounter, decrementCounter, reset } = useCounter()

    return(
        <>
            <hr></hr>
            <h3>Counter that uses a customed hook: {counter}</h3>
            <button onClick={incrementCounter(1)}>+1</button>
            <button onClick={decrementCounter(1)}>-1</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}