import { GifGridItem } from "./GifGridItem"
import { useFetchGifs } from "../Hooks/useFetchGifs" 

export const GifGrid = ({category}) => {

    const { gridElements, isLoading} = useFetchGifs(category)

    return(
        <>
            <h3>{category}</h3>
            { isLoading && <h5>Loading gifs</h5>}
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