import {useState} from 'react'
import {} from 'react-dom'
import {AddCategoryComponent} from './Components/AddCategory'
import { GifGrid } from './Components/GifGrid'

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(["Death note", "Shingeki no kioyin", "Boku no Hero"])

    const onAddCategory = (category) => {
        if(categories.map(element => element.toLowerCase()).includes(category.toLowerCase())) return
        setCategories([category, ...categories])
    }
    return(
        <>
            <h1>GifExpert App by NYCV</h1>

            <AddCategoryComponent onNewCategory={onAddCategory}/>
            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}