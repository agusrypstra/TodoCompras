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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={styles.container}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 50,
  },
  sectionsContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    gap: 40,
    marginVertical: 100,
  },
});

export default HomeScreen;
