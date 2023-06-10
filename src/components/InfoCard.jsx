import {Image, StyleSheet, Text, View} from 'react-native'

export default InfoCardScreen = (props) => {
  console.log(props.movie)
    return (
      <View style={styles.container}>
        <View style={styles.headerContent}>
          {props.movie.Poster &&
            <Image source={{uri: props.movie.Poster}} style={styles.image}/>
          }
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{props.movie.Title}</Text>
            <Text style={styles.yearText}>{props.movie.Year}</Text>
            <Text style={styles.ratingText}>{props.movie.Rated}</Text>
          </View>
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.sectionTitleText}>Plot</Text>
          <Text style={styles.sectionContentText}>{props.movie.Plot}</Text>
          <Text style={styles.sectionTitleText}>Actors</Text>
          <Text style={styles.sectionContentText}>{props.movie.Actors}</Text>
          <Text style={styles.sectionTitleText}>Ratings</Text>
          <Text style={styles.sectionContentText}>{`${props.movie.Ratings[0].Source}: ${props.movie.Ratings[0].Value}`}</Text>
          <Text style={styles.sectionContentText}>{`${props.movie.Ratings[1].Source}: ${props.movie.Ratings[1].Value}`}</Text>
          <Text style={styles.sectionContentText}>{`${props.movie.Ratings[2].Source}: ${props.movie.Ratings[2].Value}`}</Text>
          <Text style={styles.sectionTitleText}>Awards</Text>
          <Text style={styles.sectionContentText}>{props.movie.Awards}</Text>
          <Text style={styles.sectionTitleText}>Genre</Text>
          <Text style={styles.sectionContentText}>{props.movie.Genre}</Text>
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
      margin: 10,
      padding: 15,
    },
    headerContent: {
      flexDirection: 'row'
    },
    image: {
      width: '50%',
      resizeMode: 'contain'
    },
    infoContent: {},
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
      justifyContent: 'flex-end',
      paddingLeft: 10,
    },
    sectionContentText: {
      fontWeight: '400',
      fontSize: 14,
      paddingHorizontal: 10,
    },
    sectionTitleText: {
      color: 'black',
      fontWeight: '600',
      fontSize: 18,
      paddingTop: 15,
      paddingBottom: 5,
      textDecorationLine: 'underline',
    },
  })