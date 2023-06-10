import {Image, Pressable, StyleSheet, Text, View} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default SearchCardScreen = (props) => {
  const navigation = useNavigation()

  const handleInfoPress = () => {
    console.log('pressed info')
    navigation.navigate("Movie Info", {movie: props.movie})
  }

  return (
    <View style={styles.container}>
      <Image source={{uri: props.movie.Poster}} style={styles.image}/>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{props.movie.Title}</Text>
        <Text style={styles.yearText}>{props.movie.Year}</Text>
        <Text style={styles.ratingText}>{props.movie.Rated}</Text>
        <Pressable onPress={handleInfoPress} hitSlop={10} style={styles.infoButton}>
          <Text style={styles.btnText}>More Info</Text>
        </Pressable>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 10,
    flexDirection: 'row',
    margin: 10,
    padding: 15,
  },
  image: {
    height: 100,
    width: 100
  },
  nameText: {
    fontWeight:  '800',
    fontSize: 24,
    color: 'black', 
    paddingHorizontal: 5
  },
  yearText: {
    fontWeight: "500",
    fontSize: 18,
    color: 'black', 
    paddingHorizontal: 5
  },
  ratingText: {
    fontWeight: "500",
    fontSize: 18,
    color: 'black', 
    paddingHorizontal: 5
  },
  btnText: {
    fontWeight: '800',
    fontSize: 14,
    color: 'blue'
  },
  infoButton: {
    paddingHorizontal: 5
  },
  textContainer: {
    flex: 1,
    paddingLeft: 10,
  }
})