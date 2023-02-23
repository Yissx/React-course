import { useState } from "react"

export const AddCategoryComponent = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = () => {
        event.preventDefault()
        let value = inputValue.trim()
        if(value.length <1) return
        onNewCategory(value)
        setInputValue('')
    }

    return(
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}