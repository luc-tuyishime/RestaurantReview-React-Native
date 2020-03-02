import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RestaurantList from 'components/RestaurantList';

const AppNavigator = createStackNavigator({
  Home: { screen: RestaurantList },
});

const App = createAppContainer(AppNavigator);

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
