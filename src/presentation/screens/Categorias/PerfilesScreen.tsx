import React from 'react';
import { View, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/presentation/routes/StackNavigator';
import {gridElement, usuarios} from './../../api/data'
import DisplayGrid from '../../../presentation/components/Categorias/DisplayGrid';


interface PerfilesScreenProps {
  route: RouteProp<RootStackParamList, 'Perfiles'>;
}

export const PerfilesScreen: React.FC<PerfilesScreenProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Perfiles'>>();
  const { subcategoriaId } = route.params;
  const navigation = useNavigation<RootStackParamList>();
  const onPress = (id: number)=>{
    navigation.navigate('Perfil', {perfilId: id});
  }

  const usuariosFiltrados: gridElement[] = usuarios
  .filter((usuario) => usuario.subCategoriaId === subcategoriaId) // Filtra por subcategoría
  .map((usuario) => ({
    id: usuario.id, // Extrae el id
    nombre: usuario.info.nombre, // Extrae el nombre desde info
    imagen: usuario.imagenes.avatar, // Extrae la imagen desde imagenes.avatar
  }));

return (
  <View style={styles.container}>
    <DisplayGrid
      elementos={usuariosFiltrados} // Envía los usuarios reformateados
      onPress={onPress}
    />
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerfilesScreen;