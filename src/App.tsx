import React, { StrictMode } from 'react';

import {Header} from './presentation/components/header/header.tsx';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { images, logos } from './assets/categoriesIcons/assets.ts';
import PerfilScreen from './presentation/screens/Perfil/PerfilScreen.tsx';
import FooterComponent from './presentation/components/footer/FooterComponent.tsx';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import RegistroScreen from './presentation/screens/Registro/RegistroScreen.tsx';
import { LoginScreen } from './presentation/screens/Login/LoginScreen.tsx';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './presentation/screens/Home/HomeScreen.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigator from './presentation/routes/StackNavigator.tsx';
import { View } from 'react-native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  const description = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, impedit perspiciatis ad veniam et eos dolor modi deserunt. Corporis harum ipsam eum aspernatur dolore totam cumque voluptatem nostrum reprehenderit quo.'
  const fotos = new Array();
  fotos.push( images.sec1)
  fotos.push( images.sec2)
  fotos.push( images.sec3)

  return (
    // <StrictMode>
      <GestureHandlerRootView>
        <NavigationContainer>
          <PaperProvider>
            <Header />
              <StackNavigator />
          </PaperProvider>
        </NavigationContainer>
      </GestureHandlerRootView>
    // </StrictMode>
  );
};

export default App;