import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import BannerCategory from './../../../presentation/components/Categorias/BannerCategory';
import {categorias,subcategorias} from '../../api/data'

type RootStackParamList = {
  Login: undefined;
  Registro: undefined;
  Home: undefined;
  Categorias: { id: number; subcategorias?: any[] }; // Añadir subcategorías como parámetro
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }: HomeScreenProps) => {

  

  const handlePress = (id: number) => {
    // Filtrar las subcategorías que pertenecen a la categoría seleccionada
    const subcategoriasFiltradas = subcategorias.filter((sub) => sub.categoriaId === id);

    // Navegar a CategoriasScreen con las subcategorías correspondientes
    navigation.navigate('Categorias', { id, subcategorias: subcategoriasFiltradas });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.sectionsContainer}>
        {categorias.map((categoria) => (
          <BannerCategory
            key={categoria.id}
            handlePress={handlePress}
            id={categoria.id}
            nombre={categoria.nombre}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 50,
    paddingVertical: 30,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    alignItems: 'center',
  },
});

export default HomeScreen;