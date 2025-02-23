import React from 'react';
import { View, StyleSheet } from 'react-native';
import CategoriaItem from './CategoriaItem';

interface Categoria {
  id: number;
  nombre: string;
  imagen: any; // Cambia a ImageSourcePropType si usas imágenes locales
}

interface CategoriasGridProps {
  categorias: Categoria[];
  onCategoriaPress: (id: number) => void;
}

const CategoriasGrid: React.FC<CategoriasGridProps> = ({ categorias, onCategoriaPress }) => {
  return (
    <View style={styles.grid}>
      {categorias.map((categoria) => (
        <CategoriaItem
          key={categoria.id}
          nombre={categoria.nombre}
          imagen={categoria.imagen}
          onPress={() => onCategoriaPress(categoria.id)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default CategoriasGrid;
