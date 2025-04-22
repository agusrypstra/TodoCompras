import 'react-native-reanimated';
import React from 'react';
import { Header } from './presentation/components/header/header.tsx';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './presentation/routes/StackNavigator.tsx';
const App = () => {
  return (
    <PaperProvider>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        
          <Header />
          <DrawerNavigator />
        
      </NavigationContainer>
    </GestureHandlerRootView>
    </PaperProvider>
  );
};
export default App;
