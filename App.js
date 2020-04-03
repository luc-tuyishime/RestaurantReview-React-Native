import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import RestaurantList from 'components/RestaurantList';

const AppNavigator = createStackNavigator({
  Home: { screen: RestaurantList },
});

console.disableYellowBox = true;

const App = createAppContainer(AppNavigator);

export default App;
