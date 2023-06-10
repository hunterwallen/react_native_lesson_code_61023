import {useState} from 'react'
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native'

export default SearchBarScreen = (props) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = () => {
    props.onSearch(searchValue)
    setSearchValue('')
  }

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setSearchValue}
        placeholder='Search for a movie title'
        style={styles.input}
        value={searchValue}
      />
      <Pressable onPress={handleSearch} style={styles.searchButton}>
        <Text style={styles.btnText}>Search</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontWeight: '600'
  },
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    padding: 15,
  },
  input: {
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 5,
    flex: 1,
    paddingVertical: 0
  },
  searchButton: {
    borderRadius: 10,
    backgroundColor: 'green',
    marginLeft: 10,
    padding: 5
  },
})