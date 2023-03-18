import { getGifs } from "../Helpers/GetGifs"
import { useEffect, useState } from "react"

export const useFetchGifs = (category) => {
    
    const [gridElements, setGrifElements] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const gettingGifs = async() => {
        const gifs = await getGifs(category)
        setGrifElements(gifs)
        setIsLoading(false)
    }

    useEffect(() => {
        gettingGifs(category)
    }, [])

    return{
        gridElements,
        isLoading
    }
}