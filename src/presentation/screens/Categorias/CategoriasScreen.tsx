import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import CategoriasGrid from '../../components/Categorias/CategoriasGrid';
import { ScrollView } from 'react-native-gesture-handler';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from 'src/presentation/routes/StackNavigator';

// Definir el tipo para navigation
type CategoriasScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categorias'>;

interface CategoriasScreenProps {
  route: RouteProp<RootStackParamList, 'Categorias'>;
  navigation: CategoriasScreenNavigationProp; // Añadir navigation a las props
}

const CategoriasScreen: React.FC<CategoriasScreenProps> = ({ route }) => {
  const { id, subcategorias } = route.params; // Recibir subcategorías como parámetro
  const navigation = useNavigation<CategoriasScreenNavigationProp>(); // Obtener el objeto navigation con el tipo correcto

  const handleSubcategoriaPress = (id: number) => {
    // Navegar a la pantalla de perfiles con el id de la subcategoría
    navigation.navigate('Perfiles', { subcategoriaId: id });
  };

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 30, alignItems: 'center' }}>
        <Text style={styles.title}>Subcategorías</Text>
        {subcategorias && ( // Verificar si subcategorías está definido
          <CategoriasGrid
            categorias={subcategorias} // Mostrar las subcategorías recibidas
            onCategoriaPress={handleSubcategoriaPress}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CategoriasScreen;