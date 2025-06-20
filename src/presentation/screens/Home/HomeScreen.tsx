import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BannerCategory from '../../../presentation/components/Categorias/BannerCategory';
import { categorias, subcategorias } from '../../api/data';
import SearchBar from '../../../presentation/components/SearchBar';

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Home: undefined;
  Categorias: { id: number; subcategorias?: any[] };
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const handlePress = (id: number) => {
    const subcategoriasFiltradas = subcategorias.filter((sub) => sub.categoriaId === id);
    navigation.navigate('Categorias', { id, subcategorias: subcategoriasFiltradas });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>

    <SearchBar onSearch={(e)=>{
      // Aquí puedes implementar la lógica de búsqueda
      console.log(e);
    }} placeholder='Buscar locales' key={0}/>


      {categorias.map((categoria) => (
        <View key={categoria.id}>
          <BannerCategory
          handlePress={handlePress}
          id={categoria.id}
          nombre={categoria.nombre}
          imagen={categoria.imagen}
        />
        </View>
      ))}

    </ScrollView>
  )
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que el contenido crezca y se centre
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    gap: 20, // Espacio entre los elementos
  },
});


export default HomeScreen;
