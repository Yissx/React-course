import { CounterUseState } from "./components/useState/counterUseState"
import { CounterCustomedHook } from "./components/useState/counterCustomedHook"

export const HooksApp = () => {
    
    return(
        <>
        <h1>Hello world from HooksApp</h1>
        <CounterUseState />
        <CounterCustomedHook />

        </>
    )
}