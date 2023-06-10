import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from '../screens/Home'
import MovieInfo from '../screens/MovieInfo'


const Stack = createNativeStackNavigator()

export default MainNav = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerStyle: {
        backgroundColor: 'darkgrey'
      }
    }}>
      <Stack.Screen component={Home} name="Home" options={{headerShown: false}} />
      <Stack.Screen component={MovieInfo} name="Movie Info" options={{animation: 'slide_from_right'}}/>
    </Stack.Navigator>
  )
}