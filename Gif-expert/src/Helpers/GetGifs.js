export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0sHS1nGJDgLSLM1rKcLx0elV23NEurTt&q=${category}&limit=20`
    const respuesta = await fetch(url)
    const { data } = await respuesta.json()

    const gifs = data.map(gif => ({
        id: gif.id,
        url: gif.images.downsized_medium.url,
        title: gif.title
    }))
    console.log(gifs)
    return gifs
}