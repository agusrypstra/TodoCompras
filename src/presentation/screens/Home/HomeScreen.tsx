import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Inicio</Text>
      <View style={styles.sectionsContainer}>
        {categorias.map((categoria) => (
          <BannerCategory
            key={categoria.id}
            handlePress={handlePress}
            id={categoria.id}
            nombre={categoria.nombre}
            imagen={categoria.imagen}            
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    textAlign:'center'
  },
  sectionsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    marginVertical: 100
    // alignItems: 'center',
  },
});

export default HomeScreen;