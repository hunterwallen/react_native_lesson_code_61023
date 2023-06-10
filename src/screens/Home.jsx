import {useState} from 'react'
import {Text, View} from 'react-native'
import SearchBar from '../components/SearchBar'
import SearchCard from '../components/SearchCard'
import { searchForMovie } from '../utils/apiCalls'

export default HomeScreen = () => {
  const [searchResults, setSearchResults] = useState()


  const handleSearch = async (searchString) => {
    console.log(searchString)
    const result = await searchForMovie(searchString)
    if(result.Title){
      setSearchResults(result)
    }
  }

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      {searchResults &&
        <SearchCard movie={searchResults} />
      }
    </View>
  )
}