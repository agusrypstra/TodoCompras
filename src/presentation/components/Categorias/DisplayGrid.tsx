import React from 'react';
import { View, StyleSheet } from 'react-native';
import ElementItem from './CategoriaItem';

interface Elemento {
  id: number;
  nombre: string;
  imagen: any; // Cambia a ImageSourcePropType si usas imágenes locales
}

interface DisplayGridProps {
  elementos: Elemento[];
  onElementPress: (id: number) => void;
}

const DisplayGrid: React.FC<DisplayGridProps> = ({ elementos, onElementPress }) => {
  return (
    <View style={styles.grid}>
      {elementos.map((elemento) => (
        <ElementItem
          key={elemento.id}
          id={elemento.id}
          nombre={elemento.nombre}
          imagen={elemento.imagen}
          onPress={() => onElementPress(elemento.id)}
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

export default DisplayGrid;
