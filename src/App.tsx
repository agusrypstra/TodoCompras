import React from 'react';
import { View, StyleSheet } from 'react-native';
import {Header} from './presentation/components/header.tsx';
import {SearchBar} from './presentation/components/SearchBar.tsx';
import { PaperProvider } from 'react-native-paper';
import {CategoryContainer} from './presentation/components/CategoryContainer.tsx';
import { NavigationContainer } from '@react-navigation/native';
import './gesture-handler.native.tsx';
import StackNavigator from './presentation/routes/StackNavigator.tsx';

const App = () => {
  const handleSearch = (query: string) => {
    console.log('Buscando:', query);
    // Agrega tu lógica de búsqueda aquí
  };
  return (
    <NavigationContainer>
      <PaperProvider>
      <Header />
        <StackNavigator />
        {/* <View style={styles.container}>
            <SearchBar placeholder="Buscar..." onSearch={handleSearch} />
            <CategoryContainer />
        </View> */}
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Hace que el contenedor ocupe todo el espacio disponible
    backgroundColor: '#f9f9f9', // Color de fondo de la pantalla
    justifyContent: 'flex-start', // Alinea el contenido desde la parte superior
    padding: 20, // Márgenes internos (puedes ajustar este valor según lo necesites)
    gap: 20,
    marginHorizontal:10
  },
});
