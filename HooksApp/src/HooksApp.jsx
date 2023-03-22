import { CounterUseState } from "./counters/counterUseState"
import { CounterCustomedHook } from "./counters/counterCustomedHook"

export const HooksApp = () => {
    
    return(
        <>
        <h1>Hello world from HooksApp</h1>
        <CounterUseState />
        <CounterCustomedHook />

        </>
    )
}