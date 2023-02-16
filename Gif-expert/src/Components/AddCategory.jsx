import { useState } from "react"

export const AddCategoryComponent = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange = ({target}) => {
        console.log(target.value)
        setInputValue(target.value)
    }
    const onSubmit = () => {
        event.preventDefault()
        if(inputValue.length <1) return
        setCategories(categories => [...categories, inputValue])
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