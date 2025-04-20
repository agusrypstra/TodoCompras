import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BannerCategory from '../../../presentation/components/Categorias/BannerCategory';
import { categorias, subcategorias } from '../../api/data';

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
      <View style={styles.container}>
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
      </View>
    </ScrollView>
  )
};
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1, // Permite que el contenido crezca y se centre
  },
  container: {
    width: "100%", // Opcional: Controla el ancho del contenido
    padding: 20,
    gap: 30,
  },
});


export default HomeScreen;
