import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LoginScreen } from '../screens/Login/LoginScreen';
import RegistroLocal from '../screens/RegistroLocal/RegistroLocal';
import HomeScreen from '../screens/Home/HomeScreen';
import CategoriasScreen from '../screens/Categorias/CategoriasScreen';
import PerfilesScreen from '../screens/Categorias/PerfilesScreen';
import PerfilScreen from '../screens/Perfil/PerfilScreen';
import { NotificationScreen } from '../screens/Notifications/NotificationsScreen';
import RegistroScreen from '../screens/RegistroUsuario/RegistroScreen';

// Definir los tipos de las rutas

export type RootStackParamList = {
  navigate(arg0: string, arg1: { perfilId: number; }): unknown;
  Login: undefined;
  RegistroLocal: undefined;
  Home: undefined;
  Categorias: { id: number; subcategorias?: any[] };
  Perfiles: { subcategoriaId: number }; // Definir la pantalla Perfiles y sus parámetros
  Perfil: undefined; // Definir la pantalla Perfiles y sus parámetros
  Notifications: undefined; // Definir la pantalla Perfiles y sus parámetros
  Registro: undefined; // Definir la pantalla Perfiles y sus parámetros
};

// Crear el Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  return (  
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="RegistroLocal" component={RegistroLocal} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Categorias" component={CategoriasScreen} />
      <Stack.Screen name="Perfiles" component={PerfilesScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Registro" component={RegistroScreen} />
    </Stack.Navigator>
  );
};

// **Drawer Navigator que envuelve el Stack**
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: '75%', // 🔥 Ancho del drawer
        },
      }}
    >
      <Drawer.Screen
        name="Main"
        component={StackNavigator}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
