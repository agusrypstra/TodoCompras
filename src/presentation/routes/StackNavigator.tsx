import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login/LoginScreen';
import RegisterScreen from '../screens/Registro/RegistroScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriasScreen from '../screens/Categorias/CategoriasScreen';
import PerfilesScreen from '../screens/Categorias/PerfilesScreen';

// Definir los tipos de las rutas
export type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Home: undefined;
  Categorias: { id: number; subcategorias?: any[] };
  Perfiles: { subcategoriaId: number }; // Definir la pantalla Perfiles y sus parámetros
};
// Crear el Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Registro" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categorias" component={CategoriasScreen} />
      <Stack.Screen name="Perfiles" component={PerfilesScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;