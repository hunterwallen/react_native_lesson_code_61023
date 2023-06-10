export const searchForMovie = async (searchString) => {
  try {
    const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2a08f43e&t=${searchString}`)
    const result = await response.json()
    return result
  } catch (e) {
    console.log(e)
  }
  
}