import {Text, ScrollView} from 'react-native'
import InfoCard from '../components/InfoCard'

export default MovieInfoScreen = (props) => {
  return (
    <ScrollView>
      <InfoCard movie={props.route.params.movie} />
    </ScrollView>
  )
}