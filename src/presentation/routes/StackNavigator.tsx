import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen.tsx'
import AboutScreen from '../screens/About/AboutScreen.tsx';
import MerchantsScreen from '../screens/Merchants/MerchantsScreen.tsx';
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen.tsx';
import TradesScreen from '../screens/Trades/TradesScreen.tsx';

const Stack = createStackNavigator();

export const MyStack = ()=> {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Merchants" component={MerchantsScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Trades" component={TradesScreen} />
      </Stack.Navigator>
    );
}
export default MyStack;