import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home/HomeScreen.tsx'
import AboutScreen from '../screens/About/AboutScreen.tsx';
import MerchantsScreen from '../screens/Merchants/MerchantsScreen.tsx';
import RestaurantsScreen from '../screens/Restaurants/RestaurantsScreen.tsx';
import { RestaurantScreen } from '../screens/Restaurants/RestaurantScreen.tsx';
import { RootStackParams } from '../interfaces/RootStackParams.tsx';



const Stack = createStackNavigator<RootStackParams>();

export const MyStack = ()=> {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Merchants" component={MerchantsScreen} />
        <Stack.Screen name="Restaurants" component={RestaurantsScreen} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
      </Stack.Navigator>
    );
}
export default MyStack;