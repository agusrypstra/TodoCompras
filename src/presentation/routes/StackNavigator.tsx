// navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Registro/RegistroScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriasScreen from '../screens/Categorias/CategoriasScreen';
// import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

// Definir los tipos de las rutas
export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Home: undefined;
  Categorias: undefined;
};

// Crear el Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categorias" component={CategoriasScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
