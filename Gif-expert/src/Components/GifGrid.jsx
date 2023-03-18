import { getGifs } from "../Helpers/GetGifs"
import { useEffect, useState } from "react"
import { GifGridItem } from "./GifGridItem"

export const GifGrid = ({category}) => {

    const [gridElements, setGrifElements] = useState([])

    const gettingGifs = async() => {
        const gifs = await getGifs(category)
        setGrifElements(gifs)
    }

    useEffect(() => {
        gettingGifs(category)
    }, [])

    return(
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    gridElements.map((gif) => (
                        <GifGridItem 
                            key={gif.id}
                            {...gif}
                        />
                    ))
                }
            </div>
        </>
    )
}