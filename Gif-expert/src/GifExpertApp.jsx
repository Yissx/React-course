import {useState} from 'react'
import {} from 'react-dom'
import {AddCategoryComponent} from './Components/AddCategory'

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(["Pinocho", "Shingeki no kioyin", "Boku no Hero"])
    const onAddCategory = (category) => {
        setCategories([...categories, category])
    }
    return(
        <>
            <h1>GifExpert App from NYCV</h1>

            <AddCategoryComponent onNewCategory={onAddCategory}/>

            <ol>
                {
                    categories.map(category => {
                        return <li key={category}> {category} </li>
                    })
                }
            </ol>
        </>
    )
}