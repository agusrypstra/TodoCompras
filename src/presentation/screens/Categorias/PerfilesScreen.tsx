import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'src/presentation/routes/StackNavigator';
import {usuarios} from './../../api/data'
import DisplayGrid from '../../../presentation/components/Categorias/DisplayGrid';


interface PerfilesScreenProps {
  route: RouteProp<RootStackParamList, 'Perfiles'>;
}

const PerfilesScreen: React.FC<PerfilesScreenProps> = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Perfiles'>>();
  const { subcategoriaId } = route.params;

  const onPress = ()=>{
    console.log('object')
  }

  const usuariosFiltrados = usuarios.filter(
    (usuario) => usuario.subCategoriaId === subcategoriaId
  );
  

  return (
    <View style={styles.container}>
      <DisplayGrid
        elementos={usuariosFiltrados}
        onElementPress={onPress}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PerfilesScreen;